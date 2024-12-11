import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const {height,width}= Dimensions.get('window');
const SignUpButton = ({buttonText,press}) => {
  return (
    <LinearGradient
      colors={["#9C3FE4", "#C65647"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <TouchableOpacity style={styles.Button} onPress={press}>
        <Text style={styles.Text}>{buttonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    marginTop: 30,
    width: width*0.9,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  Button: {},
  Text: {
    fontSize:18,
    color: "white",
    textAlign: "center",
  },
});

export default SignUpButton;
