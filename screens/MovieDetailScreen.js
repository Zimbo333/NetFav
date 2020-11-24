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
  TextInput,
} from "react-native";
import { MOVIES } from "../data/dummy-data";
import CommentItem from "../components/CommentItem";

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

            {/* {selectedMov.comments.map((data) => {
              return (
                // <Text key={data} style={styles.commentText}>- {data}</Text>
                <CommentItem
                  title={
                    itemData.item.name +
                    " (Season " +
                    itemData.item.season +
                    ")"
                  }
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
            })} */}
          </View>
          <TextInput
            style={styles.textinput}
            placeholder="Comment ..."
            placeholderTextColor="#aaa"
          />
          <View style={styles.button}>
            <Button
              title="Comment"
              color="red"
              onPress={() => {
                // props.navigation.navigate("MovieDetail");
              }}
            />
          </View>
          <Text style={styles.ontext}>Comment:</Text>
          <CommentItem
            authorName={"Tinto"}
            episode={"9"}
            movieName={selectedMov.name}
            season={selectedMov.season}
            time={"2020-05-25 11:32:33"}
            onSelectMeal={() => {
              {
                // props.navigation.navigate("MovieDetail", {
                //   moviesId: itemData.item.id,
                // });
              }
            }}
          />
          <CommentItem
            authorName={"Tinto"}
            episode={"9"}
            movieName={selectedMov.name}
            season={selectedMov.season}
            time={"2020-05-25 11:32:33"}
            onSelectMeal={() => {
              {
                // props.navigation.navigate("MovieDetail", {
                //   moviesId: itemData.item.id,
                // });
              }
            }}
          />
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
    headerTintColor: "white",
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
  commentText: {
    color: "white",
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
    justifyContent: "center",
    width: "100%",
  },
});

export default MovieDetailScreen;
