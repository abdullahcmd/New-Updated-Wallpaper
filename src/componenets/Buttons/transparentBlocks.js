import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const{height,width}=Dimensions.get('window')
const TransBlock = ({ iconName }) => {
  return (
  
    <LinearGradient
      colors={["#ffffff0d", "#ffffff52"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
  <TouchableOpacity>
      <MaterialCommunityIcons
        name={iconName}
        size={28}
        color="#ffffff"
        style={{ backgroundColor: "transparent" }}
      />
         </TouchableOpacity>
    </LinearGradient>
 
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    height: 50,
    //marginLeft: ,
    width: width*0.2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
  },
});

export default TransBlock;
