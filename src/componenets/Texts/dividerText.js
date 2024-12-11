import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ParaGraph from './paragraphText';
import { GlobalColors } from '../../utils/Global Fonts and Colours/globalColors';
import { LinearGradient } from 'expo-linear-gradient';

const TextDivider = () => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#D9D9D9','#D9D9D9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{width:70, height:2,marginRight:10}}
        ></LinearGradient>
      <ParaGraph content={" Or continue with "} style1={styles.text}></ParaGraph>
      <LinearGradient colors={['#D9D9D9','#D9D9D9']}
        style={{width:70, height:2,marginLeft:10}}
        ></LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginTop:15,
    justifyContent: 'center',
    alignItems: 'center',
  },text:{
    color:GlobalColors.paraGraphColor,
    fontSize:12,
  }
});

export default TextDivider;