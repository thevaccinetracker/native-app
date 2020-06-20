import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { StyleSheet, View,StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar
        backgroundColor="#040932"
        barStyle="light-content"
      />
      
      <Navbar/>

      <Homepage/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040932',
  },
  text : {
    color:'#fff',
  },
});
