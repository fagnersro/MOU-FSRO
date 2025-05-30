import React from "react";

import { HeaderConfigurationProvider } from "./contexts/HeaderConfigurationContext";
import { QuizConfigurationProvider } from './contexts/QuizConfigurationContext'
import { StatusBar } from "react-native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <HeaderConfigurationProvider>
      <QuizConfigurationProvider>
        <StatusBar barStyle={"dark-content"} backgroundColor="transparent" />
          <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }}/>
            <Stack.Screen name='home' options={{ headerShown: false}} />
          </Stack>
      </QuizConfigurationProvider>
    </HeaderConfigurationProvider>
  );
}
