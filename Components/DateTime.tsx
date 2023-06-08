import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class DateTime extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
            <View style={styles.subcont}>
            <Image source={require('../Icons/date.jpg')} style={styles.image} />
            <Text style={styles.txt}>21 May 2023</Text>
            </View>
            <View style={styles.subcont}>
            <Image source={require('../Icons/time.jpg')} style={styles.image} />
            <Text style={styles.txt}>10:30 Pm-12:30 Pm</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:"white",
        elevation:10,
        height:75,
        width:"80%",
        borderRadius:15,
        position:"absolute",
        bottom:12,
        alignSelf:"center"
    },
    container:{
        width:"100%",
        height:"100%",
        paddingVertical:20,
        paddingHorizontal:10,
       flex:1,
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"space-between"
    },
    txt:{
        color:"black",
        fontWeight:"bold"
    },
    image:{
      height:17,
      width:16
    },
    subcont:{
      flex:1,
      flexDirection:"row",
      gap:8,
      alignItems:"center",
    }
})