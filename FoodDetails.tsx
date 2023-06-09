import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function FoodDetails({ navigation }) {
  // console.log(navigation);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //  console.log(navigation);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1');

      const json = await response.json();

      setData(json);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  const Item = ({ name, quantity }) => {

    return (
      <View style={[styles.rowCnt, { justifyContent: "space-between" }]}>
        <Text style={styles.vegtxt}>{name}</Text>
        <Text style={styles.vegtxt}>{quantity}</Text>
      </View>
    );
  }
  const Appl = ({ name }) => {

    return (
      <View style={styles.appliancesCnt}>
        <Image source={require('./Icons/bfridge.jpg')} style={styles.bimg} />
        <Text style={styles.vegtxt}>{name}</Text>
      </View>
    );
  }
  // console.log(data);
  return (
    <>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      ) : <>
        <Image source={require('./Icons/food1.png')} style={styles.img1} />
        <Image source={require('./Icons/food2.png')} style={styles.bgimg} />

        <View style={styles.container}>
          <View style={styles.topCont}>
            <View style={styles.headline}>
              <Text style={styles.foodTitle}>{data.name}</Text>
              <View style={styles.ratingbtn}>
                <Text style={{ color: "white", fontSize: 10, textAlign: "center" }}>4.2 &#x2605; Star</Text>
              </View>
            </View>
            <Text style={styles.desc}>
              Mughlai Masala is a style of cookery developed in the
              Indian Subcontinent by the imperial kitchens of the Mughal Empire.
            </Text>
            <View style={[styles.rowCnt, { paddingVertical: 20, marginBottom: 30, marginTop: 10 }]}>
              <Image source={require('./Icons/timer.jpg')} style={styles.image} />
              <Text style={{ color: "black", fontWeight: "bold" }}>{data.timeToPrepare}</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={[styles.foodTitle, { fontSize: 22 }]}>
                Ingredients
              </Text>
              <Text style={[styles.desc, { marginTop: 6 }]}>
                For 2 People
              </Text>
            </View>
            <View style={{ marginBottom: 12 }}>
              <Text style={[styles.foodTitle, { fontSize: 17, marginBottom: 7 }]}>Vegetables ({data.ingredients.vegetables.length})</Text>
              {data.ingredients.vegetables.map(
                (itm) => {
                  // console.log(itm);
                  return (
                    <Item
                      name={itm.name}
                      quantity={itm.quantity}
                    />
                  )
                }
              )}
            </View>
            {/* sp */}
            <View>
              <Text style={[styles.foodTitle, { fontSize: 17, marginBottom: 7 }]}>Spices ({data.ingredients.spices.length})</Text>
              {data.ingredients.spices.map(
                (itm) => {
                  return (
                    <Item
                      name={itm.name}
                      quantity={itm.quantity}
                    />
                  )
                }
              )}
            </View>
            {/* appl */}
            <View style={{ marginTop: 10 }}>
              <Text style={[styles.foodTitle, { fontSize: 22, marginBottom: 30 }]}>Appliances</Text>
              <View style={[styles.rowCnt, { padding: 10, gap: 40 }]}>
              {data.ingredients.appliances.map(
                (itm) => {
                  return (
                    <Appl
                  name={itm.name}
                />
                  )
                }
              )}
                
              </View>
            </View>
          </View>
        </View></>}
    </>
  )
}

const styles = StyleSheet.create({
  bgimg: {
    position: "absolute",
    zIndex: 10,
    width: 420,
    height: 170,
    right: -200,
    top: 90
  },
  img1:
  {
    position: "absolute",
    zIndex: 11,
    height: 210,
    width: 210,
    right: -110,
    top: 77

  },
  container: {
    width: "100%",
    height: "100%",
    padding: 17,
    backgroundColor: "white"
  },
  vegtxt: {
    color: "black",
    fontSize: 13,
    fontWeight: "300"
  },
  bimg: {
    height: 80,
    width: 40
  },
  rowCnt: {
    // flex:1,
    flexDirection: "row",
    paddingVertical: 4,
    gap: 10,
  },
  image: {
    width: 20,
    backgroundColor: "red",
    height: 20
  },
  topCont: {

  },
  desc: {
    color: "grey",
    width: "77%",
    fontSize: 13,
    lineHeight: 18
  },
  headline: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10
    // justifyContent:"center"
  },
  foodTitle: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    // fontFamily:'Poppins'
  },
  ratingbtn: {
    borderRadius: 5,
    backgroundColor: "#51C452",
    height: 16,
    width: 35,
    marginVertical: 7,
    marginHorizontal: 5,
    paddingVertical: 1,
    marginLeft: 10
  },
  appliancesCnt: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  }

})