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
import { MOVIES } from "../data/dummy-data";
import MovieItem from "../components/MovieItem";
import UpProItem from "../components/UpProItem";

const ProfileScreen = (props) => {
  const renderUpMovie = (itemData) => {
    return (
      <UpProItem
        title={itemData.item.name + " (Season " + itemData.item.season + ")"}
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
    <ScrollView style={styles.screen}>
      <View style={styles.box0}>
        <View style={styles.TextUserContainer}>
          <Text style={styles.innerBoxText}>Display Name</Text>
          <Text style={styles.innerBoxText}>@username</Text>
        </View>
        <View style={styles.ButtonContainer}>
          {/* <Button
            title="Follow"
            color="#c1071e"
            style={styles.button}
            onPress={() => {}}
          /> */}
          <Button
            title="Logout"
            color="#c1071e"
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          />
        </View>
      </View>
      <Text style={styles.headText}>Currenlty Watching</Text>
      <View style={styles.box1}>
        <FlatList data={MOVIES} renderItem={renderUpMovie} numColumns={1} />
      </View>
      <Text style={styles.headText}>Finished</Text>
      <View style={styles.box1}>
        <FlatList
          data={MOVIES.slice(1, 2)}
          renderItem={renderUpMovie}
          numColumns={1}
        />
      </View>
    </ScrollView>
  );
};

ProfileScreen.navigationOptions = {
  headerTitle: "NetFav",
  headerLeft: null,
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignSelf: "stretch",
    flex: 1,
    // backgroundColor: "yellow",
  },
  screen: {
    flex: 1,
    backgroundColor: "#111111",
    // justifyContent: "center",
    // alignItems: "stretch",
  },

  box0: {
    margin: 10,
    padding: 10,
    flex: 0.5,
    backgroundColor: "black",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  box1: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "black",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  headText: {
    marginLeft: 10,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  innerBoxText: {
    color: "white",
    fontSize: 20,
  },
  movieBox: {
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    marginBottom: 10,
  },
  ButtonContainer: {
    flexDirection: "row",
    flex: 1,
    // justifyContent: "space-between",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  button: {
    margin: 10,
    padding: 10,
  },
  TextUserContainer: {
    flex: 1.5,
  },
});

export default ProfileScreen;
