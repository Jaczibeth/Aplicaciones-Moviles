import { View, StyleSheet, Text, Image } from "react-native";

export default function CardImagen() {

    return (
        
        <View style={Styles.card}>
             <Image  style={Styles.img} source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png'  }} />
             <Text  style={Styles.Titulo}>Mi animal Favorito</Text>
             <Text  style={Styles.Contenido}> Los gatitos son animales tiernos </Text>
               
        </View>
        


    );
}
const Styles = StyleSheet.create({ 
    card:{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        shadowColor:'#000',
        elevation:12,
        shadowOpacity:0.5,
        shadowRadius:10,
        marginTop:16
        },
    Titulo:{
        marginTop:5,
        fontSize:14 ,
        fontWeight:'bold',
    },
    Contenido:{
        marginTop:6,
        textAlign:'justify',
    },
    img:{
        width:100,
        height:150,
        alignSelf:'center',
        borderRadius:15,
        marginBottom:8,
    }
});
