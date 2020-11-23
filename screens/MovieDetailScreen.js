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
import { MOVIES } from "../data/dummy-data";

const MovieDetailScreen = (props) => {
  const renderMovieDetail = (ItemData) => {
    return (
      <UpProItem
        title={itemData.item.name}
        image={itemData.item.coverImgUrl}
      />
    )
  }
  const movId = props.navigation.getParam('moviesId')
  return (

    <ScrollView style={styles.scrollView}>
      <View style={styles.screen}>
        <View style={styles.box1}>
          <Text style={styles.headText}>Movie</Text>
          <Text>{movId.title}</Text>
        </View>
      </View>
    </ScrollView>

  );
};

// กำหนด navigationOptions เช่่น การปรับแต่งเฮดเดอร์ที่นี่ได้
MovieDetailScreen.navigationOptions = (navigationData) => {
  const moviesId = navigationData.navigation.getParam('moviesId')
  const selectedMovie = MOVIES.find((mov) => mov.id === moviesId);
  return{
    headerTintColor: "white",
    headerTitle: selectedMovie.name
  }


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
