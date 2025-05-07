import React, { createContext, ReactNode, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import bgBrasil from '@/assets/images/bgBrasil.png'
import logoExercito from '@/assets/images/logoExercito.png'

type HeaderConfigurationContextType = {
 modalSettingOpen: Boolean;
 imageBackroud: ImageSourcePropType;
 showSettingsModal: () => void;
 ApplyBackgroudImage: (image: ImageSourcePropType) => void;
 imageLogo: ImageSourcePropType;
 ApplyImageLogo: (image: ImageSourcePropType) => void
 text: string | undefined;
 ApplyText: (text: string) => void;
 headerTitle: string | undefined;
 ApplyHeaderTitle: (title: string) => void;
}

const HeaderConfigurationContext = createContext<HeaderConfigurationContextType>({} as HeaderConfigurationContextType);

type HeaderConfigurationProviderProps = {
 children: ReactNode;
}

export function HeaderConfigurationProvider ({children}: HeaderConfigurationProviderProps) {

  const [modalSettingOpen, setModalSettingOpen] = useState<boolean>(false)
  const [imageBackroud, setImageBackgroud] = useState<ImageSourcePropType>(bgBrasil)
  const [text, setText] = useState<string>()
  const [headerTitle, setHeaderTitle] = useState<string>()
  const [imageLogo, setImageLogo] = useState<ImageSourcePropType>(logoExercito)

  function showSettingsModal() {
   setModalSettingOpen((prevState) => !prevState);
 }

  function ApplyBackgroudImage(image: ImageSourcePropType){
    setImageBackgroud(image)
  }

  function ApplyImageLogo(image: ImageSourcePropType){
    setImageLogo(image)
  }

  function ApplyText(text: string){
    setText(text)
  }

  function ApplyHeaderTitle(title: string):void {
    setHeaderTitle(title)
  }

  return (
   <HeaderConfigurationContext.Provider value={{ 
    modalSettingOpen, 
    showSettingsModal,
    imageBackroud,
    ApplyBackgroudImage,
    text,
    ApplyText,
    headerTitle,
    ApplyHeaderTitle,
    imageLogo,
    ApplyImageLogo
    }}>
    {children}
   </HeaderConfigurationContext.Provider>
  )
};

export default HeaderConfigurationContext;