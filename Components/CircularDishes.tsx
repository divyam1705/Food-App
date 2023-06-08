import { Text, StyleSheet, View ,ImageBackground} from 'react-native'
import React, { Component } from 'react'

export default  CircularDishes=(props) =>{
    // console.log(props);
    return (
      <View style={styles.container}>
         <ImageBackground
         imageStyle={styles.foodimg}
      source={{
        uri:props.dish.image
      }} // Replace with the actual path to your image
    >
        <View style={styles.backbase}>
        <Text style={{
            textAlign:"center",
            fontSize:12,
            fontWeight:"bold",
            color:"white",
            marginTop:20
            // backgroundColor:"red"
        }}>
            {props.dish.name}
        </Text>
        </View>
    </ImageBackground>
      </View>
    )
  
}

const styles = StyleSheet.create({
container:{
    height:65,
    width:65,
    borderRadius:50,
    borderWidth:1,
    borderColor:"orange",
    marginHorizontal:5,
    paddingHorizontal:0.69,
    paddingVertical:0.63
    // backgroundColor:"red"
},
foodimg:{
  height:62,
  width:62,
  borderRadius:50,
  
},
backbase:{
    height:62,
  width:62,
  borderRadius:50,
backgroundColor: "rgba(0, 0, 0, 0.35)",

}
})