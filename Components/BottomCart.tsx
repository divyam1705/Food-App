import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const BottomCart = () => {
    return (

        <View style={styles.container}>
            <View style={styles.rightCont}>
            <Image source={require('../Icons/cartgrp.png')} style={styles.image} />
            <Text style={styles.text}>3 food items selected</Text>
            </View>
            <TouchableOpacity style={styles.arrowbtn}>
                <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'black',
        borderRadius: 10,
        width: 270,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: "center",
        elevation:15,
        shadowColor:"black"
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: "400",
    },
    image: {
        width: 20, 
    height: 20,
    marginRight:10
    },
    rightCont:{
        // width:100,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    arrowbtn:{
        paddingHorizontal:10
        ,
        paddingBottom:10
    },
    arrow:{
        color:"white",
        fontSize:30
    }
});
export default BottomCart