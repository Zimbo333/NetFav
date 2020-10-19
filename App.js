import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NetFavNavigator from './navigator/NetFavNavigator';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>hi dude</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NetFavNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45524b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
