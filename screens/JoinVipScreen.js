import React, { useLayoutEffect } from 'react';
import { ListItem, Avatar } from "react-native-elements";
import {
    View,
    ScrollView,
      SafeAreaView, 
  StyleSheet,
  StatusBar,
  Image,
    Text
} from 'react-native';
 
const JoinVipScreen = ({ navigation }) => {
    
  useLayoutEffect(() => { 
    navigation.setOptions({
      title: "VIP TIPS",
      headerStyle: { backgroundColor: "#2C6EBD" },
      headerTitleStyle: { color: "white", justifyContent: "center" },
      headerTintColor: "white",
      headerBackTitle: "Freetips",
    });
    
  }, [navigation]);
     return (
        <SafeAreaView>
        <StatusBar styles="light" />
            <ScrollView styles={styles.container}>
                <ListItem  styles={styles.payment}>
                <ListItem.Content styles={styles.payment}> 
                    <ListItem.Title styles={styles.title}>
                        HOW TO JOIN VIP
                    </ListItem.Title>
                    <ListItem.Subtitle styles={styles.paragraph}>
                        To join our VIP you need to subscribe.
                    </ListItem.Subtitle>
                    <Text  styles={styles.paragraph}> 
                        At the moment we have three subscription plans. 
                        The weekly subscription, the monthly subscription 
                        and the three months plans. 
                        If you want to test the accuracy of our games
                        kindly refer to our free tips section in the homepage.
                    </Text>
                </ListItem.Content>
                </ListItem>
                <ListItem  styles={styles.payment} >
                <ListItem.Content styles={styles.payment}> 
                    <ListItem.Title styles={styles.title}>
                            PAY WITH MPESA KENYA
                    </ListItem.Title>
                    <View styles={styles.paragraph}>
                        <Text>  1. Go to MPESA </Text>
                        <Text>  2. Send Money</Text>
                        <Text>  3. Enter phone Number (0790301470)</Text>
                        <Text>  4. enter amount ksh (1 week @ 1000 or 1 month @2000)  </Text>
                        <Text>  5. then Mpesa Pin and confirm .</Text>
                    </View> 
                </ListItem.Content>
                </ListItem>
                <ListItem  styles={styles.payment} >
                <ListItem.Content styles={styles.payment}> 
                    <ListItem.Title styles={styles.title}>
                        HOW TO PAY WITH MPESA FROM TANZANIA
                    </ListItem.Title>
                        <View styles={styles.paragraph}>
                            <Text>
                            1.Dial *150*00# on your Vodacom line 
                            </Text>
                            <Text> 
                               2.Select “Send money to MPESA Kenya”
                            </Text>
                            <Text>
                            3.Enter NUMBER (+254 790 301 470)
                            </Text>
                            <Text> 
                            4.Enter AMOUNT (TSh25,500) for one week subscription
                                    or (TSh51,000) for one month subscription
                            </Text>
                            <Text> 
                            5.Enter PIN and Press 1 to confirm.
                            </Text>
                        
                    </View>
                    <Text  styles={styles.paragraph}>
                            
                    </Text>
                </ListItem.Content>
                </ListItem>
                <ListItem  styles={styles.payment} >
                <ListItem.Content styles={styles.payment}> 
                    <ListItem.Title styles={styles.title}>
                        HOW TO PAY WITH MPESA RWANDA
                    </ListItem.Title>
                        <View styles={styles.paragraph}>
                            <Text> 
                            1.Dial *830# to send money to Kenya from your MTN line. 
                            </Text>
                            <Text>
                            2.Follow the prompts to completes the transaction. 
                                
                            </Text>
                            <Text>

                            3.Subscription plan is 10,500 Rwandan Franc 
                                for one week or 21,000 Rwandan Franc for one month. 
                            </Text>
                            <Text>
                            Payments to be sent to this number(+254 790 301 470)
                            </Text>


                    </View>
                    <Text  styles={styles.paragraph}>
                            
                    </Text>
                </ListItem.Content>
                </ListItem>
                <ListItem  styles={styles.payment} >
                <ListItem.Content styles={styles.payment}> 
                    <ListItem.Title styles={styles.title}>
                        HOW TO PAY WITH MPESA UGANDA
                    </ListItem.Title>
                        <View styles={styles.paragraph}>
                            <Text>

                            1.Dial *165# to send money to Kenya from your MTN line.                            2.Follow the prompts to completes the transaction.<br/>
                            </Text>
                            <Text> 
                            3.Subscription plan is 40,000 Ugandan Shillings for one week
                                or 80,000 Ugandan Shillings for one month. 
                            </Text>
                            <Text> 
                            Payments to be sent to this number(+254 790 301 470)
                            </Text>
                    </View>
                    <Text  styles={styles.paragraph}>
                            
                    </Text>
                </ListItem.Content>
                </ListItem>
                
        </ScrollView>
            
        </SafeAreaView>
     )
 }
export default JoinVipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    },
    paragraph: {
        
    },
    tittle: {
        
    },

//   inputContainer: {
//     width: 300,
//   },
//   button: {
//     width: 200,
//     marginTop: 10,
//   },
//   selectImage: {
//     width: 310,
//     alignSelf: 'center',
//     borderRadius: 20,
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 25,
//     color: "white",
//     backgroundColor: '#FF6C6C',
//     borderColor: "transparent"
//   }
});

 