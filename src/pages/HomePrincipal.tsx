import {  Text, View, StyleSheet, Platform, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardBasico from '../components/CardBasico';
import CardImagen from '../components/CardImagen';
import CardV2 from '../components/CardV2';
export default function HomePrincipal() {
  return (
    <View style={styles.mainS}>  
        <Text style={styles.title}>Pagina Principal</Text>
     <CardBasico/>
     <CardImagen/>
     <CardV2/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#91d9f8ff',
    paddingTop:Platform.OS === 'android' ?  StatusBar.currentHeight:44, 
    padding:16
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:16
  },

});
