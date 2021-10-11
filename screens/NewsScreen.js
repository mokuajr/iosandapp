import React,{ useEffect, useState } from 'react';
import { 
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import { db } from '../firebase';

import CustomListItem from '../components/CustomListItem';
const NewsScreen = ({navigation}) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const unsubscribe =
      db.collection('posts')
      .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
          setNews(
            snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))
        )
        );
    return unsubscribe;
  }, [])
  
  const readPost = (id, tittle, desc, imageUrl) => {
    navigation.navigate('Sports', {
      id,
      tittle,
      desc, 
      imageUrl,
    });
  };

    return (
       <SafeAreaView > 
        <StatusBar styles="light" />
        <ScrollView styles={styles.container}> 
          {news.map(({id, data:{tittle},data:{desc},data:{imageUrl}}) => (
            <CustomListItem
              key={id}
              id={id}
              imageUrl={imageUrl}
              desc={desc}
              tittle={tittle}
              readPost={readPost}
            />
          ))}
        </ScrollView>
       </SafeAreaView>
                
    );
}
export default NewsScreen;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  }, 
   
});

