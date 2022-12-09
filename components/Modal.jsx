import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AllStyle from '../assets/styles/Styles'

const Modal = ({children}) => {

  const {absolute} = AllStyle;

  return (
    <View style={{ ...absolute, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, .1)", bottom: 0, zIndex: 999 }}>
      {children}
    </View>
  )
}

export default Modal

const styles = StyleSheet.create({})