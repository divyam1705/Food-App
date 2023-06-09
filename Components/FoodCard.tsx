import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Fridgecomp from './Fridgecomp';
const Ingred = ({navigation}) => {
  // if(navigation===undefined){return;}
  // console.log("ingred");
  // console.log(navigation);
  return (
    // <TouchableOpacity 
    // onPress={() =>{ navigation.navigate('Details')}}>

    <View style={{
      marginLeft: 20,
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-start"
    }}>
      <Text style={{
        fontWeight: "bold", color: "black",
        fontSize: 9
      }}>Ingredients</Text>
      
      <Text style={{
        color: "orange",
        fontSize: 7
      }}>View list</Text>
      
    </View>
    // </TouchableOpacity>
    
  );
}
const FoodCard = (props) => {
  // console.log(props.navigation);
  return (
    <View style={styles.container}>

      <View style={styles.subcontanier}>
        <View style={styles.leftCont}>

          <View style={styles.detailscont}>
            <View style={styles.foodheadwrap}>
              <View style={styles.foodhead}>
                <Text style={[styles.foodTxt]}>{props.dish.name}</Text>
                <View style={styles.ratingbtn}>
                  <Text style={{ color: "white", fontSize: 10, textAlign: "center" }}>{props.dish.rating} &#x2605; Star</Text>
                </View>
              </View>
            </View>
            <View style={styles.foodheadwrap}>
              <View style={[styles.foodhead]}>
                {/* <Text style={styles.foodTxt}>Masala Muglai</Text> */}
                <Fridgecomp />
                <Fridgecomp />
                <Ingred 
                navigation={props.navigation}
                />
              </View>
            </View>
            <View >
              <Text style={styles.desctxt}>
              {props.dish.description}
              </Text>

            </View>
          </View>
        </View>
        <View style={styles.rightwrap}>
          <View style={styles.rightCont}>
            <Image source={
              {
                uri: props.dish.image
              }
            }
              style={styles.foodimg} />
            <TouchableOpacity style={styles.addbtn}>
              <Text style={{ color: "orange", fontWeight: "bold", textAlign: "center" }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    width: "100%",
    height: 150,
    // backgroundColor: "red",
    padding: 10
  },
  rightwrap: {
    width: 135
  },
  subcontanier: {
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,

  },
  ratingbtn: {
    borderRadius: 5,
    backgroundColor: "#51C452",
    height: 16,
    width: 33,
    marginHorizontal: 5,
    paddingVertical:1,

  },

  detailscont: {
    // flex:1,
    height: "100%",
    width: "100%",
    paddingVertical: 8
    // backgroundColor: "green"

  },
  desctxt: {
    color: "grey",
    fontSize: 11,
    paddingVertical: 5
  },
  foodhead: {
    flex: 1,
    flexDirection: "row",
    gap: 2,
    alignItems: "center"
    // backgroundColor:"orange"

  },
  foodTxt: {
    color: "black",
    fontSize: 17
  },
  foodheadwrap: {
    height: 30,
    width: "100%",
    marginVertical: 2
  },
  foodimg: {
    height: 100,
    width: 140,
    borderRadius: 10,
    // alignSelf:"flex-end",
    // marginRight:10
  },
  addbtn: {
    backgroundColor: "white",
    width: 60,
    paddingVertical: 2,
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 5,
    elevation: 5,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowColor: "black",
    position: "absolute",
    bottom: 5,
  },
  rightCont: {
    // backgroundColor: "blue",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },
  leftCont: {
    // backgroundColor: "yellow",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }

});
export default FoodCard