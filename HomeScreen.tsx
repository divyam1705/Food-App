
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import FoodCard from './Components/FoodCard';
import BottomCart from './Components/BottomCart';
import Popular from './Components/Popular';
import Tags from './Components/Tags';
import DateTime from './Components/DateTime';



function App({ navigation }): JSX.Element {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  //  console.log(navigation);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/');

      const json = await response.json();
      
      setData(json);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <StatusBar backgroundColor="white" />

      <View style={styles.container}>
        <View>
          <View style={{
            backgroundColor: "black",
            height: 50,
            marginBottom: 60
          }}></View>
          <DateTime />
        </View>
        <Tags />
        {!isLoading && <Popular
          key={1}
          data={data.popularDishes} />}
        <View style={styles.foodheaderwrapper}>
          <View style={styles.foodheader}>
            <Text style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20
            }}>Recommended</Text>
            <TouchableOpacity style={styles.menuBtn}>
              <Text style={{
                fontWeight: "bold",
                fontSize: 11,
                color: "white"
              }}> Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
        {!isLoading && (<ScrollView style={{ marginBottom: 60 }}>
          {data.dishes.map((dish) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>

                <FoodCard
                  key={dish.key}

                  dish={dish} />
              </TouchableOpacity>
            );
          })}
          {data.dishes.map((dish) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Details')}>

                <FoodCard
                  key={dish.key}
                  navigation={navigation}
                  dish={dish} />
              </TouchableOpacity>);
          })}
        </ScrollView>)}
        {isLoading && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        )}


      </View>
      <BottomCart />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },
  topbar: {
    backgroundColor: "white",
    height: 60,
    paddingHorizontal: 15
  },
  arrowimg: {
    height: 17,
    width: 10,
    marginTop: 5
  },
  topbarwrap: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    marginTop: 13,
  },
  topbartxt: {
    color: "black",
    fontSize: 19,
    fontWeight: "400"
  },
  toptxt: {
    color: "black"
  },
  foodheaderwrapper: {
    height: 30,
    marginBottom: 15
  },
  foodheader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15
  },
  menuBtn: {
    // textAlign:"center",
    backgroundColor: "black",
    borderRadius: 7,
    height: 25,
    width: 65,
    paddingVertical: 4,
    paddingHorizontal: 16
  }
});

export default App;