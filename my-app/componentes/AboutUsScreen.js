import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function AboutUsScreen() {
  return (
    <ImageBackground 
      source={require('../assets/logo.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Quem somos?</Text>
        <Text style={styles.text}>Somos uma empresa que vem para ajudar a se divertir, 
          com as melhores playlist para ouvir.</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
