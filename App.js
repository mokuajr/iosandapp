import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen"; 
import Freetips from "./screens/Freetips";
import JoinVipScreen from "./screens/JoinVipScreen";
import MessageScreen from "./screens/MessageScreen";
import NewsScreen from "./screens/NewsScreen";
import SportsPostScreen from "./screens/SportsPostScreen";
 
// import Tabs from './components/Tabs';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6EBD" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white", 
};

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="news" 
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen  name="News" component={NewsScreen }/>
        <Stack.Screen  name="Message" component={MessageScreen }/>
        <Stack.Screen name="JOIN_VIP" component={JoinVipScreen}/> 
        <Stack.Screen name="Home" component={HomeScreen}/> 
        <Stack.Screen name="Freetips" component={Freetips}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen} />      
        <Stack.Screen name="Sports" component={SportsPostScreen} />
        
      </Stack.Navigator>
      {/* <Tabs /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
