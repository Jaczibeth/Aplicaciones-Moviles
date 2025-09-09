import { View, StyleSheet, Text, Image } from "react-native";

export default function CardBasico() {

    return (
        
        <View style={Styles.card}>
             <Text  style={Styles.Titulo}>Mi animal Favorito</Text>
             <Text  style={Styles.Contenido}> Los gatitos son animales tiernos, curiosos y 
                muy juguetones, capaces de alegrar cualquier hogar con su presencia. Desde pequeños 
                muestran una gran energía y una enorme curiosidad por explorar todo lo que los rodea, 
                pero también disfrutan de momentos tranquilos acurrucados junto a sus dueños. Además 
                de su carácter cariñoso, son muy inteligentes y aprenden rápido a adaptarse a distintos
                 ambientes. Tener un gatito como compañero no solo brinda compañía, sino también amor
                  incondicional y momentos llenos de diversión. </Text>
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
