import Categories from "../../componenets/categories/Categories";
import LayoutImage from "../../componenets/imagesLayout/layout";
import Layout from "../../componenets/imagesLayout/layout";
import SearchBar from "../../componenets/searchBar/searchBar";
import React, { useState,useEffect } from "react";

import { View, Text, ScrollView, StyleSheet,Dimensions } from "react-native";
import Header from "../../componenets/header/header";
const {height, width} = Dimensions.get('window');
const Scroll = () => {
  const [acctiveCat,setActiveCat]=useState(null);
  const handleChange = (cat) => {
      if (acctiveCat === cat) {
      setActiveCat(null);
    } else {
      setActiveCat(cat);
    }
  };
  useEffect(() => {
    if (acctiveCat) {
      console.log(`The active category is now: ${acctiveCat}`);
    } else {
      console.log("No category selected yet.");
    }
  }, [acctiveCat]);
  return (
   
      <ScrollView contentContainerStyle={styles.ScroolVieww} >
        <Header/>
        V
        <SearchBar/>
        <Categories isActive={acctiveCat} handleChange={handleChange} />
          <LayoutImage activeCategory={acctiveCat} />
      </ScrollView>
        
  );
};

const styles = StyleSheet.create({
 ScroolVieww: {
   gap : 10,
  },
});

export default Scroll;
