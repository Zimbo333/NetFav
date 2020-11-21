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

const ProfileScreen = (props) => {
  return (
    // <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์เมื่อใช้ <FlatList>
    <View style={styles.screen}>
      {/* <View style={styles.container}> */}
      <View style={styles.box0}>
        <Text style={styles.headText}>Display Name</Text>
        <Button title="Logout" color="red" style={styles.button} onPress={() => { props.navigation.navigate("Login") }} />
      </View>
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
ProfileScreen.navigationOptions = {
  headerTitle: "NetFav",
  
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "stretch",
  },
  // container: {
  //   margin: 20,
  //   padding: 10,
  //   flex: 1,
  //   backgroundColor: 'white',

  // },
  box0: {
    margin: 10,
    padding: 10,
    flex: 0.5,
    backgroundColor: "#111111",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  box1: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "#111111",
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
    fontSize: "100%",
  },
});

export default ProfileScreen;
