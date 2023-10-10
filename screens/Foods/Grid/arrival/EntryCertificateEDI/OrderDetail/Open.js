import React , {useState} from 'react';
import OrderInfoState from '../store/OrderInfoState';
import EDIContext from '../store/EDIContext';
import {OrderDetailScreenOpen} from './OrderDetailScreenOpen';
import {FormEDIScreen} from './FormEDIScreen'; 
import {SignFormScreen} from './SignFormScreen';
import {ChooseRedStampReasonScreen} from './ChooseRedStampReasonScreen';
import { Ionicons } from '@expo/vector-icons';
import {View ,Text, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import  data  from "../../../../../../data/Datas";
import { DocumentReview } from '../../DocumentReview';
import { gql } from "@apollo/client";



import { useQuery } from "@apollo/client";
import {EDI_ORDER_ITEMS_BY_NUMBER_QUERY } from '../../../../../../gql/Query'
import { HELLO_QUERY } from '../../../../../../gql/Query';

export const Open = ({route}) => {

  // const { data, loading, error } = useQuery(HELLO_QUERY, {
//   variables: {name: "Jacob"},
// });

  const {data, error, loading} =  useQuery(EDI_ORDER_ITEMS_BY_NUMBER_QUERY , {
    variables : {ediOrder : "651d2b6fbd737353eb2c50db"}
  });
  //console.log("variables" , useQuery.variables.ediOrder)
  console.log('EDI_ORDER_ITEMS_BY_NUMBER_QUERY data from open' , data)

  if (error) {
    console.error('EDI_ORDER_ITEMS_BY_NUMBER_QUERY error', error);
  }

   




    // const Stack = createNativeStackNavigator();

    // const ref = route.params.orderNumber;
    // const searchIcon = route.params.searchIcon;
    ///const initialRows = route.params.item.order_details.length;

    //const openState = OrderInfoState();
    //console.log('openState' , openState)
    //const openStateData = openState.data;
    //console.log('openStateData' , openStateData)

/// const openTab = data.filter((item )=>item.reference=== ref).map((item)=>  item.order_details
    // .filter((order)=>order.isOpen === 'true')).flat()

    

    

    //const closedData = data.filter((item )=>item.reference=== route.params.item.reference)


   
  

    
    //console.log('openState' , openState)

  ///const store = {...OrderInfoState() , ref , searchIcon , initialRows , openTab }
  //console.log('store' , store)
    //EDIContext
//  const [orderInfo, setOrderInfo] = useState({
//   data:data,
//   ref:route.params.item.reference,
//   searchIcon : route.params.searchIcon,
//   initialRows : route.params.item.order_details.length,
//   closedData : data.filter((item )=>item.reference=== route.params.item.reference)
//     });

   

   
  //    function setClosedData(updateClosedData) {
  //     const newState = { ...orderInfo, updateClosedData };
  //     setOrderInfo(newState);
  //      }


    // const EDIContextSetters = {
    // setData,
    // setClosedData
    // }

    return(
      <View style={styles.container}><Text style={styles.text}>{data.ediOrderItemsByNumber[0].code}</Text></View>
    )

//   return (
    
// <EDIContext.Provider value={store}>
// <Stack.Navigator >

//   <Stack.Group
//   screenOptions={({route , navigation}) => ({
//    headerShown:true,
//    headerTitleAlign: 'center',
//    headerStyle: {
//         backgroundColor: '#2F95D6',
//         borderBottomColor: '#fff',
//         borderBottomWidth: 3,
//       },
//       headerTintColor: '#fff',
//        headerTitleStyle: {
//         fontSize: 18,
//       },
     
//            headerLeft:()=>  <View style={{
//         flexDirection: "row",
//         padding: 1,
//         justifyContent: "space-between",
//         alignItems: "center" ,
//         }}>
     
//         <Ionicons  name="close-circle-outline" size={30} color="#fff"
//         onPress={()=>navigation.goBack()} />
//       </View>
//   })}
//   >
//   <Stack.Screen   name="OrderDetailScreenOpen" component={OrderDetailScreenOpen}/>
//   <Stack.Screen  name="FormEDIScreen" component={FormEDIScreen} />
//   <Stack.Screen   name="SignFormScreen" component={SignFormScreen} />
//   <Stack.Screen   name="ChooseRedStampReasonScreen" component={ChooseRedStampReasonScreen} />


//   </Stack.Group>
// </Stack.Navigator>
// </EDIContext.Provider>

//   )
}

const styles = StyleSheet.create({
   
    container: {
      flex: 1,
      //backgroundColor: "#7CA1B4",
      alignItems: "center",
      justifyContent: "center",
    },
   
    text: {
      color: "blue",
      fontSize: 25,
      fontWeight: "bold",
      
    },
   
   
  });




