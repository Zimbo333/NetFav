// import คอมโพเนนต์ที่จำเป็น
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

const NetFavTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Entypo name="home" size={24} color="black" />;
        },
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <FontAwesome name="search" size={24} color="black" />;
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="md-person" size={24} color="black" />;
        },
      },
    },
  },
  {
    tabBarOptions: { activeTintColor: "red",
  activeBackgroundColor: 'grey' },
  }
);

const NetFavNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: NetFavTabNavigator,
  },
  {
    defaultNavigationOptions: {
      title: 'NetFav',
      headerStyle: {
        backgroundColor: "black",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        paddingBottom: 20
      },
      headerTintColor: "red",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: null,
    },
  }
);

export default createAppContainer(NetFavNavigator);
