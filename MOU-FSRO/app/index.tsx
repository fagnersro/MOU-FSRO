import { SafeAreaView, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import bgBrasil from '@/assets/images/bgBrasil.png'
import logoBco from '@/assets/images/logoBco.png'

import { windowWidth, windowHeight } from '@/assets/utils/dimensions'
import Button from "@/components/Button";
import React from "react";

export default function Index() {
  return (
    <ImageBackground source={bgBrasil} style={styles.background} resizeMode="cover">
      <View style={styles.container} >
        <Image source={logoBco} style={styles.logo} />
        
        <View style={styles.wrapper}>
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
    justifyContent: 'space-evenly',
  },
  background: {
  },
  logo: {
    width:windowWidth-40,
    resizeMode: 'contain',
  },
  wrapper: {
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'justify'
  },
})