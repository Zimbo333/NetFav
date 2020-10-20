import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  Linking,
} from "react-native";
import Component from "react"

const LoginScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Login</Text>
        <TextInput style={styles.textinput} placeholder="username" />
        <TextInput style={styles.textinput} placeholder="password" />
        <Text
          style={styles.fgpassword}
          onPress={() => Linking.openURL('http://google.com')}>
          Forgotten password?
          </Text>
        <Button title="Login" color="red" style={styles.button} onPress={() => { props.navigation.navigate("Home") }} />
      </View>
    </View>
  )
};

LoginScreen.navigationOptions = {
  headerTitle: "NetFav",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#45524b',
    // justifyContent: "center",
    // alignItems: "stretch",
  },
  container: {
    padding: 10,
    alignItems: "stretch",
    flex: 1,
    // backgroundColor: 'blue',
    margin: 10,
  },
  textinput: {
    margin: 10,
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: '250%',
    fontWeight: 'bold',
    alignSelf: "center"
  },
  fgpassword: {
    marginBottom: 10,
    marginHorizontal: 10,
    color: 'white',
    textDecorationLine: 'underline'
  },
  button: {

  }
});

export default LoginScreen;