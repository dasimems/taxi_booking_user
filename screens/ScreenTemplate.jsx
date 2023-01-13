import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { statusBarHeight, windowHeight } from '../assets/data/data';
import { useIsFocused } from '@react-navigation/native';

const ScreenTemplate = ({ route }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const isFocused = useIsFocused();


    useEffect(() => {

        if(isFocused){

            setActiveParam(active);
        }


    }, [active, isFocused])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView>

            <Header onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>
                <Text style={{ ...h1, textAlign: "left", marginVertical: 30 }}>Bookings</Text>
            </Header>


            <View style={{ height: windowHeight - (headerHeight - statusBarHeight) }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: (navHeight + 20) }}>

                </ScrollView>

            </View>


            <Nav onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setNavHeight(height)

            }} />

        </SafeAreaView>
    )
}

export default ScreenTemplate

const styles = StyleSheet.create({})