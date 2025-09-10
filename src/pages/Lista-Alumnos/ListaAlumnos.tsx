import React from 'react'
import { StyleSheet, Platform, StatusBar, View, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export const ListaAlumnos = () => {
    return (
        <SafeAreaView style={styles.mainS}>
            {/* Inicio de AppBar  */}
            <View style={styles.appBar}>
                <Icon name='arrow-left' size={20} color={'#000000ff'} />
                <Text style={styles.appBarTitle}>Lista de usuarios</Text>
                <View style={{ width: 20 }}></View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#f3e5f7f5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        // padding: 16
    },
    appBar: {
        height: 50,
        backgroundColor: '#bed6f2ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        width: ' 100%',


    },
    appBarTitle: {
        fontSize: 16,
        fontWeight: 'bold',

    },


});