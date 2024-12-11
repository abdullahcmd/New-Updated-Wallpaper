import { StatusBar } from "expo-status-bar";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import 'expo-router/entry';
import Header from "./src/componenets/header/header";
import SearchBar from "./src/componenets/searchBar/searchBar";
import Categories from "./src/componenets/categories/Categories";
import Scroll from "./src/screen/main/HomeScrollView";
import LoginScreen from "./src/screen/main/Login";
import SignUpScreen from "./src/screen/main/SIgnUp";
const {width, height} = Dimensions.get('window');

export default function App() {
  return (
        <SignUpScreen/>
      
  );
}
  

const styles = StyleSheet.create({
  container: {
   flex: 1, 
   backgroundColor: 'red'
  },
  child: {
    width: width * 0.9,
    width: '90%',
    height: height * 0.5,
    backgroundColor: 'blue'
  }
});
