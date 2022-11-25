import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { bookingHeader, colors, statusBarHeight, windowHeight } from '../assets/data/data';

const Bookings = ({route}) => {
    const {parentContainerStyle} = AllStyle;
    const {active} = route.params;
    const {setActiveParam} = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [activeBooking, setActiveBookings] = useState("ongoing");
    
    
    useEffect(()=> {
      
      setActiveParam(active);

    }, [active])

    const {h1} = AllStyle;

  return (
    <SafeAreaView>
        
      <Header onLayout={(event) => {
        var{height} = event.nativeEvent.layout;

        setHeaderHeight(height)

      }}>
            <Text style={{...h1, textAlign: "left", marginVertical: 30}}>Bookings</Text>

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
                    <TouchableOpacity style={{ borderBottomWidth: activeBooking.toLowerCase() === label.toLowerCase() ? 3: 0, borderBottomColor: colors.primary, paddingBottom: 10, paddingHorizontal: 7 }}>
                      <Text style={{fontWeight: activeBooking.toLowerCase() === label.toLowerCase()? "bold" : "normal", fontSize: 16 }}>{label}</Text>
                    </TouchableOpacity>
                  )
                }}
              
              />

            </View>

      </Header>

      <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, minHeight: windowHeight - (headerHeight + navHeight), width: "100%", justifyContent: "space-between"}}>

      </ScrollView>

      <Nav onLayout={(event) => {
        var { height } = event.nativeEvent.layout;

        setNavHeight(height)

      }} />

    </SafeAreaView>
  )
}

export default Bookings

const styles = StyleSheet.create({})