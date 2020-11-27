import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";

import MovieItem from "../components/MovieItem";
import UpProItem from "../components/UpProItem";

import { MOVIES } from "../data/dummy-data";
import firebase from "firebase";
import "firebase/firestore";

const HomeScreen = (props) => {
  const dbh = firebase.firestore();

  const [loading, setLoading] = useState(true); 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const subscriber = dbh.collection("series").onSnapshot((querySnapshot) => {
      const movies = [];

      querySnapshot.forEach((documentSnapshot) => {
        movies.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setMovies(movies);
      setLoading(false);
    });
    return () => subscriber();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }

  const renderUpMovie = (itemData) => {
    return (
      <UpProItem
        title={
          itemData.item.name
          // + " (Season " + itemData.item.season + ")"
        }
        image={itemData.item.cover}
        onSelectMeal={() => {
          {
            props.navigation.navigate("MovieDetail", {
              moviesId: itemData.item.id,
              moviesName: itemData.item.name,
            });
          }
          // console.log(Object.keys(movies))
        }}
      />
    );
  };

  const renderMovieItem = (itemData) => {
    return (
      <MovieItem
        title={itemData.item.name}
        // season={"(Season " + itemData.item.season + ")"}
        image={itemData.item.cover}
        onSelectMeal={() => {
          {
            props.navigation.navigate("MovieDetail", {
              moviesId: itemData.item.id,
              moviesName: itemData.item.name,
            });
          }
        }}
      />
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.result}>Update your Progress</Text>
      <View style={styles.box1}>
        <FlatList
          data={movies.slice(0, 3)}
          renderItem={renderUpMovie}
          numColumns={1}
        />
      </View>
      <Text style={styles.result}>Trending Now</Text>
      <View style={styles.box2}>
        <FlatList
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
            paddingLeft: 25,
          }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={movies}
          renderItem={renderMovieItem}
          numColumns={2}
          style={styles.flatListContainer}
        />
      </View>
    </ScrollView>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "NetFav",
  headerLeft: () => null,
};

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "black",
  },
  screen: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "stretch",
  },
  box1: {
    margin: 10,
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box2: {
    margin: 10,
    padding: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
    fontSize: 22,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: "#111111",
  },
});

export default HomeScreen;
