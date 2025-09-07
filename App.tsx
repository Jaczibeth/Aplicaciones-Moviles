/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {  } from '@react-native/new-app-screen';
import { SafeAreaView, StyleSheet, Text} from 'react-native';


function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.holamundo} >Hola Mundo Jaczibeth</Text>
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
  holamundo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'georgia',
    borderRadius: 40,
    padding: 15,
    backgroundColor: '#76a2d2ff',
  },
});

export default App;
