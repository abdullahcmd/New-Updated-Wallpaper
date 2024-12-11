import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { GlobalColors } from "../../utils/Global Fonts and Colours/globalColors";
import TextInput from "react-native-text-input-interactive";

import {MaterialIcons } from "@expo/vector-icons"; 

const TextInputarea = ({place,valueState,methodd}) => {


  return (
   
    <TextInput style={StyleSheet.flatten([styles.TextInput])}
    placeholder={place}   
    value={valueState}
    onChangeText={methodd}
    enableIcon={false} mainColor="purple" IconComponent={(props) => (<MaterialIcons name="person" size={24} color="black"  />)} 
   iconContainerStyle={styles.iconStyle} />
  );
};


const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
    },
    height: {
      height: 150,
    },
    paragraph1: {
      fontSize: 14,
      color: GlobalColors.paraGraphColor,
      alignSelf: "center",
    },
    textInputView: {
      flexDirection: "column",
      //backgroundColor : GlobalColors.paraGraphColor,
      marginTop: 50
    },
    heading2: {
      fontSize: 16,
      textAlign :'left',
      paddingLeft: 30,
     // backgroundColor: 'white',
      color: GlobalColors.paraGraphColor,
    },TextInput:{
      
      padding : 5,
      //margin : 15,
      marginTop:0,
      justifyContent : 'center',
    }, icon: {
      marginHorizontal: 8, // Space around the icon
    },iconStyle:{
          backgroundColor : '#c9c9c952',
          padding:3,
  
    },
  innerPart:{
      backgroundColor : 'black',
  }
  });

export default TextInputarea;