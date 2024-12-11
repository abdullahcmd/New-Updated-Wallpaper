import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeadngStyle from "../../componenets/Texts/HeadingText";
import ParaGraph from "../../componenets/Texts/paragraphText";
import { GlobalColors } from "../../utils/Global Fonts and Colours/globalColors";
import TextInputarea from "../../componenets/Texts/TextInput";
import SignUpButton from "../../componenets/Buttons/SignUpButton";
import TextDivider from "../../componenets/Texts/dividerText";
import TransBlock from "../../componenets/Buttons/transparentBlocks";
import { Formik } from "formik";
import { signupSchema } from "../../utils/schemas";
const{height,width}=Dimensions.get('window');
const SignUpScreen = ({navigation}) => {

  return (
   <Formik
   initialValues={{ emailAddress: '',firstName : '',password: '' }}
   onSubmit={()=>navigation.replace("Login")}
   
   validationSchema={signupSchema}
   >
    {({ handleChange, handleSubmit, values,errors }) => (
    <LinearGradient
      colors={[ "#000000","#34004E",]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView>
      <View style={styles.container}>
        <HeadngStyle Heading="Getting Started"/>
      </View>

      <View style={styles.textInputView}>
        <ParaGraph content="Email Address / UserName" style1={styles.heading2}/>
        <TextInputarea place={"yourname@gmail.com"} valueState={values.emailAddress} methodd={handleChange('emailAddress')}/>
        {errors.emailAddress && <Text style ={styles.errorTextStyle}>{errors.emailAddress}</Text>}
        <ParaGraph content="FirstName" style1={styles.heading2}/>
        <TextInputarea place={"yourname"}valueState={values.firstName} methodd={handleChange('firstName')}/>
        {errors.firstName && <Text style ={styles.errorTextStyle}>{errors.firstName}</Text>}
        <ParaGraph content="Password" style1={styles.heading2}/>
        <TextInputarea place={"Password"} valueState={values.password} methodd={handleChange('password')}/>
        {errors.password && <Text style ={styles.errorTextStyle}>{errors.password}</Text>}

        <ParaGraph
          content={"Forgot Password ?"}
          style1={styles.smallHeading}
        />
      </View>
      <SignUpButton buttonText={"Sign Up"} press={handleSubmit}/>
      <TextDivider/>
      <View style={styles.bottomTab}>
        <TransBlock iconName={"google"}/>
        <TransBlock iconName={"apple"}/>
        <TransBlock iconName={"facebook"}/>
      </View>
      <View style={styles.endHeight}/>
      </ScrollView>
      </LinearGradient>
    )}
      </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop:height*0.1
  },
  paragraph1: {
    fontSize: 14,
    color: GlobalColors.paraGraphColor,
    alignSelf: "center",
  },
  textInputView: {
    flexDirection: "column",
    marginTop: height*0.05,
  },
  heading2: {
    fontSize: 16,
    textAlign: "left",
    paddingLeft: width*0.05,
    marginTop: height*0.02,

    color: GlobalColors.paraGraphColor,
  },
  smallHeading: {
    textAlign: "right",
    marginRight: width*0.05,
    color: GlobalColors.paraGraphColor,
  },
  bottomTab: {
    gap:20,
    flexDirection: "row",
    alignSelf: "center",
    marginTop: height*0.04,
  },gradient: {
    flex: 1, 
   },errorTextStyle:{
    color:'red'
    ,marginLeft : width*0.07
   },endHeight:{
    height:height*0.2
   }
});

export default SignUpScreen;