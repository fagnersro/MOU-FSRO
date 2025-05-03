import { useContext } from "react"
import { AntDesign } from "@expo/vector-icons"
import { View, Text, Pressable, StyleSheet, ImageSourcePropType } from "react-native"
import { Image } from "react-native" 

import bgBrasil from '../app/assets/images/bgBrasil.png'
import bgExercito from '../app/assets/images/bgExercito.png'
import bgAero from '../app/assets/images/bgAero.png'
import bgBombeiros from '../app/assets/images/bgBombeiros.png'

import iconExercito from '../app/assets/images/icoExercito.png'
import iconAero from '../app/assets/images/icoAero.png'
import iconBombeiros from '../app/assets/images/icoBombeiros.png'
import icoMarinha from '../app/assets/images/icoMarinha.png'
import HeaderConfigurationContext from "@/app/contexts/HeaderConfigurationContext"


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

export default function HeaderConfiguration() {

    const { modalSettingOpen, showSettingsModal, ApplyBackgroudImage, text, ApplyText, headerTitle, ApplyHeaderTitle} = useContext(HeaderConfigurationContext);

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