import { Image, View, Text, StyleSheet, ImageBackground, Pressable, ImageSourcePropType } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import bgBrasil from './assets/images/bgBrasil.png'
import bgExercito from './assets/images/bgExercito.png'
import bgAero from './assets/images/bgAero.png'
import bgBombeiros from './assets/images/bgBombeiros.png'

import iconExercito from './assets/images/icoExercito.png'
import iconAero from './assets/images/icoAero.png'
import iconBombeiros from './assets/images/icoBombeiros.png'
import icoMarinha from './assets/images/icoMarinha.png'


type iconAreaDataType = {
  id: number;
  urlIcon: number;
  bgImage: ImageSourcePropType;
  text: string;
  title: string;
}[]

const iconAreaData: iconAreaDataType = [
  {
    id: 1,
    urlIcon: bgBrasil,
    bgImage: bgBrasil,
    text: 'Brasil',
    title: 'Brasil'  
  },
  {
    id: 2,
    urlIcon: iconExercito,
    bgImage: bgExercito,
    text: 'Orgulho em fazer parte do Éxercito',
    title: 'Exercito'
  },
  {
    id: 3,
    urlIcon: icoMarinha,
    bgImage: icoMarinha,
    text: 'Orgulho em fazer parte da Marinha',
    title: 'Marinha'
  },
  {
    id: 4,
    urlIcon: iconAero,
    bgImage: bgAero,
    text: 'Orgulho em fazer parte da Aeronáutica',
    title: 'Aeronáutica'
  },
  {
    id: 5,
    urlIcon: iconBombeiros,
    bgImage: bgBombeiros,
    text: 'Orgulho em fazer parte dos Bombeiros',
    title: 'Bombeiros'
  },
]


export default function Home() {
  const [modalSetting, setModalSetting] = useState<boolean>(false)
  const [imageBackroud, setImageBackgroud] = useState<ImageSourcePropType>(bgBrasil)
  const [text, setText] = useState<string>()
  const [headerTitle, setHeaderTitle] = useState<string>()

  function showSettingsModal(): void {
    setModalSetting((prevState) => !prevState);
  }

  return (
    <ImageBackground source={imageBackroud} resizeMode="cover" height={100}>
      <View style={styles.container}>
        {modalSetting 
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
                    setImageBackgroud(dataIcon.bgImage), 
                    setText(dataIcon.text),
                    setHeaderTitle(dataIcon.title)
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
            <Text style={settingTheme.titleInfo} >{headerTitle}</Text>
            <Pressable onPress={showSettingsModal}>
              <AntDesign name="setting" style={settingTheme.iconSetting} />
            </Pressable>
          </View>
        </View>
        }
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
   width: '100%',
   height: '100%'
  },
  settingThem: {
  }
})

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