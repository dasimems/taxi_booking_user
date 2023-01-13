import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { BookingCards, Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { bookingHeader, bookings, colors, statusBarHeight, windowHeight } from '../assets/data/data';
import translate from '../translation';

const Bookings = ({route}) => {
    const {parentContainerStyle} = AllStyle;
    const {active} = route.params;
    const {setActiveParam} = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [activeBooking, setActiveBookings] = useState("");
    const [listedBooking, setListedBooking] = useState([])
    
    
    useEffect(()=> {
      
      setActiveParam(active);

    }, [active])

    useEffect(()=>{

      setActiveBookings(bookingHeader[0].label)

    }, [bookingHeader])

    useEffect(()=>{

      var neededBooking = bookings.filter(booking => booking.status.toLowerCase() === activeBooking.toLowerCase())

      setListedBooking(neededBooking);

    }, [activeBooking, bookings])

    const {h1} = AllStyle;

  return (
    <SafeAreaView style={{height: "100%"}}>
        
      <Header onLayout={(event) => {
        var{height} = event.nativeEvent.layout;

        setHeaderHeight(height)

      }}>
            <Text style={{...h1, textAlign: "left", marginVertical: 30}}>{translate.t("bookings")}</Text>

            <View style={{flexDirection: "row"}}>

              <FlatList 
              
                data={bookingHeader}
                keyExtractor={(item)=>item.label}
                numColumns={bookingHeader.length}
                columnWrapperStyle={{
                  flex: 1,
                  justifyContent: "space-around"
                }}
                renderItem={({item}) => {

                  const {label} = item;

                  return(
                    <TouchableOpacity onPress={()=>{
                      setActiveBookings(label.toLowerCase())
                    }} style={{ borderBottomWidth: activeBooking.toLowerCase() === label.toLowerCase() ? 3: 0, borderBottomColor: colors.primary, paddingBottom: 10, paddingHorizontal: 7 }}>
                      <Text style={{fontWeight: activeBooking.toLowerCase() === label.toLowerCase()? "bold" : "normal", fontSize: 16 }}>{translate.t(label.toLowerCase())}</Text>
                    </TouchableOpacity>
                  )
                }}
              
              />

            </View>

      </Header>

      <View style={{ flex: 1  }}>

        <ScrollView nestedScrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", paddingBottom: (navHeight + 20)}}>

          <View style={{paddingHorizontal: 20, width: "100%"}}>

            <FlatList 
              scrollEnabled={false}
              contentContainerStyle={{ width: "100%"}}
              keyExtractor={(item, index)=> index}
              data={listedBooking}
              extraData={listedBooking}
              renderItem={({item})=>{
                return(
                  <BookingCards data={item} />
                )
              }}

            />
          </View>


        </ScrollView>

      </View>


      <Nav onLayout={(event) => {
        var { height } = event.nativeEvent.layout;

        setNavHeight(height)

      }} />

    </SafeAreaView>
  )
}

export default Bookings

const styles = StyleSheet.create({})