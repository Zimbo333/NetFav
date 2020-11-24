import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
  ImageBackground,
} from "react-native";
import { MOVIES } from "../data/dummy-data";

const MovieDetailScreen = (props) => {
  
  const moviId = props.navigation.getParam("moviesId");
  const selectedMov = MOVIES.find((movie) => movie.id === moviId);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.screen}>
        <View style={styles.box1}>

          <ImageBackground
            source={{ uri: selectedMov.coverImgUrl }}
            style={styles.img}
          ></ImageBackground>

          <Text style={styles.headText}>{selectedMov.name}</Text>

          <Text style={styles.ontext}>เรื่องย่อ:</Text>
          <Text style={styles.ontext}>{selectedMov.description}</Text>
          <View style={{ marginTop: 8 }}>

            <Text style={styles.ontext}>
              <Text style={{ color: "red" }}>Season: </Text>
              {selectedMov.season}
            </Text>

            <Text style={styles.ontext}>
              <Text style={{ color: "red" }}>Episode:</Text>{" "}
              {selectedMov.episode}
            </Text>

            <Text style={styles.ontext}>
              <Text style={{ color: "red" }}>Number of Finished:</Text>{" "}
              {selectedMov.numOfFinished}
            </Text>

            <Text style={styles.ontext}>
              <Text style={{ color: "red" }}>Number of In-Progress:</Text>{" "}
              {selectedMov.numOfInprogress}
            </Text>
 
            <Text style={styles.ontext}>Comment:</Text>
            {selectedMov.comments.map((data) => {
            
            return (
              <Text key={data} style={styles.commentText}>- {data}</Text>
            );

          })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// กำหนด navigationOptions เช่่น การปรับแต่งเฮดเดอร์ที่นี่ได้
MovieDetailScreen.navigationOptions = (navigationData) => {
  const moviesId = navigationData.navigation.getParam("moviesId");
  const selectedMovie = MOVIES.find((mov) => mov.id === moviesId);
  return {
    headerTintColor: "red",
    headerTitle: selectedMovie.name,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "stretch",
  },
  img: {
    width: "100%",
    height: 300,
    justifyContent: "flex-end",
  },
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
    fontSize: 24,
    marginTop: 10,
    // textDecorationLine: "underline",
  },
  result: {
    color: "white",
    margin: 12,
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: "#111111",
  },
  ontext: {
    marginTop: 5,
    color: "white",
  },
  commentText:{
    color: "white",
  },
});

export default MovieDetailScreen;
