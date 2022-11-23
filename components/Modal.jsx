import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Modal = ({children}) => {
  return (
    <View style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, .3)"}}>
      {children}
    </View>
  )
}

export default Modal

const styles = StyleSheet.create({})