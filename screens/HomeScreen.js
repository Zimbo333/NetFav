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
// import { CATEGORIES } from "../data/dummy-data";
// import CategoryGridTile from "../components/CategoryGridTile";

const HomeScreen = (props) => {

  return (
    // <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์เมื่อใช้ <FlatList>
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.headText}>Update your Progress</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.headText}>Trending Now</Text>
        </View>
      </View>

    </View>
  );
};

// กำหนด navigationOptions เช่่น การปรับแต่งเฮดเดอร์ที่นี่ได้
HomeScreen.navigationOptions = {
  headerTitle: "NetFav",
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#45524b',
    justifyContent: "center",
    alignItems: "center",
  },
  // container: {
  //   margin: 20,
  //   padding: 10,
  //   flex: 1,
  //   backgroundColor: 'white',

  // },
  box1: {
    margin: 20,
    padding: 10,
    flex: 1,
    backgroundColor: 'black',

  },
  box2: {
    margin: 20,
    padding: 10,
    flex: 1,
    backgroundColor: 'black',

  },
  headText: {
    color: 'white',

  },
});

export default HomeScreen;
