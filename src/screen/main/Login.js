import React, { useState,useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import HeadngStyle from "../../componenets/Texts/HeadingText";
import ParaGraph from "../../componenets/Texts/paragraphText";
import { GlobalColors } from "../../utils/Global Fonts and Colours/globalColors";
import TextInputarea from "../../componenets/Texts/TextInput";
import SignUpButton from "../../componenets/Buttons/SignUpButton";
import TextDivider from "../../componenets/Texts/dividerText";
import TransBlock from "../../componenets/Buttons/transparentBlocks";

import { Formik } from "formik";

import userschema from "../../utils/schemas";
import authentication from "../../utils/authentication/authorization";
const {height,width}= Dimensions.get('window');
const LoginScreen = ({navigation}) => {
    useEffect(() => {
      console.log('user state check');
    }, []); 
  return (
    <Formik
      initialValues={{ username: '',password: '' }}
      onSubmit={()=>navigation.replace("Home")}
      validationSchema={userschema}
>
{({ handleChange, handleSubmit, values,errors }) => (
    <LinearGradient
      colors={[ "#000000","#34004E",]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
<ScrollView style = {styles.height} scrollEnabled= {true}>
      <View style={styles.container}>
        <HeadngStyle Heading="Welcome Back" />
        <ParaGraph
          content="Welcome Back We Missed You"
          style1={styles.paragraph1}
        />
      </View>
   
      <View style={styles.textInputView}>
        <ParaGraph content="UserName" style1={styles.heading2}/>
        <TextInputarea place={"Username"} valueState={values.username} methodd={handleChange('username')}/>
        {errors.username && <Text style ={styles.errorTextStyle}>{errors.username}</Text>}
        <ParaGraph content="Password" style1={styles.heading2}/>
        <TextInputarea place={'Password'} valueState={values.password} methodd={handleChange('password')}/>
        {errors.password && <Text style ={styles.errorTextStyle}>{errors.password}</Text>}
       
      </View>
      
      <SignUpButton buttonText={"Sign Up"} press={handleSubmit}/>
     
      <TextDivider/>
      <View style={styles.bottomTab}>
        <TransBlock iconName={"google"}/>
        <TransBlock iconName={"apple"}/>
        <TransBlock iconName={"facebook"}/>
      </View>
    
      </ScrollView>
      </LinearGradient>
      )}
      </Formik>

  );
};

const styles = StyleSheet.create({

  scrollView:{
    backgroundColor : 'black',
    alignContent: 'center'
  },
  container: {
    flexDirection: "column",
  },
  height: {
    alignContent: 'center'
   ,
    marginTop:height *0.1
  },
  paragraph1: {
    fontSize: 13.5,
    paddingLeft:width*0.04,
   width:width,
    color: GlobalColors.paraGraphColor,
    textAlign:'center',
  },
  textInputView: {
    flexDirection: "column",
    marginTop: 50,
  },
  heading2: {
    fontSize: 16,
    textAlign: "left",
    paddingLeft: 30,
    marginTop: 10,
    color: GlobalColors.paraGraphColor,
  },
  smallHeading: {
    textAlign: "right",
    marginRight: 40,
    marginTop: 0,
    color: GlobalColors.paraGraphColor,
  },
  bottomTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  gradient: {
    flex: 1, 
  
   },errorTextStyle:{
    color:'red'
    ,marginLeft : width*0.07
   }
});

export default LoginScreen;
