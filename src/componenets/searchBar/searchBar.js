import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <View styles={styles.searchIcon}>
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <TextInput
        placeholder="Type something to search"
        style={styles.textInput}
      ></TextInput>

      <TouchableOpacity styles={styles.searchIcon}>
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    // padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    //backgroundColor:'red',
    borderRadius: 10,
    backgroundColor: "#fcfcfc",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 15,
  },
  scroollView: {
    backgroundColor: "blaack",
  },
});

export default SearchBar;
