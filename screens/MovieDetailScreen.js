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
  ImageBackground
} from "react-native";
import { MOVIES } from "../data/dummy-data";
<<<<<<< Updated upstream

const MovieDetailScreen = (props) => {
=======
import CommentItem from "../components/CommentItem";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';


const MovieDetailScreen = (props) => {
  
  const moviId = props.navigation.getParam("moviesId");
  const selectedMov = MOVIES.find((movie) => movie.id === moviId);
  const [selectedValue, setSelectedValue] = useState("1");
>>>>>>> Stashed changes

  const moviId = props.navigation.getParam('moviesId')
  const selectedMov = MOVIES.find((movie) => movie.id === moviId);
  return (

    <ScrollView style={styles.scrollView}>
      <View style={styles.screen}>
        <View style={styles.box1}>
          <ImageBackground
            source={{ uri: selectedMov.coverImgUrl }}
            style={styles.img}>
          </ImageBackground>
          <Text style={styles.headText}>{selectedMov.name}</Text>
          <Text style={styles.ontext}>เรื่องย่อ:</Text>
          <Text style={styles.ontext}>{selectedMov.description}</Text>
          <View style={{marginTop:8}}>
          <Text style={styles.ontext}><Text style={{color:'red'}}>Season: </Text>{selectedMov.season}</Text>
          <Text style={styles.ontext}><Text style={{color:'red'}}>Episode:</Text> {selectedMov.episode}</Text>
          </View>
<<<<<<< Updated upstream
=======
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
            comment={selectedMov.comments}
            image={
              "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/61900010_2257196431030497_3782796938487791616_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHwH9KpfjdVsHQsZVGDUdeLoXpPU11cvVWhek9TXVy9VcDsxibpOdi0-VeMSMwueEYkl4olX17_lrstjWrtorgW&_nc_ohc=gTp2-76qgwoAX8ijVHM&_nc_ht=scontent.fbkk5-8.fna&oh=284bd29d38c52ccc9c9dec17db7273b6&oe=5FE15EC8"
            }
            onSelectMeal={() => {
              {
                // props.navigation.navigate("MovieDetail", {
                //   moviesId: itemData.item.id,
                // });
              }
            }}
          />
          <CommentItem
            authorName={"Thanawat"}
            episode={"9"}
            movieName={selectedMov.name}
            season={selectedMov.season}
            time={"2020-05-25 11:50:43"}
            comment={selectedMov.comments}
            image={
              "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/16730167_1375883262432703_5084113495274887261_n.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_eui2=AeEgjd3WQ4RWgZFdKs6R5DE0TREK90zxwZdNEQr3TPHBl4uHq7kf-_Bz7uOs4dPXivP4YOvSMO0QaLUqGs0YkfrR&_nc_ohc=BmieNGze5RIAX8GxpXC&_nc_ht=scontent.fbkk5-6.fna&oh=c34a83a321360f1c8c19fa37d049e9f3&oe=5FE1B4CB"
            }
            onSelectMeal={() => {
              {
                // props.navigation.navigate("MovieDetail", {
                //   moviesId: itemData.item.id,
                // });
              }
            }}
          />
>>>>>>> Stashed changes
        </View>
      </View>
    </ScrollView>

  );
};

// กำหนด navigationOptions เช่่น การปรับแต่งเฮดเดอร์ที่นี่ได้
MovieDetailScreen.navigationOptions = (navigationData) => {
  const moviesId = navigationData.navigation.getParam('moviesId')
  const selectedMovie = MOVIES.find((mov) => mov.id === moviesId);
  return {
    headerTintColor: "red",
    headerTitle: selectedMovie.name
  }


};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "stretch",
  },
  img: {
    width: '100%',
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
    textDecorationLine: 'underline',
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
  ontext: {
    marginTop: 5,
    color: 'white',
  }
});

export default MovieDetailScreen;
