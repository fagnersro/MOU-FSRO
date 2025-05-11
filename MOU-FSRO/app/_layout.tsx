import React from "react";
import { Stack } from "expo-router";
import { HeaderConfigurationProvider } from "./contexts/HeaderConfigurationContext";
import { QuizConfigurationProvider } from "./contexts/QuizConfigurationContext";

export default function RootLayout() {
  return (
    <HeaderConfigurationProvider>
      <QuizConfigurationProvider>
      <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }}/>
          <Stack.Screen name='home' options={{ headerShown: false}} />
      </Stack>
      </QuizConfigurationProvider>
    </HeaderConfigurationProvider>
  );
}
