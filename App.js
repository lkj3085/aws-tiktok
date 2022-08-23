import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}
