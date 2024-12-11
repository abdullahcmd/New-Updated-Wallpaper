import { registerRootComponent } from 'expo';
import 'expo-router/entry';
import { StatusBar } from 'react-native';
import LoginScreen from '../screen/main/Login';
import Navigation from '../navigation/navigation';
export default function Page() {
    return (
        <>
        <StatusBar barStyle="light-content" />
      <Navigation/>
      </>
    );
  }