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
                    <Image source= {{uri:'https://i.pinimg.com/originals/d5/ac/a0/d5aca0cd3681d4a0c0883644f19f1762.jpg '}}  style={styles.avatar} />
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
        borderRadius:15,
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 18,
        elevation: 5,
    },
    avatar: {
        width:width *0.35,
        height:width *0.35,
        borderRadius: (width *0.35) /2,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#95d5f3ff',

    },
});