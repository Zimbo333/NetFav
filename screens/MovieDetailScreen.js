import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView
} from "react-native";
// import { CATEGORIES } from "../data/dummy-data";
// import CategoryGridTile from "../components/CategoryGridTile";

const MovieDetailScreen = (props) => {
  return (
  
    <ScrollView style={styles.scrollView}>
    {/* <View style={styles.screen}> */}
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      <Text style={styles.result}>Update your Progress</Text>
      {/* <View style={styles.box1}> */}
        <Text style={styles.headText}>Movie</Text>
      {/* </View>
    </View> */}
    </ScrollView>
  
  );
};

// กำหนด navigationOptions เช่่น การปรับแต่งเฮดเดอร์ที่นี่ได้
MovieDetailScreen.navigationOptions = {
  headerTintColor: "white",
  
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "stretch",
  },
  // container: {
  //   margin: 20,
  //   padding: 10,
  //   flex: 1,
  //   backgroundColor: 'white',

  // },
  box1: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-start",
  },
  box2: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-start",
  },
  headText: {
    color: "white",
    fontSize: 18,
  },
  result: {
    color: "white",
    margin: 12,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: '#111111',
  },
});

export default MovieDetailScreen;
