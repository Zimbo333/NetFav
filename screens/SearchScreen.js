import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MovieItem from "../components/MovieItem";

import { MOVIES } from "../data/dummy-data";
import firebase from "firebase";
import "firebase/firestore";

const SearchScreen = (props) => {
  const [itemSearch, setitemSearch] = useState("");
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
  const data = movies.filter((items) =>
    items.name.toLowerCase().includes(itemSearch.toLowerCase())
  );

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
            });
          }
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.textinput}
        placeholder="Type movie name..."
        placeholderTextColor="#aaa"
        onChangeText={(text) => {
          setitemSearch(text);
          console.log(itemSearch);
        }}
      />
      {/* <View style={styles.button}>
        <Button
          title="Search"
          color="red"
          onPress={() => {
            // props.navigation.navigate("MovieDetail");
          }}
        />
      </View> */}
      <Text style={styles.result}>Result:</Text>
      <View style={styles.box1}>
        <FlatList
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
            paddingLeft: 25,
          }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={data}
          renderItem={renderMovieItem}
          numColumns={2}
          style={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

SearchScreen.navigationOptions = {
  headerTitle: "NetFav",
  headerLeft: null,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "stretch",
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
    fontSize: 18,
  },
  textinput: {
    padding: 10,
    height: 40,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    width: 325,
    marginBottom: 10,
    marginTop: 30,
    backgroundColor: "#0F0F0F",
    color: "#dedede",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff1",
  },
  button: {
    width: 150,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 325,
  },
  result: {
    color: "white",
    margin: 10,
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SearchScreen;
