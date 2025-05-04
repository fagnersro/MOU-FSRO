import { useContext } from "react"
import { AntDesign } from "@expo/vector-icons"
import { View, Text, Pressable, StyleSheet, ImageSourcePropType } from "react-native"
import { Image } from "react-native" 

import HeaderConfigurationContext from "@/app/contexts/HeaderConfigurationContext"

import bgBrasil from '@/assets/images/bgBrasil.png'
import bgExercito from '@/assets/images/bgExercito.png'
import bgAero from '@/assets/images/bgAero.png'
import bgBombeiros from '@/assets/images/bgBombeiros.png'

import iconExercito from '@/assets/images/icoExercito.png'
import iconAero from '@/assets/images/icoAero.png'
import iconBombeiros from '@/assets/images/icoBombeiros.png'
import icoMarinha from '@/assets/images/icoMarinha.png'

//import logoBco from '@/assets/images/logoBco.png'
import logoExercito from '@/assets/images/logoExercito.png'
import logoAero from '@/assets/images/logoAero.png'
import logoBombeiros from '@/assets/images/logoBombeiros.png'
import logoMarinha from '@/assets/images/logoMarinha.png'
import React from "react"

type iconAreaDataType = {
  urlIcon: number;
  id: number;
  bgImage: ImageSourcePropType;
  text: string;
  title: string;
  logoImage: ImageSourcePropType;
}[]

const iconAreaData: iconAreaDataType = [
  {
    id: 1,
    urlIcon: bgBrasil,
    bgImage: bgBrasil,
    text: 'Brasil',
    title: 'Brasil',
    logoImage: logoExercito,
  },
  {
    id: 2,
    urlIcon: iconExercito,
    bgImage: bgExercito,
    text: 'Orgulho em fazer parte do Éxercito',
    title: 'Exercito',
    logoImage: logoExercito,
  },
  {
    id: 3,
    urlIcon: icoMarinha,
    bgImage: icoMarinha,
    text: 'Orgulho em fazer parte da Marinha',
    title: 'Marinha',
    logoImage: logoMarinha,
  },
  {
    id: 4,
    urlIcon: iconAero,
    bgImage: bgAero,
    text: 'Orgulho em fazer parte da Aeronáutica',
    title: 'Aeronáutica',
    logoImage: logoAero
  },
  {
    id: 5,
    urlIcon: iconBombeiros,
    bgImage: bgBombeiros,
    text: 'Orgulho em fazer parte dos Bombeiros',
    title: 'Bombeiros',
    logoImage: logoBombeiros
  },
]

export default function HeaderConfiguration() {

    const { 
      modalSettingOpen, 
      showSettingsModal, 
      ApplyBackgroudImage, 
      text, 
      ApplyText, 
      headerTitle, 
      ApplyHeaderTitle, 
      ApplyImageLogo
    } = useContext(HeaderConfigurationContext);

    return (
      <>
      {modalSettingOpen 
        ? 
          <View style={settingTheme.container}>
            <View style={settingTheme.wrapperPressableArea}>
              <Text style={settingTheme.info}>{text || 'Brasil'}</Text>

              <Pressable onPress={showSettingsModal} >
                <AntDesign name="close" style={settingTheme.icon}/>
              </Pressable>
            </View>

            <View style={settingTheme.wrapperArea}>
              {iconAreaData.map((dataIcon) => (
                <Pressable 
                  style={settingTheme.iconArea} 
                  key={dataIcon.id} 
                  onPress={() => {
                    ApplyBackgroudImage(dataIcon.bgImage), 
                    ApplyText(dataIcon.text),
                    ApplyHeaderTitle(dataIcon.title)
                    ApplyImageLogo(dataIcon.logoImage)
                  }} 
                  >
                  <Image 
                    source={dataIcon.urlIcon} 
                    style={settingTheme.iconArea} 
                    resizeMode="stretch"
                  />
                </Pressable> 
              ))}
            </View>
          </View>
        : 
        <View style={settingTheme.container}>
          <View style={settingTheme.wrapperPressableArea}>
            <Text style={settingTheme.titleInfo} >{headerTitle || 'Brasil'}</Text>
            <Pressable onPress={showSettingsModal}>
              <AntDesign name="setting" style={settingTheme.iconSetting} />
            </Pressable>
          </View>
        </View>
        }
      </>
    );
}

const settingTheme = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 10,
    backgroundColor: 'hsla(0, 0.00%, 0.00%, 0.51)',
    padding: 20,
    width: 'auto',
    height: 100,
  },
  backgroud: {

  },
  wrapperPressableArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',  
  },
  info: {
    fontSize: 15,
    color: '#fff'
  },
  titleInfo: {
    fontSize: 35,
    color: '#fff'
  },
  wrapperArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 40
  },
  iconArea: {
    backgroundColor: '#fff',
    borderRadius: 100,
  
    width: 35,
    height: 35,
    overflow: 'hidden'
  },
  iconSetting: {
    fontSize: 40,
    color: '#fff',
  },
  icon: {
    fontSize: 25,
    color: '#fff',
  }
})