import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { statusBarHeight, windowHeight } from '../assets/data/data';

const Bookings = ({route}) => {
    const {parentContainerStyle} = AllStyle;
    const {active} = route.params;
    const {setActiveParam} = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    
    
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