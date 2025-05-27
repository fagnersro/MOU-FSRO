import {Image, View, StyleSheet, ImageBackground } from "react-native";
import { useContext } from "react";
import { windowHeight, windowWidth } from "../assets/utils/dimensions";

import React from "react";
import HeaderConfigurationContext from "./contexts/HeaderConfigurationContext";
import HeaderConfiguration from "@/components/HeaderConfiguration";
import ShowMovie from "@/components/ShowMovie";
import Button from "@/components/Button";


export default function Home() {
  const { imageBackroud, imageLogo } = useContext(HeaderConfigurationContext)
  
  return (
    <ImageBackground source={imageBackroud} resizeMode="cover" height={100} style={{ height: windowHeight, width: windowWidth }}>
      <View style={styles.container}>
        <HeaderConfiguration />
        
        <View style={styles.containerImage}>
          <Image source={imageLogo} style={styles.logoImage}/>    
        </View>

        <View>
          <ShowMovie />
        </View>

        <View>
          <Button label="Teste seus Conhecimentos" theme="quiz"/>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: windowWidth,
    height: windowHeight,
  },
  containerImage: {
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginTop: 1,
  },
  logoImage: {
    width: 250,
    height: 250
  },
})

