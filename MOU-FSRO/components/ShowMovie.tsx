import {Text, ScrollView, StyleSheet, View, Pressable, Image, Modal } from "react-native";

import { useState } from "react";
import { windowHeight, windowWidth } from "@/assets/utils/dimensions";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import PlayVideo from "./PlayVideo";
import { cloudinaryVideos } from "@/services/cloudnary";

import iconView from '@/assets/images/viewed.png'

type blockAmountType = {
  id: number;
}[]

const blockAmount: blockAmountType = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
]

cloudinaryVideos

export default function ShowMovie() {
  const [showMovie, setShowMovie] = useState<boolean>(false)
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null)
  const [watchedVideos, setWatchedVideos] = useState<number[]>([])

  const getVideoUrlById = (id: number) => {
    const video = cloudinaryVideos.find((video) => video.id === id);
    return video?.url || '';
  }

  const getVideoDescriptionById = (id: number) => {
    const description = cloudinaryVideos.find((description) => description.id === id);
    return description?.description || ''
  }
  
  const handlePressVideo = (id: number) => {
    setSelectedVideoId(id);
    setShowMovie(true);

    if (!watchedVideos.includes(id)) {
      setWatchedVideos((prev) => [...prev, id]);
    }
  };

  return (
      <>
        <Modal 
          animationType="slide" 
          transparent={true}
          visible={showMovie}
          onRequestClose={() => {
            setShowMovie(false);
          }}>
          <View style={containerPlayMovie.container}>
            <View style={containerPlayMovie.wrapperContent}>
              <Pressable onPress={() => setShowMovie(false)} style={containerPlayMovie.wrapperContentPressable}>
                <AntDesign name="arrowleft" style={{color: '#fff'}} size={20}/>
                <Text style={containerPlayMovie.text}>Voltar</Text>
              </Pressable>

              <View style={containerPlayMovie.contentMovie}>
                {selectedVideoId && (
                  <PlayVideo videoSource={getVideoUrlById(selectedVideoId)} />
                )}
              </View>

              <View style={containerPlayMovie.contentText}>
                <Text style={containerPlayMovie.textMovie}>
                  {getVideoDescriptionById(selectedVideoId!)}
                </Text>
              </View>
            </View>
          </View>
        </Modal>

       <ScrollView horizontal={true}>
        {cloudinaryVideos.map((item) => (
          <View style={containerMovie.container} key={item.id}>
          <View style={containerMovie.wrapper}>
            {blockAmount.map((item) => (
              <View style={containerMovie.block} key={`top-${item.id}`}></View>
            ))}
          </View>

          <View style={containerMovie.wrapperPressable}>
            <Pressable style={containerMovie.pressabeArea} onPress={() => handlePressVideo(item.id)}>
              <Image source={item.thumbnail} style={containerMovie.pressableImage}/>
            </Pressable>

            <View style={{ position: 'absolute', zIndex: 3, right: 30, bottom: 10, flexDirection: 'column', alignItems: 'center', gap: 6}}>
                {watchedVideos.includes(item.id) && (
                  <Image source={iconView} style={{ marginLeft: 8, width: 25, height: 25}} />
                )}
              <View style={{ backgroundColor: '#000000AA', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4 }}>
                <Text style={styles.texto}>{item.title}</Text>
              </View>
            </View>
          </View>
          
          <View style={containerMovie.wrapper}>
            {blockAmount.map((item) => (
              <View style={containerMovie.block} key={item.id}></View>
            ))}
          </View>
        </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
      
  texto: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  },
})

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

    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',

    
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
    //borderWidth: 2,
    //borderColor: 'red',

    height: 550,
    //overflow: 'hidden',
    //margin: 'auto',
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