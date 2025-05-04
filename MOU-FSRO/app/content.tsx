import React from "react";

import { Image, ImageBackground, Pressable, StyleSheet, View } from "react-native";

import bgBrasil from '@/assets/images/bgBrasil.png'
import logoBco from '@/assets/images/logoBco.png'
import icoExercito from '@/assets/images/icoExercito.png'
import icoAero from '@/assets/images/icoAero.png'
import icoMarinha from '@/assets/images/icoMarinha.png'
import icoBombeiros from '@/assets/images/icoBombeiros.png'
import { windowHeight, windowWidth } from "../assets/utils/dimensions";


type sourceDataButtonTypes = {
  id: number;
  urlImage: number;
}[]


const sourceDataButton: sourceDataButtonTypes = [
  { 
    id: 1,
    urlImage: icoExercito
  },
  { 
    id: 2,
    urlImage: icoMarinha
  },
  { 
    id: 3,
    urlImage: icoAero
  },
  { 
    id: 4,
    urlImage: icoBombeiros
  },
];

export default function Content() {
  return (
    <ImageBackground source={bgBrasil} resizeMode="cover" >
      <View style={styles.content} >
        <Image source={logoBco} style={styles.logo} />
        <View style={styles.wrapperView} >
          {sourceDataButton.map((data) => (
            <Pressable style={styles.pressable}>
              <Image source={data.urlImage} width={100} style={styles.image}/>
            </Pressable>            
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    width: windowWidth,
    height: windowHeight,
    padding: 20,
    alignItems: 'center'
  },
  logo: {
    width: windowWidth-80,
    marginTop: 50
  },
  wrapperView: {
    flexWrap: 'wrap',
    width: windowWidth-80,
    height: 360,
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    marginTop: 100
  },
  pressable: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    borderColor: '#ebebeb',
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: 160,
    height: 160,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 100
  }
})