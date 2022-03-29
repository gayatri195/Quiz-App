import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Title from '../components/title'

const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Title />
      <View>
        <Image source={{uri: 'https://storyset.com/illustration/raising-hand/rafiki'}} style={styles.banner}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Quiz")}} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({
  banner:{
    height: 100,
    width: 100,
    flex: 1
  },
  container:{
    paddingHorizontal: 40,
    paddingTop: 40,
    height: '100%',
  },
  button:{
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 12,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonText:{
    fontSize: 24,
    fontWeight:'600',
    color: 'white',
  }
})
