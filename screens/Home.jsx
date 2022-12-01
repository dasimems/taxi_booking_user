import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { colors, statusBarHeight, windowHeight } from '../assets/data/data';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ route }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [userDetails, setUserDetails] = useState({
        userType: "passenger"
    })

    const [bottomContainerHeight, setBottomContainerHeight] = useState(0)
    const [mainContainerHeight, setMainContainerHeight] = useState(0)


    useEffect(() => {

        setActiveParam(active);

    }, [active])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView>

            <Header style={{paddingHorizontal: 0, position: "absolute", backgroundColor: 'transparent'}} onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>

                <LinearGradient colors={['#ffffff', 'transparent']} style={{flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 20}}>

                    <TouchableOpacity style={{backgroundColor: "white", borderRadius: 10, padding: 5, marginTop: 20}}>

                        <View>
                            <Feather name="bell" size={24} color="black" />

                            <View style={{width: 7, height: 7,borderRadius: 10, backgroundColor: "rgb(255, 50,20)", position: "absolute", top: 1, right: 2, zIndex: 1}}></View>

                        </View>

                    </TouchableOpacity>
                    
                </LinearGradient>
                
            </Header>


            <View style={{ height: "100%"}}>

                <ScrollView onLayout={()=>{

                }} scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", height: "100%", justifyContent: "space-between", backgroundColor: "rgba(0, 0, 0, .2)" }}>

                    <View style={{}}>

                    </View>

                    <View onLayout={(event) => {
                        var { height } = event.nativeEvent.layout;

                        setBottomContainerHeight(height)

                    }}>

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

export default HomeScreen

const styles = StyleSheet.create({})