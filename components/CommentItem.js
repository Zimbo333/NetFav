import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const CommentItem = (props) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentContainer1}>
        <Image
          style={styles.img}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.comment}>
            <Text style={styles.commentInnerText}>{props.authorName}</Text> has
            watching EP.{props.episode} on{" "}
            <Text style={styles.commentInnerText}>{props.time}</Text>
          </Text>
          <View style={styles.commentContainer2}>
            <Text style={styles.commentText}>กระสุนวงจักรสุดยอด</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 150,
    width: "100%",
    overflow: "hidden",
    margin: 4,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "100%",
  },

  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  commentContainer: {
    // backgroundColor: "rgba(0,0,0,0.5)",
    backgroundColor: "#232323",
    paddingVertical: 5,
    paddingHorizontal: 12,
    flex: 1,
    width: "100%",
    borderRadius: 10,
    marginVertical: 5,
  },
  commentContainer1: {
    flexDirection: "row",
    flex: 1,
  },
  commentContainer2: {
    // backgroundColor: "red",
  },
  comment: {
    // fontFamily: "open-sans-bold",
    fontSize: 12,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  commentInnerText: {
    color: "red",
  },
  img: {
    width: 50,
    height: 50,
    margin: 5,
  },
  textContainer: {
    // backgroundColor: "blue",
    alignSelf: "center",
  },
  commentText: {
    margin: 5,
    fontSize: 12,
    color: "white",
  },
});

export default CommentItem;
