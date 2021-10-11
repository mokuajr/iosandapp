import React from 'react';
import { ListItem, Avatar } from "react-native-elements";
import {
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const Screenshot = () => {
    return (
        <View>
            <Avatar
                rounded
                //source={{ }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                 send us confirmation message to get login details
                </ListItem.Title>
                <ListItem.Subtitle >
                     whatsApp/Telegram/Text on 0790 301 470 or
                        Email: kevinmokuajr@gmail.com
                </ListItem.Subtitle>
            </ListItem.Content> 
        </View>
    )
}

export default Screenshot
