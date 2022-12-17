import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';


const HeaderOne = ({backTo, children}) => {

  
    const navigation = useNavigation();

  return (
    <View style={{flexDirection: "row", width: "100%"}}>

        <TouchableOpacity onPress={()=>{

          navigation.goBack();


        }}><FontAwesome name="angle-left" size={30} color="black" style={{marginLeft: 5}} /></TouchableOpacity>

        {children && children}
      
    </View>
  )
}

export default HeaderOne

const styles = StyleSheet.create({})