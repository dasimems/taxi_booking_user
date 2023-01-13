import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoaderOne from "../assets/lottie/loader_one.json"
import AnimatedLottieView from 'lottie-react-native';

const LoadingScreen = () => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <AnimatedLottieView source={LoaderOne} style={{width: 100, height: 100}} autoPlay={true} loop={true} />
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})