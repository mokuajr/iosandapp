import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
 
import { db } from "../firebase";
import { 
  View,
  Image,
  Text 
} from "react-native";
const CustomListItem = ({ id, tittle, desc, imageUrl, readPost }) => {
   
  return (
    <ListItem onPress={() => readPost(id, tittle, desc, imageUrl)} key={id} bottomDivider style={styles.container}>
      
      <ListItem.Content style={styles.payment}> 
        <ListItem.Title
          style={styles.title}>
            {tittle}
        </ListItem.Title>
        <View>   
         <Image  
          source={{uri:
              {imageUrl}
            }}
          style={ {height:100,}} />
        </View>
        <ListItem.Subtitle
          numberOfLines={1} ellipsizeMode="tail" style={styles.paragraph}>
              
          </ListItem.Subtitle> 
          </ListItem.Content>
    </ListItem>
         
  );
};

export default CustomListItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  payment: {
    
  },
  tittle: {
    fontWeight:800,
  },
  paragraph: {
    
  },

});