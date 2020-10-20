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
} from "react-native";
import Component from "react"

const LoginScreen = (props) => {
    return(
      <view style={{flexDirection: "column"}}>
        <view>
            <Text>Login</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} placeholder="username"/>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} placeholder="password"/>
            <Button title="Login" color="red"/>
        </view>
      </view>
    )
};

LoginScreen.navigationOptions = {
    headerTitle: "NetFav",
};

export default LoginScreen;