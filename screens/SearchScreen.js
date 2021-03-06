import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import MovieItem from "../components/MovieItem";
import { MOVIES } from "../data/dummy-data";
const SearchScreen = (props) => {
  const renderMovieItem = (itemData) => {
    return (
      <MovieItem
        title={itemData.item.name}
        season={"(Season " + itemData.item.season + ")"}
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
    <View style={styles.screen}>
      {/* <View style={styles.container}> */}
      <TextInput
        style={styles.textinput}
        placeholder="Type movie name..."
        placeholderTextColor="#aaa"
      />
      <View style={styles.button}>
        <Button
          title="Search"
          color="red"
          onPress={() => {
            props.navigation.navigate("MovieDetail");
          }}
        />
      </View>
      <Text style={styles.result}>Result:</Text>
      <View style={styles.box1}>
        {/* <Text style={styles.headText}>Currenlty Watching</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.headText}>Finished</Text> */}
        {/* <Text style={styles.headText}>
          Not Found?{" "}
          <Text
            style={{ color: "red" }}
            onPress={() => {
              props.navigation.navigate("Add");
            }}
          >
            Request One.
          </Text>
        </Text> */}

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
      {/* <View style={styles.box2}>
          <Text style={styles.headText}>Trending Now</Text>
        </View> */}
      {/* </View> */}
    </View>
  );
};

// กำหนด navigationOptions เช่่น การปรับแต่งเฮดเดอร์ที่นี่ได้
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
  textinput: {
    // margin: 10,
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
