import { windowHeight, windowWidth } from '@/assets/utils/dimensions';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Pressable } from 'react-native';


type questionsType ={
  question: string;
  options: Array<string>
  correctAnswerIndex: number
}[]

const questions: questionsType = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correctAnswerIndex: 0,
  },
  {
    question: "React Native é baseado em qual linguagem?",
    options: ["Java", "Swift", "JavaScript", "Python"],
    correctAnswerIndex: 2,
  },
  {
    question: "Quantos planetas existem no sistema solar?",
    options: ["7", "8", "9", "10"],
    correctAnswerIndex: 1,
  },
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setshowResult] = useState<boolean>(false)

  const handleOptionPress = (optionIndex: number) => {
    setSelectedOptionIndex(optionIndex);

    const isCorrect = optionIndex === questions[currentQuestionIndex].correctAnswerIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOptionIndex(null);
      } else {
        setshowResult(true);
      }
    }, 800);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOptionIndex(null);
    setshowResult(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.question}>{currentQuestionIndex+1} de 10</Text>
      <Text style={styles.question}>0 certas até agora</Text>
      
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

            <Text style={styles.question}>Fechar modal</Text>
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
