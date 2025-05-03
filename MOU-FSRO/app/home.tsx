import { View, StyleSheet, ImageBackground } from "react-native";
import { useContext } from "react";
import HeaderConfigurationContext from "./contexts/HeaderConfigurationContext";
import HeaderConfiguration from "@/components/HeaderConfiguration";

export default function Home() {
  const { imageBackroud } = useContext(HeaderConfigurationContext)
  
  return (
    <ImageBackground source={imageBackroud} resizeMode="cover" height={100}>
      <View style={styles.container}>
        <HeaderConfiguration />      
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

