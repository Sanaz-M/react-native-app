import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { useState} from 'react'

export default function App() {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16 }}>My first <Text style={{ fontWeight: 'bold' }}>native app
      </Text> with React Native</Text>
      <StatusBar style="auto" />
      <ScrollView horizontal>
      <Image
        style={styles.image}
        source={
          require('./assets/test.png')}
      />
      <Image
        style={styles.image}
        source={
          require('./assets/test.png')}
      />
      <Image
        style={styles.image}
        source={
          require('./assets/test.png')}
      />
      <Image
        style={styles.image}
        source={
          require('./assets/test.png')}
      />
      <Image
        style={styles.image}
        source={
          require('./assets/test.png')}
      />

      <Image
        style={styles.image}
        source={
          require('./assets/test.png')}
      />
      </ScrollView>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount+1)}
        disabled = {pressedCount >= 3}
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
    padding: 15
  },

  image: {
    width: 300,
    height: 300,
    margin: 40,
  }
});
