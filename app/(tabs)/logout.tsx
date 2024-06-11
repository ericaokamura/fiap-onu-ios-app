import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function LogoutScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')} 
        style={{width: 50, height: 50, paddingVertical: 50}}
      />
      <Text style={styles.body}>Home</Text>
    </View>
   
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  body: {

  }
});