import { windowHeight, windowWidth } from '@/assets/utils/dimensions';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Pressable } from 'react-native';

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
      <Pressable onPress={setShowQuizFunction}>
        <Text style={styles.question}>Fechar modal</Text>
      </Pressable>
      
      <Text style={styles.question}>{currentQuestionIndex+1} de 10</Text>
      <Text style={styles.question}>{score} certas até agora</Text>
      
      {!showResult ? (
        <View style={styles.quizContainer}>
          <Text style={styles.question}>
            {questions[currentQuestionIndex].question}
          </Text>

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
                onPress={() => handleOptionPress(index)}
                disabled={selectedOptionIndex !== null}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            );
          })}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#000000',
    justifyContent: 'center',
    padding: 20,
    width: windowWidth-50,
    height:windowHeight-70,
    margin: 'auto'
  },
  quizContainer: {
    marginTop: 40,
    padding: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
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
