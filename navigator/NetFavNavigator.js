// import คอมโพเนนต์ที่จำเป็น
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const NetFavTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={24}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Firstpage: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={24}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    // Favorites: {
    //   screen: FavNavigator,
    //   navigationOptions: {
    //     tabBarIcon: (tabInfo) => {
    //       return (<Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />);
    //     },
    //     tabBarLabel: "My Favorites",
    //   }
    // }
  },
  {
    tabBarOptions: { activeTintColor: "orange" },
  }
);

const NetFavNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: NetFavTabNavigator,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#232926" },
      headerTintColor: "red",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(NetFavNavigator);
