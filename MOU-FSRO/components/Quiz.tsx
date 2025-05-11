import { windowHeight, windowWidth } from '@/assets/utils/dimensions';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Pressable, Modal } from 'react-native';

import { questions } from '@/assets/utils/questions';
import QuizConfigurationContext from '@/app/contexts/QuizConfigurationContext';
import { AntDesign } from '@expo/vector-icons';

export default function Quiz() {

  const { 
    setShowQuizFunction,
    restartQuiz,
    currentQuestionIndex,
    selectedOptionIndex,
    score,
    showResult,
    handleAnswer,
    isModalVisible,
    wasCorrect,
  } = useContext(QuizConfigurationContext)


  const correctText = questions[currentQuestionIndex].alertModalCorrect;

  return (
    <SafeAreaView style={styles.container}>
      {!showResult ? (
        <View style={styles.wrapper}>

      <View>
        <View>
          <Pressable>
            <AntDesign />
          </Pressable>
          <Text style={styles.headerStatusText1}>{currentQuestionIndex+1} de 10</Text>
        </View>
        <Text style={styles.headerStatusText2}>{score} certas até agora</Text>
      </View>

          <Text style={styles.question}>
            {questions[currentQuestionIndex].question}
          </Text>
        
          <View>
            {questions[currentQuestionIndex].options.map((option, index) => {
              const isSelected = index === selectedOptionIndex;
              const isCorrect = index === questions[currentQuestionIndex].correctAnswerIndex;
              const backgroundColor =
                selectedOptionIndex !== null
                  ? isSelected
                    ? isCorrect
                      ? '#4CAF50' // verde
                      : '#F44336' // vermelho
                    : 'white'
                  : 'white';

              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.optionButton, { backgroundColor }]}
                  onPress={() => handleAnswer(index)}
                  disabled={selectedOptionIndex !== null}
                >
                  <Text style={styles.optionText}>{option}</Text>          
                </TouchableOpacity>
              );
            })}
          </View>

          <Modal animationType="slide" transparent={true} visible={isModalVisible}>
            <View style={styles.modalOverlay}>
              <View style={styles.alertModalContainer}>
                <View style={wasCorrect ? styles.alertModalContainerIconCorrect : styles.alertModalContainerIconIncorrect}>
                  <AntDesign name={wasCorrect ? 'check' : 'exclamation'} style={styles.icon} />
                </View>
                <Text style={styles.alertModalContainerTextTitle}>
                  {wasCorrect ? 'Resposta Correta:' : 'Resposta Errada:'}
                </Text>
                <Text style={styles.alertModalContainerText}>{correctText}</Text>
              </View>
            </View>
          </Modal>
        </View>        
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Quiz finalizado!</Text>
          <Text style={styles.scoreText}>
            Você acertou {score} de {questions.length} Questões!
          </Text>
          <TouchableOpacity onPress={restartQuiz} style={styles.restartButton}>
            <Text style={styles.restartText}>Reinicie o Teste</Text>
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Pressable onPress={setShowQuizFunction}style={styles.closeContainer} >
          <Text>X</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    borderRadius: 10,
    backgroundColor: '#000000',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    width: windowWidth-20,
    height:windowHeight-200,
    margin: 'auto',
  },
  wrapper: {
    gap: 20,
    padding: 30,
    marginTop: 40,
  },
  headerStatusText1: {
    fontSize: 14,
    marginBottom: 20,
    color: 'gold'
  },
  headerStatusText2: {
    fontSize: 20,
    color: 'gold'
  },
  closeContainer: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: 'gold',
  },
  alertModalContainer: {
    backgroundColor: '#fff',
    borderRadius: 40,
    alignItems: 'center',
    width: 400,
    height: 300,
    margin: 'auto',
  },
  alertModalContainerText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  alertModalContainerTextTitle: {
    fontSize: 30,
    color: 'black',
    marginBottom: 30,
  },
  alertModalContainerIconCorrect: {
    borderRadius: 100,
    backgroundColor: 'green',
    width: 100,
    height: 100,

    position: 'relative',
    top: -45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertModalContainerIconIncorrect: {
    borderRadius: 100,
    backgroundColor: 'red',
    width: 100,
    height: 100,

    position: 'relative',
    top: -45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: '#fff',
    fontSize: 50,
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    color: '#fff'
  },
  optionButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#B0BEC5',
  },
  optionText: {
    fontSize: 18,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  resultText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scoreText: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 32,
  },
  restartButton: {
    backgroundColor: 'gold',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 350,
    borderRadius: 5,
  },
  restartText: {
    margin: 'auto',
    color: 'black',
    fontSize: 20,
  },
});
