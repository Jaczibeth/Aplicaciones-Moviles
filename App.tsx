/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {  } from '@react-native/new-app-screen';
import { Image, SafeAreaView, StyleSheet, Text} from 'react-native';

function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Image style={{width:150,height:150, borderRadius:59}} source={{ uri: 'https://i.pinimg.com/originals/d5/ac/a0/d5aca0cd3681d4a0c0883644f19f1762.jpg ' }} /> 
      <Text style={styles.h1} >Bienvenidos</Text>
      <Text style={styles.h2} >Aplicaciones moviles</Text>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#77d0f6ff',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d0c0cff',
    fontFamily: 'georgia',
    borderRadius: 40,
    padding: 15,
   // backgroundColor: '#76a2d2ff',
  },
  h2: {fontSize: 14, fontWeight: 'bold',color: '#0d0c0cff',fontFamily: 'georgia',borderRadius: 40, padding: 15,// backgroundColor: '#76a2d2ff',
  },
});

export default App;
