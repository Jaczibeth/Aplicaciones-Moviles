import React from 'react'
import { StyleSheet, Platform, StatusBar, View, Text } from 'react-native';


export const ListaAlumnos = () => {
    return (
        <View style={styles.mainS}>
            <Text>Hola soy Jaczibeth</Text>
        </View>     
    )
}
const styles = StyleSheet.create({
  mainS: {
        flex: 1,
        backgroundColor: '#d4edf7ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16
    },

});