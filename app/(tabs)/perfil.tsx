import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={{width: 70, height: 70}}
        />
      </View>
      <View style={styles.body}>
        <Text>Meu Perfil</Text>
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 60,
    backgroundColor: '#3CA6A6',
    height: 100,
  },
  menuBar: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  body: {
    marginVertical: 200,
  }
});
