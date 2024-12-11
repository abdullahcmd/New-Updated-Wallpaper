import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Touchable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
const Header = () => {
  return (
    
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>HomeScreen</Text>
        <MaterialIcons
          name="menu-open"
          size={44}
          color="black"
          style={styles.navIcon}
        />
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  headerContainer: {
    //flex : 1,
    // backgroundColor: 'black',
  },
  container: {
    //flex: 1,
    //backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: "25",
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    // alignContent: 'center',
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    //alignSelf:'center',
    paddingLeft: 5,
    // paddingTop:10
  },

  navIcon: {
    //backgroundColor:'red',
    justifyContent: "center",
    marginLeft: "auto",
  },FullBackground:{
    flex:1,
    backgroundColor:'#f5f5f5'
  }
});

export default Header;
