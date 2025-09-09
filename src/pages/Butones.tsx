import {  Text, View, StyleSheet, Platform, StatusBar} from 'react-native';

export default function Botones() {
  return (
    <View style={styles.mainS}>  
        <Text >Botones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#91d9f8ff',
    paddingTop:Platform.OS === 'android' ?  StatusBar.currentHeight:44, 
    padding:16

  }
  
});
