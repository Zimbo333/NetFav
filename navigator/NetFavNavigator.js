// import คอมโพเนนต์ที่จำเป็น
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const NetFavNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,

  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#232926", },
      headerTintColor: "red",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(NetFavNavigator);
