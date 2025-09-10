import { View, StyleSheet, Text, Image } from "react-native";
import CardImagen from "./CardImagen";  
export default function CardBasico() {

    return (
        
        <View style={Styles.card}>
             <Text  style={Styles.Titulo}>Pagina Principal</Text>
             <Text  style={Styles.Contenido}>  Hablemos acerca de los gatitos </Text>
        </View>
        


    );
}
const Styles = StyleSheet.create({ 
    card:{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor:'#000',
        elevation:4,
        shadowOpacity:0.5,
        shadowRadius:4,
        },
    Titulo:{
        fontSize:14,
        fontWeight:'bold',
    },
    Contenido:{
        marginTop:6,
        textAlign:'justify'

    },
});
