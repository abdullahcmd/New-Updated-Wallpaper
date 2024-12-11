import Categories from "../../componenets/categories/Categories";
import LayoutImage from "../../componenets/imagesLayout/layout";
import Layout from "../../componenets/imagesLayout/layout";
import SearchBar from "../../componenets/searchBar/searchBar";
import React from "react";

import { View, Text, ScrollView, StyleSheet,Dimensions } from "react-native";
import Header from "../../componenets/header/header";
const {height, width} = Dimensions.get('window');
const Scroll = () => {
  return (
     <>
        <ScrollView>
        <Header/>
        <SearchBar/>
        <View style = {styles.container}>
        <Categories/>
        </View>
        <ScrollView>
          <LayoutImage />
          </ScrollView>
          </ScrollView>
          </>
  );
};

const styles = StyleSheet.create({
  container: {
    height : height*0.083,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Scroll;
