import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import NetFavNavigator from "./navigator/NetFavNavigator";
import firebase from "firebase";
<<<<<<< Updated upstream
=======
import {firebaseConfig} from "./firebaseConfig";
import auth from '@react-native-firebase/auth';
import { useState, useEffect } from 'react';



firebase.initializeApp(firebaseConfig)
>>>>>>> Stashed changes

class App extends React.Component {
  state = {
    initializing : true,
    user : ''
  }
  onAuthStateChanged = (user) =>{
    setUser(user);
    if (initializing) setInitializing(false);
  }
  // useEffect( () => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;


  render() {
    return <NetFavNavigator />;
  }
}

export default App;
