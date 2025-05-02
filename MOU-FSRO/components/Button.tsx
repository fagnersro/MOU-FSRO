import { windowWidth } from "@/app/assets/utils/dimensions";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, View, Text, StyleSheet, Image } from "react-native";

type Props = {
    label: string;
    theme?: 'primary' | 'configTheme';
    onPress?: () => void;
};

export default function Button({ label, theme, onPress}: Props) {
  if (theme === 'primary') {
    return (
      <View style={styles.buttonPrimary}>
          <Link href={'/home'} style={styles.text}>
            <Text style={styles.text}>{label}</Text>
          </Link>
      </View>
    );
  } 

  if (theme === 'configTheme') {
    return (      
    <View style={stylesConfigTheme.container}>
        <AntDesign name="setting" style={stylesConfigTheme.icon} />
    </View>
    )
  }
  
  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );

}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: 'green',
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: windowWidth-100
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
})

const stylesConfigTheme = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#fff'
  },
  icon: {
    fontSize: 40,
    color: '#fff',
  }
})