import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const {height,width}=Dimensions.get('window');
const HeadngStyle = ({ Heading }) => {
  return <Text style={styles.headingStyle}> {Heading}</Text>;
};

const styles = StyleSheet.create({
 
  headingStyle: {
    fontWeight:'700',
    width : width,   
    textAlign: 'center',
    color: "#EFEFEF",
    fontSize: 36,
  },
});

export default HeadngStyle;
