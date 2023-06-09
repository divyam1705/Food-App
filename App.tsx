import 'react-native-gesture-handler';
import React from 'react';
import { View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import HomeScreen from './HomeScreen';
import DetailsScreen from './FoodDetails';

// Create a Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={({navigation})=>({
            title: 'Select Dishes',
            headerStyle: {
              backgroundColor: 'white',

            },
            headerTintColor: 'black',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={{
                  height: 17,
                  width: 10,
                  marginTop: 5,
                  marginLeft:15
                }} source={require('./Icons/arrowleft.jpg')} />
              </TouchableOpacity>
            ),
          })} />
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={({navigation})=>({
          title: '',
          headerStyle: {
            backgroundColor: 'white',

          },
          headerTintColor: 'black',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={{
                height: 17,
                width: 10,
                marginTop: 5,
                marginLeft:15
              }} source={require('./Icons/arrowleft.jpg')} />
            </TouchableOpacity>
          ),
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

