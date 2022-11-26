import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../assets/data/data';

const BookingCards = ({data}) => {

  const { bookingDate, image, name, price, from, to, status } = data;
  const [statusColor, setStatusColor] = useState("");

  useEffect(()=>{

    var statusSmall = status.toLowerCase()

    if (statusSmall === "pending"){

      setStatusColor("#ED713C");
      
    } else if (statusSmall === "completed"){
      setStatusColor("#25D416");
      
      
    } else if (statusSmall === "cancelled"){
      setStatusColor("#BC101A");

    }

  }, [status])

  return (
    <View elevation={5} style={{
      width: "100%",
      // borderWidth: 1, borderColor: "red", 
      shadowColor: "#000",
      
      shadowOpacity: 0.5,
      shadowRadius: 300,
      borderRadius: 15, 
      shadowOffset: {
        width: 0,
        height: 0,
      },
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }}>
      <View style={{
        width: "99%", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 10, backgroundColor: "white",marginTop: 2, borderRadius: 10}}>

        <Text style={{ color: "rgba(0, 0, 0, .5)" }}>{bookingDate}</Text>
        
        <View style={{justifyContent: "space-between", alignItems: "center", flexDirection: "row"}}>

          <View style={{ flexDirection: "row", marginVertical: 15, alignItems: "center" }}>

            <Image source={image} style={{ width: 50, height: 50, borderRadius: 7}} />

            <Text style={{fontSize: 17, marginLeft: 20, fontWeight: "bold"}}>{name}</Text>

          </View>

          <Text style={{fontSize: 18}}>${price}</Text>

        </View>

        <View style={{height: 130, paddingVertical: 10, width: "100%", flexDirection: "row", justifyContent: "space-between"}}>

          <View style={{height: "100%", width: "auto", flexDirection: "row"}}>


            <View style={{width: 50, height: "85%", alignItems: "center", justifyContent: "space-between"}}>

              <View style={{backgroundColor: colors.primary, width: 15, height: 15, borderRadius: 30}}></View>

              <View style={{height: 50, width: 2.6, justifyContent: "space-between"}}>

                <View style={{width: "100%", height: "21%", backgroundColor: "rgba(0, 0, 0, .7)"}}></View>
                <View style={{width: "100%", height: "21%", backgroundColor: "rgba(0, 0, 0, .7)"}}></View>
                <View style={{width: "100%", height: "21%", backgroundColor: "rgba(0, 0, 0, .7)"}}></View>

              </View>

              <View style={{backgroundColor: colors.danger, width: 20, height: 20, borderRadius: 30}}></View>

            </View>

            <View style={{ height: "100%", marginLeft: 20, justifyContent: "space-between"}}>
              <View>
                  <Text style={{fontSize: 17}}>{from?.destination}</Text>
                  <Text style={{color: "rgba(0, 0, 0, .4)"}}>{from?.time}</Text>
              </View>

              <View>
                <Text style={{ fontSize: 17 }}>{to?.destination}</Text>
                <Text style={{ color: "rgba(0, 0, 0, .4)" }}>{to?.time}</Text>
              </View>
            </View>


          </View>

          <View style={{height: "100%", justifyContent: "flex-end", paddingVertical: 20, alignItems: "flex-end"}}>

            <Text style={{ color: statusColor, fontSize: 17 }}>{status}</Text>

          </View>

        </View>

      </View>
    </View>
  )
}

export default BookingCards

const styles = StyleSheet.create({})