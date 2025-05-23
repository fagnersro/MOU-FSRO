import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import bgBrasil from '@/assets/images/bgBrasil.png'
import logoBco from '@/assets/images/logoBco.png'

import * as SplashScreen from 'expo-splash-screen';

import { windowWidth, windowHeight } from '@/assets/utils/dimensions'
import Button from "@/components/Button";
import React, { useCallback, useEffect, useState } from "react";

export default function Index() {  


SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }



  return (
    <ImageBackground source={bgBrasil} resizeMode="cover">
      <View onLayout={onLayoutRootView} style={styles.container} >
        <View style={styles.wrapper}>
        <Image source={logoBco} style={styles.logo} />
          <Text style={styles.text}>
            Este aplicativo, seu(s) proprietários(s), seus meios
            de comercialização, ou o desenvolvedor não possuem nenhuma responsabilidade
            sobre qualquer incoerência entre as informações nele contidas e a profissão, ou
            sobre a forma como o aplicativo será utilizado, de forma que o aplicativo é apenas
            um meio de auxílio para os seus usuários.
          </Text>
        </View>

        <Button label="Sim, estou ciente" theme="primary"/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width:windowWidth-150,
    height:windowHeight-650,
    resizeMode: 'stretch',
  },
  wrapper: {
    alignItems: 'center',
    padding:30,
    gap: 50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'justify'
  },
})