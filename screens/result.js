import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Result = ({route,navigation}) => {
  const {score} = route.params
  const resultBanner=score>40?"" : ""
  return(
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>YOUR RESULT</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Congratulations, You've scored {score} points</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source = {{uri: resultBanner}} resizeMode='contain' />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Home")}} >
          <Text style={styles.buttonText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Home")}} >
          <Text style={styles.buttonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Result;

const styles = StyleSheet.create({
  container:{
    padding: 12,
    height:'100%'
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  banner:{
    height: 300,
    width: 300
  },
  bottom:{
    marginBottom: 12,
    paddingVertical:16,
    justifyContent:"space-between",
    flexDirection:"row"
  },
  button:{
    backgroundColor: '#1A759F',
    borderRadius: 16,
    padding: 12,
    paddingHorizontal: 16,
    alignItems:'center',
    alignItems:'center',
    maxWidth:'100%',
    marginTop: 230
  },
  buttonText:{
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  resultContainer:{
    marginTop:20,
    backgroundColor:'lightgrey',
    borderRadius:25,
    padding: 12,
    alignItems:'center'
  },
  resultText:{
    color:'#1A759F',
    fontSize:25,
    fontWeight:'bold'
  },
  scoreContainer:{
    alignItems:'center',
    marginTop:30
  },
  scoreText:{
    fontSize: 30,
    fontWeight:'600'
  }
})