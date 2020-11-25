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
<<<<<<< Updated upstream
import { AntDesign } from '@expo/vector-icons';
=======
import auth from '@react-native-firebase/auth'

>>>>>>> Stashed changes

const LoginScreen = (props) => {

  // const signin = () => {
  //   auth()
  //     .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  //     .then(() => {
  //       console.log('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // }



  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* <Text style={styles.headerText}>Sign in</Text>
        <Text style={styles.headerText2}>Username</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Username"
          placeholderTextColor="#dedede"
        />
        <Text style={styles.headerText2}>Password</Text>
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          placeholder="Enter Password"
          placeholderTextColor="#dedede"
        />
        {/* <Text
          style={styles.fgpassword}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Forgotten password?
        </Text> */}
        {/* <Button
          title="Login"
          color="#c1071e"
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Home");
            // signin();
            // console.log()
          }}
        />
<<<<<<< Updated upstream
        <Text style={{color:'white', textAlign: 'center', justifyContent: 'center', padding: 10}}>Or</Text> */}
        <Text style={{color:'red',textAlign:'center',justifyContent:'center',fontSize:55, marginTop:'20%'}}>NetFav</Text>
        <AntDesign name="google" size={30} color="white" style={{textAlign:'center',justifyContent:'center',marginTop:25}} />
        <View style={{width:'100%',height:50, backgroundColor:'#1877f2', textAlign:'center',borderRadius:10, marginTop:'10%'}}>
        <Text onPress={() => Linking.openURL("http://google.com")} style={{marginTop:15, color:'white', fontSize:18}}>Sign in with Google</Text>
        </View>
=======
        <Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', padding: 10 }}>Or</Text>
        <Button
          title="Register"
          color="#c1071e"
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        />
>>>>>>> Stashed changes
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerTitle: "NetFav",
  headerShown: true
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
<<<<<<< Updated upstream
=======
    flexDirection: 'column'
>>>>>>> Stashed changes
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
    fontSize: 38,
    // fontWeight: "bold",
    marginBottom: 10,
  },
  headerText2: {
    color: "#dedede",
    fontSize: 18,
    marginBottom: 10,
  },
  fgpassword: {
    color: "white",
    // textDecorationLine: "underline",
    textAlign: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: 10,
  },
});

export default LoginScreen;
