import { Image, ScrollView, Dimensions } from 'react-native';
import { StyleSheet, View, Platform, StatusBar, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width } = Dimensions.get('window');

export const FormularioV2 = () => {
    return (

        <SafeAreaView style={styles.mainS}>
            <ScrollView>
                <Text style={styles.form}>Formulario De Jaczibeth </Text>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.cerrarButton}>
                        <Icon name="close" size={20} color={'#100f0fff'} />
                    </TouchableOpacity>
                    <Image source={{ uri: 'https://i.pinimg.com/originals/d5/ac/a0/d5aca0cd3681d4a0c0883644f19f1762.jpg ' }} style={styles.avatar} />
                    <Text style={styles.name}>Jaczibeth Cruz Ramirez</Text>
                    <View style={styles.infocontainer}>
                        <Text style={styles.label}> Carrera</Text>
                        <Text style={styles.info}>Ing en Sistemas Computacionales</Text>
                        <Text style={styles.label}> Semestre</Text>
                        <Text style={styles.info}>Septimo</Text>
                        <Text style={styles.label}> Especialidad</Text>
                        <Text style={styles.info}>Desarrollo de Software</Text>
                        <Text style={styles.label}> Correo</Text>
                        <Text style={styles.info}>jaczicruz@gmail.com</Text>
                        <Text style={styles.label}> Telefono</Text>
                        <Text style={styles.info}>9531257502</Text>
                        <Text style={styles.label}> Numero_control</Text>
                        <Text style={styles.info}>22620233</Text>
                        <TouchableOpacity style={styles.botonGIcon}>
                            <Icon name="save" size={20} color={'#fff'} style={styles.botonGico} />
                            <Text style={styles.textobotong}> Guardar Datos</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#d4edf7ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16
    },
    form: {
        fontFamily: 'georgia',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#c3d5faff',
        borderRadius: 15,
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 18,
        elevation: 5,
    },
    avatar: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#afe0f7ff',

    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: '#a4ccfaff',
        padding: 5,

    },
    infocontainer: {
        width: '100%',
        paddingBottom: 20,
    },
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10,
    },
    info: { fontSize: 16, marginBottom: 10, borderRadius: 15, backgroundColor: '#f5ebebff', padding: 10, fontWeight: 'bold', },
    textobotong: {
        color: '#18191bd4',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },

    botonGIcon: {
        backgroundColor: '#f0b2ceff',
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
    },
    botonGico: {
        marginRight: 10,
    },
    cerrarButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 6,
        alignItems: 'center',
        elevation: 2,
    },
});