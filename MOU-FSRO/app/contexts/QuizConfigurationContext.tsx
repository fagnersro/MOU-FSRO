import { questions } from "@/assets/utils/questions";
import React, { createContext, ReactNode, useEffect, useState } from "react";

type QuizConfigurationContextType ={
    showQuiz: boolean;
    setShowQuizFunction: () => void;
    selectedOptionIndex: number | null;
    currentQuestionIndex: number;
    score: number;
    showResult: boolean;
    handleOptionPress: (optionIndex: number) => void;

    handleAnswer: (index: number) => void;
    isModalVisible: boolean;
    wasCorrect: boolean | null;

    restartQuiz: () => void;
}

const QuizConfigurationContext = createContext<QuizConfigurationContextType>({} as QuizConfigurationContextType);

type QuizConfigurationProviderType = {
    children: ReactNode;
}

export function QuizConfigurationProvider ({ children }: QuizConfigurationProviderType) {
    const [showQuiz, setShowQuiz] = useState<boolean>(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setshowResult] = useState<boolean>(false)

    const [isModalVisible, setModalVisible] = useState(false);
    const [wasCorrect, setWasCorrect] = useState<boolean | null>(null);

    function setShowQuizFunction() {
        setShowQuiz((prevState) => !prevState)
    }

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
        }, 2500);
      };

        const handleAnswer = (index: number) => {
        const isCorrect = index === questions[currentQuestionIndex].correctAnswerIndex;
          setWasCorrect(isCorrect);
          setModalVisible(true);
          handleOptionPress(index);
      
          setTimeout(() => {
          setModalVisible(false);
        }, 2500);
        };
    
      const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedOptionIndex(null);
        setshowResult(false);
      };
      
    return (
        <QuizConfigurationContext.Provider value={{
            showQuiz,
            setShowQuizFunction,            
            selectedOptionIndex,
            currentQuestionIndex,           
            score,
            showResult,
            handleOptionPress,
            handleAnswer,
            isModalVisible,
            wasCorrect,
            restartQuiz
        }}>
            {children}
        </QuizConfigurationContext.Provider>
    )
}

export default QuizConfigurationContext