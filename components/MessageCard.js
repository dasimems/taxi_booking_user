import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, icons } from '../assets/data/data';

const MessageCard = ({data}) => {

    const { message, type, time, date } = data;

  return (

      <View style={{ width: "100%", marginTop: 20, alignItems: type?.toLowerCase() === "sent" ? "flex-end": "flex-start", position: "relative"}}>

        <View style={{ width: "70%", paddingVertical: 15, paddingHorizontal: 20, backgroundColor: type?.toLowerCase() === "sent" ? colors.primary: "rgba(0, 0, 0, .1)", borderRadius: 15}}>

            <Text style={{color: type?.toLowerCase() === "sent"? "white" : "black"}}>{message}</Text>

            <View style={{alignItems: "flex-end"}}>

                  <Text style={{ color: type?.toLowerCase() === "sent"? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, .3)"}}>{date} {time}</Text>

            </View>

        </View>


          <Image source={type?.toLowerCase() === "sent" ? icons.chatTailSent : icons.chatTailReceived} style={{ width: 15, height: 15, resizeMode: "contain", position: "absolute", bottom: 0,}} />


    </View>
  )
}

export default MessageCard

const styles = StyleSheet.create({
    left: {
        left: 0
    },

    right: {
        right: 0
    }
})