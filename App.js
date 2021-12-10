import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16 }}>My first <Text style={{ fontWeight: 'bold' }}>native app 
      </Text> with React Native</Text>
      <StatusBar style="auto" />
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={
          require('./assets/test.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
  },
});
