import React, {useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ListItem, Avatar } from "react-native-elements";
import { StyleSheet, 
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
     Text, View } from 'react-native'
     import { Ionicons, FontAwesome } from "@expo/vector-icons";

const SportsPostScreen = ({navigation, route}) => {
   useLayoutEffect(() => {
    navigation.setOptions({
      title: "Sports News",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri:
                // messages[0]?.data?.photoURL ||
                "https://censur.es/wp-content/uploads/2019/03/default-avatar.png",
            }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
            {route.params.tittle}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 70,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
    scrollDownFunc();
  }, [navigation ]);
   const scrollDown = useRef();

    const scrollDownFunc = () => {
     //scrollDown.current.scrollToEnd();
    }
    const [news, setNews] = useState([]);
  useEffect(() => {
    const unsubscribe =
      db.collection('posts')
      .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
          setNews(
            snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data()
          })))
        )
        );
    return unsubscribe;
  }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <Text>sports page </Text>
          {   
            posts.map( post => ( 
              <view>  
                <ListItem.Title
                  style={{ fontWeight: "800" }} >
                  {post.tittle}
                </ListItem.Title>
                <ListItem.Title
                  style={{ fontWeight: "800" }} >
                  {post.timestamp}
                </ListItem.Title>
                <Image  
                  source= {post.imageUrl} 
                  style={ {height:100,}} />
                <Text >{post.desc}</Text>
                <Image  
                  source= {post.imageUrl} 
                  style={ {height:100,}} />
            </view>
            ))
          }
        </SafeAreaView>
    )
}

export default SportsPostScreen
const styles = StyleSheet.create({

})
