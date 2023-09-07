import { StyleSheet, Text, View , Button ,Image,
    TextInput,TouchableOpacity, ScrollView } from 'react-native';
    import { StatusBar } from 'expo-status-bar';
// import { gql, useQuery } from '@apollo/client';
// import {Text} from 'react-native'

// const HELLO_QUERY = gql`
// query Query {
//   hello
// }
// `;

// const HELLO_QUERY = gql`
//     query Query($firstName: String , $lastName : String) {
//         hello(firstName: $firstName , lastName : $lastName)
//     }
// `;

import { translation } from '../i18n/supportedLanguages';
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

 //client.httpCache.clearAll()

export const HomeScreen = ({navigation})=>{

    //   console.log('OrderInfoContext' , OrderInfoContext)
    //  console.log('OrderInfoState' , OrderInfoState())
      return (
        
        <View style={styles.container}>
        <Text style={styles.text}>
            {i18n.t('welcome')} {i18n.t('name')}
          </Text>
          <Text style={styles.text}>Current locale: {i18n.locale}</Text>
          <Text style={styles.text}>Device locale: {Localization.locale}</Text>
          <StatusBar style="auto" />
          <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
          />
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

// export const HelloScreen = ()=> {
//     //const { data, loading, error } = useQuery(HELLO_QUERY);

//     const { data, loading, error } = useQuery(HELLO_QUERY, {
//         variables: {firstName: "Jacob" , lastName : "Dahan"},
//     });

//     if (loading) return <Text>Loading...</Text>;
//     if (error) {
//         console.error('HELLO_QUERY error', error);
//     }

//     return <Text>
//         {loading && 'Loading...'}
//         {error && 'Error (check console logs)'}
//         {!loading && !error && data?.hello}
//     </Text>;
// }