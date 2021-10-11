import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { ActivityIndicator  } from "react-native";
import { SafeAreaView } from "react-native";
import { ListItem, Avatar  } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  ScrollView ,
  Image,
  View,
  Text,
} from "react-native";


const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useEffect(() => {
    setLoading(true);
       db.collection('Viptips')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
              setPosts(snapshot.docs.map( doc => doc.data())) )
    setLoading(false);

   }, []);

  useLayoutEffect(() => {
    setLoading(true);
    navigation.setOptions({
      title: "VIP TIPS",
      headerStyle: { backgroundColor: "#2C6EBD" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar  rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            marginRight: 20,
            flexDirection: "row",
            width: 70,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
    setLoading(false);
  }, [navigation]);

   

  return (
    loading ? <ActivityIndicator size="large" color="gray" style={{ flex: 0.7 }}/> :
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {   
          posts.map( post => (   

            <view>
              <ListItem>
                <Text>{post.Vtime}</Text>
                <Text>{post.Vcountry}</Text>
                <Text>{post.Results}</Text>
              </ListItem>

              <ListItem>
                <Text>{post.Home}</Text>
                <Text> vs </Text>
                <Text>{post.Away}</Text>
                <ListItem.Title
                  style={{ fontWeight: "800" }} >
                  {post.Vtips}
                </ListItem.Title>
                <Text> @{post.VOdds}</Text>
              </ListItem>
            </view>
              
          ))
        } 
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%", 
  },
});
