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
// import { CATEGORIES } from "../data/dummy-data";
// import CategoryGridTile from "../components/CategoryGridTile";

const SearchScreen = (props) => {

  return (
    // <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์เมื่อใช้ <FlatList>
    <View style={styles.screen}>
      {/* <View style={styles.container}> */}
      <TextInput style={styles.textinput} placeholder='Type movie name...'/>
      <View style={styles.button}>
      <Button
        title="Search"
        color="red"
      />
      </View>
        <Text style={styles.result}>Result:</Text>
        <View style={styles.box1}>
          <Text style={styles.headText}>Currenlty Watching</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.headText}>Finished</Text>
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
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#111111',
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
    backgroundColor: 'black',
    alignItems: "flex-start"

  },
  box2: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: 'black',
    alignItems: "flex-start"

  },
  headText: {
    color: 'white',
    fontSize: 18

  },
  textinput: {
    // margin: 10,
    padding: 10,
    height: 40,
    backgroundColor: 'white',
    marginLeft: "auto",
    marginRight: "auto",
    width: 325,
    marginBottom: 10,
    marginTop: 30,
    backgroundColor: '#0F0F0F',
    color: '#aaa',
    // borderColor: "#fff1",
    borderStyle: 'solid',
    borderWidth: 1
  },
  button:{
    width: 150,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 325
  },
  result:{
    color: 'white',
    margin: 10,
    marginTop: 30,
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default SearchScreen;
