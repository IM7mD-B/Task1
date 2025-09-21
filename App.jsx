import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "./src/screen/HomeScreen.js";
import BookScreen from "./src/screen/BookScreen.js";
import BookFujiScreen from "./src/screen/BookFujiScreen.js";
import NeabryScreen from "./src/screen/NeabryScreen.js";
import SplashScreen from "./src/screen/SplashScreen.js";



const Stack = createNativeStackNavigator();

const App = () => {
  return (
        <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}  
      >
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Neabry" component={NeabryScreen}/>
        <Stack.Screen name="Book" component={BookScreen}/>
        <Stack.Screen name="BookFuji" component={BookFujiScreen}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})
