import React, { useState, useEffect } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Navigations/StackNavigator";
import { StatusBar } from "expo-status-bar";
import Intro from "./pages/Intro";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
export const theme = extendTheme({ config });

export default function App() {
  const [ready, setReady] = useState(false);
  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        SUITE_Bold: require("./assets/fonts/SUITE-Bold.ttf"),
        SUITE_Regular: require("./assets/fonts/SUITE-Regular.ttf"),
        Chassam: require("./assets/fonts/KCC-Chassam.ttf"),
      });
      setReady(true);
    }, 2000);
  };

  useEffect(() => {
    loadFont();
  }, []);

  return ready ? (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar />
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  ) : (
    <Intro />
  );
}
