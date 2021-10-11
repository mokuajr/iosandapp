import React, { useState, useLayoutEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";
import * as ImagePicker from 'expo-image-picker';

const MessageScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("https://censur.es/wp-content/uploads/2019/03/default-avatar.png");
    const [phone, setPhone] = useState(''); 
    const [country, setCountry] = useState(''); 


  const sendmessage = () => {
      db.collection("contacts").add({
          name: name,
          country: country,
          phone: phone,
          email: email, 
          message: message,
          timestamp:timestamp
      })
      setEmail('');
      setCountry('');
      setName('');
      setPhone('');
      setMessage('');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Freetips",
    });
  }, [navigation]);

   //photoURL: image,

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      
    }
  };


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h2 style={{ marginTop: 20, fontSize: 24 }}>
        Send us message and we will revert back to you through email/whatsapp
      </Text>
      <Image 
        // source={{
        //   uri:
        //     "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        // }}
       // style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="how can we help you" 
          type="text"
          value={message}
          multiline={true} numberOfLines={3}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.selectImage} onPress={selectImage}>
          <Text style={{ color: "white", alignSelf: "center" }}>Select picture from gallery (optional)</Text>
        </TouchableOpacity>
      </View>
      <Button containerStyle={styles.button} title="Register"   />
      <Button
        onPress={() => navigation.navigate("Login")}
        containerStyle={styles.button}
        title="Login"
        type="outline"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  selectImage: {
    width: 310,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    marginBottom: 25,
    color: "white",
    backgroundColor: '#FF6C6C',
    borderColor: "transparent"
  }
});
