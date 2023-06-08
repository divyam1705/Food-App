import { Text, View,ScrollView,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { ClipPath } from 'react-native-svg';
import CircularDishes from './CircularDishes';

const Popular=(props)=>{
    // console.log(props);
    return (
        <View style={styles.container}>
        <View>
            <Text style={{color:"black",
        fontWeight:"bold",
        fontSize:18,
        paddingBottom:15}}>
                Popular Dishes
            </Text>
        </View>
      <ScrollView horizontal>
        {props.data.map(
            (dish)=>(<CircularDishes
                key={dish.key}
                dish={dish}/>)
        )}
        {props.data.map(
            (dish)=>(<CircularDishes
                key={dish.key}
                dish={dish}/>)
        )}
      </ScrollView>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:15,
        paddingBottom:20
    }
  });
  export default Popular