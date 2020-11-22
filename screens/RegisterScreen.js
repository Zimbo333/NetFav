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
import Component from "react";

const RegisterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign up</Text>
        <Text style={styles.headerText2}>Username</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Username"
          placeholderTextColor="#dedede"
        />
        <Text style={styles.headerText2}>Password</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Password"
          placeholderTextColor="#dedede"
        />
        <Text style={styles.headerText2}>E-mail</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Password"
          placeholderTextColor="#dedede"
        />
        <Text style={styles.headerText2}>Display Name</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Password"
          placeholderTextColor="#dedede"
        />

        <Button
          title="Create Account"
          color="#c1071e"
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

RegisterScreen.navigationOptions = {
  headerTitle: "NetFav",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
    // justifyContent: "center",
    // alignItems: "stretch",
  },
  container: {
    padding: 10,
    alignItems: "stretch",
    flex: 1,
    // backgroundColor: 'blue',
    margin: 10,
    justifyContent: "flex-start",
  },
  textinput: {
    // margin: 10,
    padding: 10,
    height: 40,
    borderColor: "#fff1",
    borderWidth: 1,
    backgroundColor: "#232323",
    color: "#dedede",
    // marginLeft: "auto",
    // marginRight: "auto",
    width: "100%",
    marginBottom: 10,
  },
  headerText: {
    color: "#dedede",
    fontSize: 36,
    // fontWeight: "bold",
    marginBottom: 10,
  },
  headerText2: {
    color: "#dedede",
    fontSize: 18,
    marginBottom: 10,
  },
  fgpassword: {
    marginBottom: 10,
    // marginHorizontal: 10,
    color: "#dedede",
    textDecorationLine: "underline",
    marginRight: "auto",
  },
  button: {},
});

export default RegisterScreen;
