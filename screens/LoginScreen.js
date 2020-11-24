import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Google from 'expo-google-app-auth';
import firebase from "firebase";

class LoginScreen extends Component{
  
   isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }
  

   onSignIn = googleUser =>  {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser){
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!this.isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken);
  
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then(function(result){
          console.log('user signed in');
          if(result.additionalUserInfo.isNewUser)
          {
            firebase.database().ref('/users/' + result.user.uid).set({
              gmail:result.user.email,
              profile_picture: result.additionalUserInfo.profile.picture,
              locale: result.additionalUserInfo.profile.locale,
              first_name: result.additionalUserInfo.profile.given_name,
              last_name: result.additionalUserInfo.profile.family_name,
              created_at:Date.now()
            }).then(function(snapshot){
              console.log(snapshot);
            })
          }else{
            firebase.database().ref('/users/' + result.user.uid).update({
              last_logged_in:Date.now()
            })
          }
          
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    }.bind(this)
    );
  }

 signInWithGoogleAsync = async() => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '762652878476-fmeb76hhj9cs132acto81npm0o4o4quc.apps.googleusercontent.com',
        behavior:'web',
        iosClientId: '762652878476-jblhu3kjmndgoii907alt1qd08oq1v9u.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        console.log('error');
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  }
    render(){
        return(
            <View style={style.container}>
                <TouchableOpacity
                onPress={() => this.signInWithGoogleAsync()}
                >
                  <Text>Sign in with google</Text>
                </TouchableOpacity>
                
                
            </View>
        )
    }
}
export default LoginScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})