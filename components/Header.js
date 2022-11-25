import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { statusBarHeight } from '../assets/data/data'

const Header = ({children, style, ...props}) => {

  const headerRef = useRef("");

  
  return (
    <View {...props} ref={headerRef} style={{paddingHorizontal: 25, paddingTop: statusBarHeight, zIndex: 1, width: "100%", backgroundColor: "white", ...style}}>
      <View style={{width: "100%"}}>
        {children}
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})