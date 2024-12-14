import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/main/Login';
import SignUpScreen from '../screen/main/SIgnUp';
import Scroll from '../screen/main/HomeScrollView';
import ImageCard from '../screen/main/imageDisplay';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
   <Stack.Navigator initialRouteName="SignUp">
    <Stack.Screen name = "SignUp" component = {SignUpScreen
    } options={{ headerShown: false }}/>
    <Stack.Screen name = "Login" component = {LoginScreen} options={{ headerShown: false }}/>
    <Stack.Screen name = "Home" component = {Scroll} options={{ headerShown: false }}/>
    <Stack.Screen name = "Transparent Image" component = {ImageCard} 
    options={{ headerShown: false, presentation:'transparentModal', animation:'fade' }}/>
   </Stack.Navigator>
  );
};

