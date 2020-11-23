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

const AddMovieScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Add Movie</Text>
        <Text style={styles.headerText2}>Movie name</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter movie name"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.headerText2}>Description</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Enter movie description"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.headerText2}>Season</Text>
        <TextInput
          style={styles.textinput2}
          placeholder="1"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.headerText2}>Episode</Text>
        <TextInput
          style={styles.textinput2}
          placeholder="1"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.headerText2}>Cover url</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Movie cover url"
          placeholderTextColor="#aaa"
        />
        <br/>
        <Button
          title="Add"
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

AddMovieScreen.navigationOptions = {
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
  textinput2: {
    padding: 10,
    height: 40,
    borderColor: "#fff1",
    borderWidth: 1,
    backgroundColor: "#232323",
    color: "#dedede",
    width: "20%",
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
  button: {
    marginBottom: 10,
  },
});

export default AddMovieScreen;
