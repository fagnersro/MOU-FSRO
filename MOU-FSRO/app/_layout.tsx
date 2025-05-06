import React from "react";
import { Stack } from "expo-router";
import { HeaderConfigurationProvider } from "./contexts/HeaderConfigurationContext";

export default function RootLayout() {
  return (
    <HeaderConfigurationProvider>
      <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }}/>
          <Stack.Screen name='home' options={{ headerShown: false}} />
      </Stack>
    </HeaderConfigurationProvider>
  );
}
