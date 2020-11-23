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
import MovieItem from "../components/MovieItem";
import UpProItem from "../components/UpProItem";

const HomeScreen = (props) => {
  return (
    // <View style={styles.screen}>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.result}>Update your Progress</Text>
      <View style={styles.box1}>
        <UpProItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <UpProItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <UpProItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
      </View>
      <Text style={styles.result
      }>Trending Now</Text>
      <View style={styles.box2}>
      <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
        <MovieItem
          title={"Naruto"}
          image={
            "https://vignette.wikia.nocookie.net/naruto/images/2/28/Rasengan.png/revision/latest?cb=20150702135410"
          }
          onSelectMeal={() => {
            {
              props.navigation.navigate("MovieDetail");
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

HomeScreen.navigationOptions = {
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
    paddingLeft: 10,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10,
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
    backgroundColor: '#111111',
  },
});

export default HomeScreen;
