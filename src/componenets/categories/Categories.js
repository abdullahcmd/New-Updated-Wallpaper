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
const {height, width} = Dimensions.get('window');
const Categories = () => {
  const { activeCategory, setActiveCategory } = useState(null);

  const handleChangeCAtegory = (cat) => {
    setActiveCategory(cat);
  };


  return (
    <FlatList
      horizontal={true}
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
      data={data.categories}
      nestedScrollEnabled={true}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => <List title={item} />}
    />
  );
};

const List = ({ title }) => {
  return (
      <TouchableOpacity style={styles.singleCategory}>
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    backgroundColor:'black',
    alignItems: "center",
  },
  textStyle: {
    fontSize: 17,
    padding: 5,
  },
  flatListContainer: {
     //backgroundColor:'black',
    paddingVertical: 10,
   // height : '20%' ,
   //flex : 1,
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  singleCategory: {
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#595959",
    padding: 5,
  },
});

export default Categories;
