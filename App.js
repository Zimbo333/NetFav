import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NetFavNavigator from "./navigator/NetFavNavigator";
import { db } from "./fb-firestore/firestore";

export default function App() {
  return (
      <NetFavNavigator />
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45524b",
    alignItems: "center",
    justifyContent: "center",
  },
});
