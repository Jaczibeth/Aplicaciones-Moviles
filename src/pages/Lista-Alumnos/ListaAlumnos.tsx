import React from 'react'
import { StyleSheet, Platform, StatusBar, View, Text, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('window');
export const ListaAlumnos = () => {
    return (
        <SafeAreaView style={styles.mainS}>
            {/* Inicio de AppBar  */}
            <View style={styles.appBar}>
                <Icon name='arrow-left' size={20} color={'#000000ff'} />
                <Text style={styles.appBarTitle}>Lista de usuarios</Text>
                <View style={{ width: 20 }}></View>
            </View>
            {/* Cierre de AppBar */}
            {/* inicio de contenido de lista  alumnos */}
            <ScrollView >
                <Text style={styles.sectionTitle}>Lista de alumnos</Text>
                <View style={styles.card} >
                    <Image source={{ uri: 'https://i.pinimg.com/originals/d5/ac/a0/d5aca0cd3681d4a0c0883644f19f1762.jpg ' }} style={styles.avatar} />
                    <View style={styles.cardInfo}>
                        <Text style={styles.userName}>Jaczibeth Cruz Ramirez</Text>
                        <Text style={styles.userDetails}>Ingenieria En Sistemas Computacionales</Text>
                    </View>
                </View>
            </ScrollView>
            {/* final de contenido lista alumnos */} 
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
    sectionTitle: {

        padding:10,
        fontSize: 13,
        fontWeight: 'bold',
    },
    avatar: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#afe0f7ff',

    },
    card: {

    },
    cardInfo: {

    },

    userName: {
        padding:10
    },
    userDetails: {
        padding:10
    },

});