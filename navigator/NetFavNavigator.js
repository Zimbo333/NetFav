// import คอมโพเนนต์ที่จำเป็น
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";

const NetFavNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    Home: HomeScreen,

  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#232926", },
      headerTintColor: "red",
    },
  }
);

export default createAppContainer(NetFavNavigator);
