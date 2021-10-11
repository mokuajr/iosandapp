// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import HomeScreen from "../screens/HomeScreen"; 
// import JoinVipScreen from "../screens/JoinVipScreen";
// import MessageScreen from "../screens/MessageScreen";
// import NewsScreen from "../screens/NewsScreen";
// import SportsPostScreen from "../screens/SportsPostScreen"; 
// import Freetips from "../screens/Freetips";
// import { 
//     StyleSheet,
//     Text,
//     Image,
//     TouchableOpacity, 
//     View } from 'react-native';


// const Tab = createBottomTabNavigator();
// const CustomTabBarButton =(children, onPress) =(
//     <TouchableOpacity 
//         style={{
//             top:-30,
//             justifyContent:'center',
//             alignItems:'center',
//             ...styles.shadow
//         }}
//         onPress={onPress}
//     >
//         <View 
//             style={
//                 width:70,
//                 height:70,
//                 borderRadius:35,
//                 backgroundColor:''
//             }
//         > {children} </View>

//     </TouchableOpacity>
// );

// const Tabs = () => {
//     return (
//         <Tab.Navigator
//             tabBarOptions ={{
//                 showLabel :false,
//                 style:{
//                     position: 'absolute',
//                     bottom: 25,
//                     left:20,
//                     right:20,
//                     elevation:0,
//                     backgroundColor:'#ffffff',
//                     borderRadius:15,
//                     height: 90,
//                     ...styles.shadow
//                 }
//             }}
//         >
//            <Tab.Screen name="Freetips" 
//                 component={Freetips}
//                 options={{ tabBarIcon:({focused}) =>(
//                     <View 
//                      Style={{alignItems:'center',
//                       justifyContent: 'center',
//                       top:10,
//                       }}
//                     >
//                         <Image
//                         //  source={require('../assets/icons/home.png')}
//                             ResizeMode='contain'
//                             style={{
//                                 width:25,
//                                 height:25,
//                                 tintColor:focused? '#e32f45':'#748c94',
//                             }}

//                         />
//                         <Text 
//                             style={{color:focused? '#e32f45':'#748c94', fontSize:12}}
//                         > Freetips</Text>
//                     </View>
//                 ), }}
//              />
//            <Tab.Screen name="Home"
//                 component={HomeScreen} 
//                  options={{ tabBarIcon:({focused}) =>(
//                     <View 
//                      Style={{alignItems:'center',
//                       justifyContent: 'center',
//                       top:10,
//                       }}
//                     >
//                         <Image
//                         //  source={require('../assets/icons/home.png')}
//                             ResizeMode='contain'
//                             style={{
//                                 width:25,
//                                 height:25,
//                                 tintColor:focused? '#e32f45':'#748c94',
//                             }}

//                         />
//                         <Text 
//                             style={{color:focused? '#e32f45':'#748c94', fontSize:12}}
//                         > Home</Text>
//                     </View>
//                 ), }}
//             />
//            <Tab.Screen name="Join" 
//                 component={JoinVipScreen} 
//                  options={{ tabBarIcon:({focused}) =>(
//                     <View 
//                      Style={{alignItems:'center',
//                       justifyContent: 'center',
//                       top:10,
//                       }}
//                     >
//                         <Image
//                         //  source={require('../assets/icons/home.png')}
//                             ResizeMode='contain'
//                             style={{
//                                 width:25,
//                                 height:25,
//                                 tintColor:focused? '#e32f45':'#748c94',
//                             }}

//                         />
//                         <Text 
//                             style={{color:focused? '#e32f45':'#748c94', fontSize:12}}
//                         > Join</Text>
//                     </View>
//                 ), }}
//             />
//            <Tab.Screen name="Login" 
//                 component={LoginScreen}
//                  options={{ tabBarIcon:({focused}) =>(
//                     <View 
//                      Style={{alignItems:'center',
//                       justifyContent: 'center',
//                       top:10,
//                       }}
//                     >
//                         <Image
//                         //  source={require('../assets/icons/home.png')}
//                             ResizeMode='contain'
//                             style={{
//                                 width:25,
//                                 height:25,
//                                 tintColor:focused? '#e32f45':'#748c94',
//                             }}

//                         />
//                         <Text 
//                             style={{color:focused? '#e32f45':'#748c94', fontSize:12}}
//                         > Login</Text>
//                     </View>
//                 ), }}
//            />
//            <Tab.Screen name="News" 
//                 component={NewsScreen} 
//                  options={{ tabBarIcon:({focused}) =>(
//                     <View 
//                      Style={{alignItems:'center',
//                       justifyContent: 'center',
//                       top:10,
//                       }}
//                     >
//                         <Image
//                         //  source={require('../assets/icons/home.png')}
//                             ResizeMode='contain'
//                             style={{
//                                 width:25,
//                                 height:25,
//                                 tintColor:focused? '#e32f45':'#748c94',
//                             }}

//                         />
//                         <Text 
//                             style={{color:focused? '#e32f45':'#748c94', fontSize:12}}
//                         > News</Text>
//                     </View>
//                 ), }}
//             />
//            <Tab.Screen name="Contacts" 
//                 component={MessageScreen} 
//                 options={{
//                     tabBarIcon: ({focused}) =>(
//                         <Image 
//                             // source={require('../assets/icons/home.png')}
//                             ResizeMode='contain'
//                             style={{
//                                 width:30,
//                                 height:30,
//                                 tintColor: '#fff',
//                             }}

//                         />
//                     )
//                     tabBarButtoon:(props) =>(
//                         <CustomTabBarButton {...props} />
//                     )
//                 }}
//             />
//          </Tab.Navigator>
//     )
// }

// const styles = StyleSheet.create({
//     shadow:{
//         shadowColor:'#7F5DF0'
//         shadowOffset: {
//             width:0,
//             height:10,
//         }
//         shadowOpacity:0.25,
//         shadowRadius:3.5,
//         elevation:5
//     }
// });
// export default Tabs;

