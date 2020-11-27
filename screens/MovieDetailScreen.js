import React, { useState, useEffect } from "react";
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
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import firebase from "firebase";
import "firebase/firestore";
import { ActivityIndicator } from "react-native";

const MovieDetailScreen = (props) => {
  const dbh = firebase.firestore();
  const [selectedValue, setSelectedValue] = useState("1");

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [movies, setMovies] = useState([]); // Initial empty array of movies
  const [comment, setComment] = useState('');
  

  const _CommentButton = () => {
    firebase
      .firestore()
      .collection("series")
      .doc(selectedMov.key)
      .update(
        {
          checkin: firebase.firestore.FieldValue.arrayUnion({
            comment: comment,
            email: "tinto88@hotmail.com",
            ep: "1",
            imgUrl:
              "https://assets.fxnetworks.com/cms/prod/2019/08/08/web_largecoverart_series_american-horror-story_540x796.jpg",
            ss: "1",
            username: "tinto",
          }),
        }
      );
    // alert("test");
    setComment("")
  };

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
  const moviId = props.navigation.getParam("moviesId");
  const selectedMov = movies.find((movie) => movie.id === moviId);

  // var payments = [];
  // for (let i = 1; i <= 3; i++) {
  //   payments.push(<Picker.Item label={i} value={i} />)
  // }
  return (
    <ScrollView style={styles.scrollView} >
      {/* {console.log(selectedMov)} */}
      <View style={styles.screen}>
        <View style={styles.box1}>
          <ImageBackground
            source={{ uri: selectedMov.cover }}
            style={styles.img}
          ></ImageBackground>

          <Text style={styles.headText}>{selectedMov.name}</Text>

          <Text style={styles.ontext}>เรื่องย่อ:</Text>
          <Text style={styles.ontext}>{selectedMov.desc}</Text>
          {/* <View style={{ marginTop: 8 }}>
            <Text style={styles.ontext}>
              <Text style={{ color: "red" }}>Season: </Text>
              {selectedMov.season}
            </Text>

            <Text style={styles.ontext}>
              <Text style={{ color: "red" }}>Episode:</Text>{" "}
              <ScrollView>
                <Picker
                  selectedValue={selectedValue}
                  style={{ height: 25, width: 45 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                >
                  
                </Picker>
              </ScrollView>
            </Text>

            <Text style={styles.ontext}>
              <Text style={{ color: "red" }}>Number of Finished:</Text>{" "}
              {selectedMov.numOfFinished}
            </Text>

            <Text style={styles.ontext}>
              <Text style={{ color: "red" }}>Number of In-Progress:</Text>{" "}
              {selectedMov.numOfInprogress}
            </Text>
          </View> */}

          <TextInput
            style={styles.textinput}
            placeholder="Comment ..."
            placeholderTextColor="#aaa"
            onChangeText={(text) => setComment(text)}
            value={comment}
          />
          <View style={styles.button}>
            <Button title="Comment" color="red" onPress={_CommentButton} />
          </View>
          <Text style={styles.ontext}>Comment:</Text>
          {/* {console.log(selectedMov.checkin)} */}
          {selectedMov.checkin.map((data) => {
            return (
              <CommentItem
                authorName={data.username}
                episode={data.ep}
                season={data.ss}
                movieName={selectedMov.name}
                time={"2020-05-25 11:32:33"}
                comment={data.comment}
                image={data.imgUrl}
                onSelectMeal={() => {
                  {
                    // props.navigation.navigate("MovieDetail", {
                    //   moviesId: itemData.item.id,
                    // });
                  }
                }}
              />
            );
          })}

          
        </View>
      </View>
    </ScrollView>
  );
};

MovieDetailScreen.navigationOptions = (navigationData) => {
  const moviesName = navigationData.navigation.getParam("moviesName");
  return {
    headerTintColor: "white",
    headerTitle: moviesName,
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
