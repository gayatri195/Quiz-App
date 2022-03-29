import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Title = () => {
    return(
        <View>
        <View style={styles.container}>
            <Text style={styles.title}>QUIZ APP</Text>
        </View>
        <View>
            <Image style={styles.image} source={{uri: 'https://storyset.com/illustration/raising-hand/rafiki'}} />
        </View>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize: 28,
        fontWeight: 'bold'
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightgrey',
        borderRadius:25,
        padding: 12,
        alignItems:'center',
    },
    image:{
        height:300,
        width:300
    }

})