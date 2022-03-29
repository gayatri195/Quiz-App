import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import MyStack from './navigation'
// import {StateProvider} from './src/stateProvider';
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'

const App = () => {
  return(
    // <StateProvider initialState={initialState} reducer={reducer}>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // </StateProvider>
  )
}
export default App

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 16
  }
})
