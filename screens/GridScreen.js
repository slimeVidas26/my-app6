import React, { useState , useCallback, useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView,View,FlatList,Dimensions, StyleSheet,Text,StatusBar,Button,TouchableOpacity,TextInput,ActivityIndicator} from 'react-native';
import { translation } from "../i18n/supportedLanguages";
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import Constants from 'expo-constants';
import { Card } from '@rneui/themed';


import { useQuery } from "@apollo/client";
import { DEPARTMENTS_QUERY } from "../gql/Query";
const i18n = new I18n(translation)
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment line below to force app to use Japanese language.
// i18n.locale = 'ja';


// const Square = ({ text}) => (
//   <View >
//     <Text style={styles.text}>{text}</Text>
//   </View>
// );

const spacing = 5;
const width = (Dimensions.get('window').width - 2 * 10) / 2;

export  function GridScreen({navigation}) {

  const {data, error, loading} = useQuery(DEPARTMENTS_QUERY);
  console.log('data' , data)

  if (error) {
    console.error('DEPARTMENTS_QUERY error', error);
}

const DepartmentItem = ({ department}) => {
  const { title , id } = department; 
  console.log('title' , title , id)
return(
  <TouchableOpacity  onPress={() => navigation.navigate( i18n.t(title))}>
  <Card
      containerStyle={[styles.card, { height:140 }]}>
      <Text style={styles.text}>
      {i18n.t(title)}
      </Text>
    </Card>
    </TouchableOpacity>
 
)

};

 


  return (
    <View style={styles.container}>

    {loading && <Text>Loading...</Text>}
      {error && <Text>Check console for error logs</Text>}
      {!loading && !error && data && <FlatList
        data={data.departments}
        renderItem={({ item }) => (
          <DepartmentItem department={item} />)}
        //keyExtractor={(item, index) => index}
        keyExtractor = {(item) => item.id}
        //style={styles.container}
        numColumns={2}
        columnWrapperStyle={styles.column}
      />}

     
      
     

     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7CA1B4",
    flex: 1,
    //gap: '1rem',
    //flexWrap: "wrap",
    paddingTop: Constants.statusBarHeight/2,
    flexDirection: 'column',  
  },
  column: {
    flexShrink: 1,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    borderColor: "#fff",
    borderWidth: 1,
    width: "45%",
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    margin: spacing,
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    
  },
  icon: {
    position: 'absolute',
    right: 15,
    top:20,
    //display:'none'
  },
  number: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
  },
  
    card: {
      width: width,
      margin: spacing,
      // borderColor: "#fff",
      // borderWidth: 1,
      // width: "45%",
      // // height: 140,
       justifyContent: "center",
       alignItems: "center",
    },
  
    item: {
      // backgroundColor: '#f9c2ff',
      borderColor: "#fff",
      borderWidth: 1,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  
});