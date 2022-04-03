import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Title from '../components/title'

const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png'}} 
        style={styles.banner}
        resizeMode="contain"
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
    height: 300,
    width: 300,
    marginBottom:300
  },
  container:{
    paddingHorizontal: 20,
    paddingTop: 40,
    height: '100%',
  },
  bannerContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 12,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:25
  },
  buttonText:{
    fontSize: 24,
    fontWeight:'600',
    color: 'white',
  }
})
