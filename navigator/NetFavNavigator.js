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
import RegisterScreen from "../screens/RegisterScreen";

const NetFavTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Entypo name="home" size={24} color={tabInfo.tintColor} />;
        },
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome name="search" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="md-person" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "#000000",
      inactiveTintColor: "#5c5c5c",
      inactiveBackgroundColor: "#111111",
      style: {
        // Remove border top on both android & ios
        borderTopWidth: 0,
        borderTopColor: "transparent",

        elevation: 0,
        shadowColor: "#5bc4ff",
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
      },
      tabStyle: {
        padding: 5,
      },
    },
  }
);

const NetFavNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: NetFavTabNavigator,
  },
  {
    defaultNavigationOptions: {
      title: "NetFav",
      headerStyle: {
        backgroundColor: "black",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        paddingBottom: 20,
      },
      headerTintColor: "#c1071e",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: null,
    },
  }
);

export default createAppContainer(NetFavNavigator);
