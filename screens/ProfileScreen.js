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
// import { ScrollView } from "react-native-gesture-handler";

const ProfileScreen = (props) => {
  return (
    // <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์เมื่อใช้ <FlatList>
    <ScrollView style={styles.screen}>
      {/* <View style={styles.container}> */}
      {/* <ScrollView style={styles.scrollContainer}> */}
      <View style={styles.box0}>
        <Text style={styles.innerBoxText}>Display Name</Text>
        <Button
          title="Logout"
          color="#c1071e"
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        />
      </View>
      <Text style={styles.headText}>Currenlty Watching</Text>
      <View style={styles.box1}>
        <View style={styles.movieBox}></View>
      </View>
      <Text style={styles.headText}>Finished</Text>
      <View style={styles.box1}>
        <View style={styles.movieBox}></View>
      </View>
      {/* </View> */}
      {/* </ScrollView> */}
    </ScrollView>
  );
};

// กำหนด navigationOptions เช่่น การปรับแต่งเฮดเดอร์ที่นี่ได้
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  headText: {
    marginLeft: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  innerBoxText: {
    color: "white",
  },
  movieBox: {
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    marginBottom: 10,
  },
});

export default ProfileScreen;
