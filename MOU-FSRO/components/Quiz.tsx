import { windowHeight, windowWidth } from '@/assets/utils/dimensions';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Pressable, Modal } from 'react-native';

import { questions } from '@/assets/utils/questions';
import QuizConfigurationContext from '@/app/contexts/QuizConfigurationContext';

export default function Quiz() {

  const { 
    setShowQuizFunction, 
    handleOptionPress, 
    restartQuiz, 
    currentQuestionIndex, 
    selectedOptionIndex, 
    score, 
    showResult 
  } = useContext(QuizConfigurationContext)


  return (
    <SafeAreaView style={styles.container}>
      {!showResult ? (
        <View style={styles.wrapper}>

      <View>
        <Text style={styles.headerStatusText1}>{currentQuestionIndex+1} de 10</Text>
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

              const alertModal = 
                selectedOptionIndex !== null
                  ? isSelected 
                    ? isCorrect
                      ? 'acertou'
                      : 'errou'
                    : null
                  : null;
  
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.optionButton, { backgroundColor }]}
                  onPress={() => handleOptionPress(index)}
                  disabled={selectedOptionIndex !== null}
                >
                  <Text style={styles.optionText}>{option}</Text>
                  
                  {alertModal === 'acertou' ?
                      <Modal
                        animationType='slide'
                        visible={alertModal === 'acertou'}
                        transparent={true}
                      >
                        <View style={styles.alertModalContainer}>
                          <View style={styles.alertModalContainerIcon}>
                            COR
                          </View>
                          <Text style={styles.alertModalContainerTextTitle}>Resposta Correta:</Text>
                          <Text style={styles.alertModalContainerText}>{questions[currentQuestionIndex].alertModalCorrect}</Text>
                        </View>
                      </Modal>
                      :
                      <Modal
                        animationType='slide'
                        visible={alertModal === 'errou'}
                        transparent={true}
                      >
                      <View style={styles.alertModalContainer}>
                        <Text style={styles.alertModalContainerText}>{questions[currentQuestionIndex].alertModalIncorrect}</Text>
                      </View>
                    </Modal>
                    }  
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Quiz finalizado!</Text>
          <Text style={styles.scoreText}>
            Sua pontuação: {score} de {questions.length}
          </Text>
          <TouchableOpacity onPress={restartQuiz} style={styles.restartButton}>
            <Text style={styles.restartText}>Recomeçar Quiz</Text>
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
  container: {
    borderRadius: 10,
    backgroundColor: '#000000',
    alignItems: 'center',
    width: windowWidth-30,
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
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
    textAlign: 'center',
  },
  alertModalContainerIcon: {
    borderRadius: 100,
    backgroundColor: 'green',
    width: 100,
    height: 100,

    marginTop: -200,
    zIndex: 200,
    
    justifyContent: 'center',
    textAlign: 'center',
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
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 22,
    marginBottom: 32,
  },
  restartButton: {
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  restartText: {
    color: 'white',
    fontSize: 18,
  },
});
