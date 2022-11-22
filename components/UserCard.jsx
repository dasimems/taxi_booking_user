import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../assets/data/data';

const UserCard = ({active, onElementClick, data}) => {
  const {icon, label} = data;

  // console.log(data)
  return (

    <Pressable style={{minWidth: 140, height: 200}} onPress={()=>{

      onElementClick(label)

    }}>

      <View elevation={3} style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      
      }}>

        <View style={{borderRadius: 10, overflow: 'hidden', height: "99%", width: "99%", backgroundColor: active? colors.primary : "white", alignItems: "center", justifyContent: "space-between", paddingVertical: 30, paddingHorizontal: 10}}>
          <Image source={icon} style={{width: 100, resizeMode: "contain"}} />
          <Text style={{fontSize: 22, color: "rgba(0, 0, 0, .6)"}}>{label}</Text>

        </View>
          
      </View>
    </Pressable>
  )
}

export default UserCard

const styles = StyleSheet.create({})