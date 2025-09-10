import { StyleSheet, View, Platform, StatusBar, Text, SafeAreaView,TextInput } from 'react-native';

export const Formulario = () => {
    return (
        <View style={styles.mainS}>
<Text style={styles.form}>Formulario De Jaczibeth </Text>
            <SafeAreaView style={styles.mainS}>
                <Text>Nombre:</Text>
                 <TextInput placeholder='Escribe tu nombre completo'/>
            </SafeAreaView>
        </View>
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
        marginTop: 16,
    }
});