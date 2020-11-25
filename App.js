import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NetFavNavigator from "./navigator/NetFavNavigator";
import firebase from "firebase";
import {firebaseConfig} from "./firebaseConfig";

firebase.initializeApp(firebaseConfig)

class App extends React.Component {
  render() {
    return <NetFavNavigator />;
  }
}

export default App;
