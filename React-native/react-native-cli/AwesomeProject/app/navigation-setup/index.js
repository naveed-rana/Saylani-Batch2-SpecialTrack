import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../screens/Home';
import ContactScreen from '../screens/Contact'; 
import Cam from '../screens/camera';   

const AppNavigator = createStackNavigator({
  Home:HomeScreen,
  Contact: {
    screen: ContactScreen
  },
  Camera: {
    screen: Cam
  }
},{
  headerMode:'none'
});

export default createAppContainer(AppNavigator);
