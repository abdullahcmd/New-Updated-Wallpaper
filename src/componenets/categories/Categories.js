import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { data } from "../../utils/categoriesDta/Data";
import { categories } from "../../utils/categoriesDta/Data";
const {height, width} = Dimensions.get('window');
const Categories = ( {handleChange,isActive}) => {
  return (
    <FlatList
      horizontal={true}
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
      data={categories}
      nestedScrollEnabled={true}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => 
      <List
      isActive={isActive==item}
      handleChangeCategory={handleChange}
      title={item} />}
    />
  );
};

const List = ({ title,isActive,handleChangeCategory }) => {
  return (
      <TouchableOpacity onPress={()=>handleChangeCategory(title)} style={[
        styles.singleCategory,
        isActive && { backgroundColor:'#595959' }, // Highlight active category
      ]}>
        <Text  style={[
          styles.textStyle,
          isActive && {color: "white" },
        ]}>{title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
 
    justifyContent: "center",
    backgroundColor:'black',
    alignItems: "center"
  },
  textStyle: {
    fontSize: 17,
    padding:width*0.01,
    textAlign:'center',
  },
  flatListContainer: {
    paddingLeft:width*0.04,
    paddingRight:width*0.04,
    gap: 10,
  },
  singleCategory: {
    borderWidth: 3,
    backgroundColor:'white',
    borderRadius: 15,
  padding:width*0.01,
    borderColor: "#595959",
  },
});

export default Categories;
