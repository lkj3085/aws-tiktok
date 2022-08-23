import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
}
