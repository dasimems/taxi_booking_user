import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors, windowWidth } from '../assets/data/data';
import translate from '../translation';

const UserCard = ({active, onElementClick, data, index}) => {
  const {icon, label} = data;

  // console.log(data)
  return (

    <Pressable style={{ width: (windowWidth * 0.39), height: 200, marginLeft: index !== 0? 10 : 0}} onPress={()=>{

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
          <Text style={{fontSize: 22, color: "rgba(0, 0, 0, .6)"}}>{translate.t(label.toLowerCase())}</Text>

        </View>
          
      </View>
    </Pressable>
  )
}

export default UserCard

const styles = StyleSheet.create({})