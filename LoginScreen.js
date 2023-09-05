 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button ,Image,
  TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import { translation } from './i18n/supportedLanguages';


import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';


// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n(translation);

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
 //i18n.locale = 'he';



 export const LoginScreen = ({navigation})=> {
  
  const [email, setEmail] = useState("toto");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#d6ccab"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#d6ccab"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
     
 
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.navigate('Warehouses')}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    backgroundColor: "#1f1400",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
  },
  text:{
    fontSize:20
  }
 
});
