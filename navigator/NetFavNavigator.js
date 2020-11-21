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
              name="ios-home"
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
              name="ios-note"
              size={24}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Profile: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (<Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />);
        },
        tabBarLabel: "Profile",
      }
    }
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
