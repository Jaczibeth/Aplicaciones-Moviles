import { StyleSheet, View, Platform, StatusBar, Text, SafeAreaView,TextInput } from 'react-native';
export const Formulario = () => {
    return (
        <View style={styles.mainS}>
<Text style={styles.form}>Formulario De Jaczibeth </Text>
            <SafeAreaView style={styles.mainS}>
                <Text style={styles.label}>Nombre:</Text>
                 <TextInput style={styles.input1} placeholder='Escribe tu nombre completo'/>
                  <Text style={styles.label}>Descripcion:</Text>
                 <TextInput multiline={true} numberOfLines={4} style={[styles.input1,styles.textarea]} placeholder='Describe que esperas de la materia de app moviles'/>
                 <Text style={styles.label}>Correo Electronico:</Text>
                 <TextInput style={styles.input1} placeholder='Ingresa tu correo ' keyboardType='email-address' />
                 <Text style={styles.label}>Contraseña:</Text>
                 <TextInput style={styles.input1} placeholder='************** ' secureTextEntry />
                 <Text style={styles.label}>Telefono:</Text>
                 <TextInput style={styles.input1} placeholder='9532754149 ' keyboardType='numeric' />
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
        marginTop: 10,
    },
    input1: {
        borderWidth: 1,
        fontWeight: 'bold',
        borderColor: '#92c3ffff',
        borderRadius: 10,
        backgroundColor:'#fff'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    textarea: {
        height: 100,
        fontWeight: 'bold',
        textAlignVertical: 'top',
    }
});