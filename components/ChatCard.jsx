import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../assets/data/data';

const ChatCard = ({data}) => {
  const {image, name, messages, status, id} = data;

  const [unreadChats, setUnreadChats] = useState(0);

  useEffect(()=>{

    unreadMessages = messages.filter(message => message.status.toLowerCase() === "unread");

    setUnreadChats(unreadMessages.length);


  }, [messages])


  return (
    <TouchableOpacity style={{justifyContent: "space-between", width: "100%", marginBottom: 20, flexDirection: "row", alignItems: "center"}}>
      
      <View style={{flexDirection: "row"}}>

        <View style={{width: 45, height: 45, position: "relative"}}>

          {status.toLowerCase() === "online" && <View style={{width: 13, height: 13, borderRadius: 50, position: "absolute", top: 0, right: 0, backgroundColor: colors.success, zIndex: 1, borderWidth: 2, borderColor: "white"}}></View>}

          <Image source={image} style={{width: 45, height: 45, resizeMode: "contain", borderRadius: 100}} />

        </View>


        <View style={{justifyContent: "space-between", marginLeft: 20}}>

          <Text style={{fontWeight: "bold", fontSize: 16}}>{name}</Text>
          <Text style={{ color: parseInt(unreadChats) !== 0 ? "rgba(0, 0, 0, .7)" : "rgba(0, 0, 0, .3)" }}>{messages[messages.length - 1]?.message}</Text>

        </View>

      </View>

      {parseInt(unreadChats) !== 0 && <View style={{ width: 18, height: 18, backgroundColor: "#82CA97", borderRadius: 50, justifyContent: "center", alignItems: "center"}}>

        <Text style={{fontSize: 13, color: "white"}}>

          {unreadChats}

        </Text>
        
      </View>}

    </TouchableOpacity>
  )
}

export default ChatCard

const styles = StyleSheet.create({})