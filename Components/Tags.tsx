import { View, Text,ScrollView,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'


const Tag=({name})=>{
    
    const [activecol, setactivecol] = useState("grey")
    return (
        <TouchableOpacity style={[styles.tagbutt,{borderColor:activecol}]} onPress={()=>{
            if(activecol==="grey")setactivecol("orange")
            else{setactivecol("grey")}
        }}>
            <Text style={[styles.tagtxt,{color:activecol}]}>
                {name}
            </Text>
        </TouchableOpacity>
    );
}

export default function Tags() {

  return (
    <View style={styles.container}>
    <ScrollView horizontal>
         <Tag name="Indian"/>
         <Tag name="Italian"/>
         <Tag name="Chinesse"/>
         <Tag name="American"/>
         <Tag name="Indian"/>
         <Tag name="Italian"/>
         <Tag name="Chinesse"/>
         <Tag name="American"/>
    </ScrollView>
    </View>
  )
}
 const styles=StyleSheet.create({
    container:{
        marginVertical:10,
        paddingHorizontal:15,
        height:30
    },
     tagbutt:{
        // backgroundColor:"red",
        marginHorizontal:8,
        width:75,
        height:25,
        borderWidth:1,
        borderRadius:20,
        borderColor:"orange"
     },
     tagtxt:{
        color:"orange",
        fontWeight:"bold",
        fontSize:11,
        textAlign:"center",
        marginTop:3
     }
 });
