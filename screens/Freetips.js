 import React, {useEffect, useState } from 'react'
 import { View, Text } from 'react-native'
 import Layouttips from "../components/Layouttips";
import { db } from '../firebase';

 const Freetips = () => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection('freetips')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setPosts(snapshot.docs.map( doc => doc.data())) )
    }, []);
   return (
     <View>
        {   
          posts.map( post => (

            <Layouttips
              timestamp={post.timestamp}
                country={post.country}
                odds= {post.odds}
                results = {post.results}
                homelogo= {post.homelogo}
                hometeam={ post.hometeam}
                time= {post.time}
                tips= {post.tips}
                awaylogo= {post.awaylogo}
                awayteam= {post.awayteam}
                imageUrl={post.imageUrl}
            /> 
          ))
        }
         
     </View>
   )
 }
 
 export default Freetips
 