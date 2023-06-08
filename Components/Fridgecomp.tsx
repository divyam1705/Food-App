import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Fridgecomp() {
  return (
    <View style={{width:35,marginHorizontal:2}}>
    <View style={{flex:1,
    alignItems:"center",
    justifyContent:"center"}}>
        <Image style={{width:12,height:20}} source={require('../Icons/fridge.jpg')}  />
        <Text style={{fontSize:6,color:"grey"}}>Refrigerator</Text>
    </View>
    </View>
  )
}