
import { windowWidth } from "@/assets/utils/dimensions";
import { Link } from "expo-router";
import React, { useContext, useState } from "react";
import { Pressable, View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Quiz from "./Quiz";
import QuizConfigurationContext from "@/app/contexts/QuizConfigurationContext";

type Props = {
    label: string;
    theme?: 'primary' | 'quiz';
};

export default function Button({ label, theme }: Props) {
  const {showQuiz, setShowQuizFunction} = useContext(QuizConfigurationContext)


  if (theme === 'primary') {
    return (
      <View style={styles.buttonPrimary}>
        <TouchableOpacity>
          <Link href={'/home'} style={styles.text}>
            <Text style={styles.text}>{label}</Text>
          </Link>
        </TouchableOpacity>
      </View>
    );
  } 

  if (theme === 'quiz') {
    return (
    <>
      <TouchableOpacity onPress={() => setShowQuizFunction()}>      
        <View style={stylesQuiz.container}>
            <Text style={stylesQuiz.text}>{label}</Text>
        </View>
      </TouchableOpacity>
      <Modal 
        animationType="slide" 
        transparent={true}
        visible={showQuiz}
        onRequestClose={() => {
          setShowQuizFunction();
          }}>

        <Quiz />
      </Modal>
    </>
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
   backgroundColor: 'gold',
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