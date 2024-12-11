import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MasonryList from "react-native-masonry-list";
import { apiCall } from "../../contants/API/imagesApi";

const LayoutImage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (params = { page: 1 }) => {
    try {
      const res = await apiCall(params);
      const newImages = res.data?.hits.map((item) => ({
        uri: item.webformatURL, // Image URL
        id: item.id,           // Unique identifier
      }));
      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MasonryList
        images={images}
        //spacing={5}
        imageContainerStyle={styles.imageContainer}
        backgroundColor="white"
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    borderWidth: 2, // Border for each image
    borderColor: "#d1d5db", // Subtle gray border
    borderRadius: 10, // Rounded corners
    overflow: "hidden", // Ensure image fits within border
    shadowColor: "#000", // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
});

export default LayoutImage;


