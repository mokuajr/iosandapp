import React, { useEffect, useState } from "react";
import { ListItem, Avatar } from "react-native-elements";
import {
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
const Layouttips = ({ country, timestamp, odds, results, homelogo, hometeam, time, tips, awaylogo, awayteam, imageUrl }) => {
   

  return (
    <View  styles={{  
      border: "1 ",
      flex:1,
      borderRadius: "20"
        
      }} >
      <Text styles={{ 
        justifyContent: "center", 
      }} > timestamp </Text>
      <ListItem  styles={{ 
        display: "flex",   
        justifyContent: "center",

        fontWeight:"600",
      }}>
        <Text > {country} </Text>
        <Text > { results } </Text> 
      </ListItem >
      <ListItem  styles={{ 
        display: "flex", 
        justifyContent: "center",
        alignContent:"center",
      }} >
        <View  styles={{ 
          display: "flex", 
          justifyContent: "center",
          alignContent:"center",
        }} >
             
          <Avatar
            rounded
            source={homelogo}
          />
          <Text > { hometeam}  </Text> 
        </View>
        <Text > {time} </Text> 
        <View >
          <Avatar
          rounded
            source={ awaylogo }
          />
          <Text > {awayteam} </Text> 
        </View> 
      </ListItem>
      <ListItem  >
        <Text >{ tips} </Text> 
        <Text >@ { odds} </Text> 
      </ListItem>
        
     
    </View>
  );
};

export default Layouttips;
