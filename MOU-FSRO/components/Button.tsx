import { windowWidth } from "@/app/assets/utils/dimensions";
import { Link } from "expo-router";
import React from "react";
import { Pressable, View, Text, StyleSheet, Image } from "react-native";

type Props = {
    label: string;
    theme?: 'primary' | 'quiz';
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

  if (theme === 'quiz') {
    return (
    <Pressable onPress={() => alert('Quiz precisa ser programado!!')}>      
      <View style={stylesQuiz.container}>
          <Text style={stylesQuiz.text}>Teste seus Conhecimentos</Text>
      </View>
    </Pressable>
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
    color: '#fff'   ,
    textAlign: 'center',
    fontSize: 20,
  },
})

const stylesQuiz = StyleSheet.create({
  container: {
   backgroundColor: 'yellow',
   borderRadius: 15,
   padding: 5,
   height: 60,
   width: 400,
   justifyContent: 'center',
   margin: 'auto',
   marginTop: 50,
  },
  icon: {
    fontSize: 40,
    color: '#fff',
  },
  text: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 17,
  },
})