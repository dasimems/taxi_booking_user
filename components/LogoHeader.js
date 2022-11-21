import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { images } from '../assets/data/data'

const LogoHeader = () => {
    const {logo } = images
  return (
    <View style={styles.imageParentContainer}>
        
      <Image source={logo} style={styles.imageStyle} />
    </View>
  )
}

export default LogoHeader

const styles = StyleSheet.create({

    imageParentContainer:{
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        width: 117,
        marginVertical: 40,

    }
})