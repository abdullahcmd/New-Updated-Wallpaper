import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MasonryList from "react-native-masonry-list";
import { apiCall } from "../../contants/API/imagesApi";

const LayoutImage = ({ activeCategory }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  useEffect(() => {
    if (activeCategory) {
      setImages([]);
      fetchImages({ category: activeCategory, page: 1 }); // Fetch category-based images
    } else {
      fetchImages({ category: "", page: 1 }); // Fetch default images (no category)
    }
  }, [activeCategory]); // Trigger this effect when the category changes

  // Fetch images from the API based on category or default
  const fetchImages = async (params = { page: 1, category: "" }) => {
    try {
      setLoading(true); // Start loading
      const res = await apiCall(params); // API call
      if (res.success) {
        const newImages = res.data.hits.map((item) => ({
          uri: item.webformatURL, // Image URL
          id: item.id, // Unique image identifier
        }));
        setImages(newImages); // Set images
      } else {
        console.log("Error:", res.msg);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); // Hide loading
    }
  };

  // Open modal with selected image
  const openModal = (imageUri) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>} {/* Loading text */}
      {!loading && images.length === 0 && <Text>No images found.</Text>} {/* Handle no images */}

      {/* Masonry List of Images */}
      <MasonryList
        images={images}
        imageContainerStyle={styles.imageContainer}
        onPressImage={(item) => openModal(item.uri)} // On image click, open modal
      />

      {/* Modal for Image Display */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={styles.selectedImage}
                resizeMode="contain"
              />
            )}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={closeModal} style={styles.button}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "80%",
  },
  selectedImage: {
    width: "100%",
    height: 400,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default LayoutImage;


