import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
const CommentItem = (props) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentContainer1}>
        <Image style={styles.img} source={{ uri: props.image }} />
        <View style={styles.textContainer}>
          <Text style={styles.comment}>
            <Text style={styles.commentInnerText}>{props.authorName}</Text> has
            watching EP.{props.episode}{" "} (Season {props.season} )
          </Text>
          <Text style={styles.comment}>
            <Text style={styles.commentInnerText2}>on {props.time}</Text>
          </Text>
          <View style={styles.commentContainer2}>
            <Text style={styles.commentText}>{props.comment}</Text>
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
  },
  comment: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    justifyContent: "flex-start",
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
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  commentText: {
    margin: 5,
    fontSize: 12,
    color: "white",
  },
  commentInnerText2: {
    justifyContent: "flex-start",
    fontSize: 10,
    color: "gray",
  },
});

export default CommentItem;
