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
} from "react-native";
import MovieItem from "../components/MovieItem";
import UpProItem from "../components/UpProItem";
import { MOVIES } from "../data/dummy-data";
const HomeScreen = (props) => {
  const renderUpMovie = (itemData) => {
    return (
      <UpProItem
        title={itemData.item.name}
        image={itemData.item.coverImgUrl}
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

  const renderMovieItem = (itemData) => {
    return (
      <MovieItem
        title={itemData.item.name}
        image={itemData.item.coverImgUrl}
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
    // <View style={styles.screen}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.result}>Update your Progress:</Text>
      <View style={styles.box1}>
        <FlatList
          data={MOVIES.slice(0, 3)}
          renderItem={renderUpMovie}
          numColumns={1}
        />
      </View>
      <Text style={styles.result}>Trending Now:</Text>
      <View style={styles.box2}>
        <FlatList
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
            paddingLeft: 25,
          }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={MOVIES}
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
  // container: {
  //   margin: 20,
  //   padding: 10,
  //   flex: 1,
  //   backgroundColor: 'white',

  // },
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
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: "#111111",
  },
});

export default HomeScreen;
