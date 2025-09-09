import {  Text, View, StyleSheet, Platform, StatusBar, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
export default function Botones() {
  return (
    <View style={styles.mainS}>  
        <Text style={styles.h1} >Botones</Text>
        {/* Boton 1*/}
        <TouchableOpacity style={styles.botonbasico}>
            <Text style={styles.text}> Boton 1</Text>
        </TouchableOpacity>
         {/* Boton con icono*/}
        <TouchableOpacity style={styles.botonIcono}>
            <Icon name="person"  size={20} style={styles.iconB}/>
            <Text style={styles.text}> Boton Icono </Text>
        </TouchableOpacity>

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
h1: {fontSize: 20,
    color: '#0d0c0cff',
    fontFamily: 'georgia',
},
botonbasico: {
    backgroundColor: '#c5e6f4ff',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    marginBottom:10
},

text:{
    fontFamily:'georgia',
    color:'#0d0c0cff',
    fontWeight:'bold',
    textAlign:'center',
    },
    botonIcono: {
    backgroundColor: '#c5e6f4ff',
    fontSize: 30,
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
iconB: {
    color: '#861889ff',
}
});
