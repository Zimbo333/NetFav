import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Expo from "expo";

import NetFavNavigator from "./navigator/NetFavNavigator";
import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import LoginScreen from "./screens/LoginScreen"
import DashboardScreen from "./screens/DashboardScreen"
import LoadingScreen from "./screens/LoadingScreen"

firebase.initializeApp(firebaseConfig)

class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen :LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
});

export const AppNavigator = createAppContainer(AppSwitchNavigator);

export default App;
