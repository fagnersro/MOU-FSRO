import {Text, ScrollView, StyleSheet, View, Pressable, Image, ImageSourcePropType, Modal } from "react-native";

import IMG_0086 from '@/assets/images/png/IMG_0086.png'
import { useState } from "react";
import { windowHeight, windowWidth } from "@/assets/utils/dimensions";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

type ShowMovieType = {
  type: string;
}

type blockAmountType = {
  id: number;
  imgMovie: ImageSourcePropType;
}[]

const blockAmount: blockAmountType = [
  {
    id: 1,
    imgMovie:IMG_0086,
  },
  {
    id: 2,
    imgMovie:IMG_0086,
  },
  {
    id: 3,
    imgMovie:IMG_0086,
  },
  {
    id: 4,
    imgMovie:IMG_0086,
  },
  {
    id: 5,
    imgMovie:IMG_0086,
  },
  {
    id: 6,
    imgMovie:IMG_0086,
  },
  {
    id: 7,
    imgMovie:IMG_0086,
  },
]

export default function ShowMovie({type}: ShowMovieType) {

  const [showMovie, setShowMovie] = useState<boolean>(false)
  
  return (
      <>
        <Modal 
          animationType="slide"
          transparent={true}
          visible={showMovie}
          onRequestClose={() => {
            setShowMovie(!showMovie);
          }}>
          <View style={containerPlayMovie.container}>
            <View style={containerPlayMovie.wrapperContent}>
              <Pressable onPress={() => setShowMovie(!showMovie)} style={containerPlayMovie.wrapperContentPressable}>
                <AntDesign name="arrowleft" style={{color: '#fff'}} size={20}/>
                <Text style={containerPlayMovie.text}>Voltar</Text>
              </Pressable>

              <View style={containerPlayMovie.contentMovie} >
                <Image source={IMG_0086} style={containerPlayMovie.containerPlayMovie}/>
              </View>

              <View style={containerPlayMovie.contentText}>
                <Text style={containerPlayMovie.textMovie}>
                  Ao toque de "Atenção", o militar que estava à vontade em formatura retorna
                  à posição de "descansar".
                </Text>
              </View>
            </View>
          </View>
        </Modal>

      <ScrollView horizontal={true}>
        {blockAmount.map((amount) => (
          <View style={containerMovie.container} key={amount.id}>
          <View style={containerMovie.wrapper}>
            {blockAmount.map((amount) => (
              <View style={containerMovie.block} key={amount.id}></View>
            ))}
          </View>

          <View style={containerMovie.wrapperPressable}>
            <Pressable style={containerMovie.pressabeArea} onPress={() => setShowMovie((prevState) => !prevState)}>
              <Image source={amount.imgMovie} style={containerMovie.pressableImage}/>
            </Pressable>
          </View>
          
          <View style={containerMovie.wrapper}>
            {blockAmount.map((amount) => (
              <View style={containerMovie.block} key={amount.id}></View>
            ))}
          </View>
        </View>
        ))}
        </ScrollView>
    </>
  );
}

const containerMovie = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flexDirection: 'row',
  },
  block: {
    width: 30,
    height: 30,
    borderWidth:10,
    borderColor: '#000000'
  },
  wrapperPressable: {
    backgroundColor: '#000000',
    width: 210,
  },
  pressabeArea: {
    overflow: 'hidden'
  },
  pressableImage: {
    width: 180,
    height: 300,
    resizeMode: 'stretch',
  }
})

const containerPlayMovie = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#000000E6',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperContent: {
    //borderWidth: 2,
    //borderColor: '#fff',
    
    padding: 20,
    width: windowWidth,
    height: windowHeight-150,
  },
  wrapperContentPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  contentText: {
    //borderWidth: 2,
    //borderColor: '#fff',
    height: 80,
  },
  contentMovie: {
    overflow: 'hidden',
    margin: 'auto',
  },
  containerPlayMovie: {
    width: 300,
    height: 500,
  },
  centrendView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
  textMovie: {
    fontSize: 15,
    color: '#fff',
  }
})