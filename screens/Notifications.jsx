import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { colors, statusBarHeight, windowHeight } from '../assets/data/data';

import { Fontisto } from '@expo/vector-icons';

const NotificationScreen = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)

    const [filterOn, setFilterOn] = useState(false)


    useEffect(() => {

        setActiveParam(active);

    }, [active])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView>

            <Header style={{ paddingHorizontal: 10}} onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>

                <View style={{ marginVertical: 15, flexDirection: "row", alignItems: "center" }}>

                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Settings")
                        setActiveParam("Settings");
                    }}>
                        
                        <Fontisto name='angle-left' size={18} color="black" />

                    </TouchableOpacity>

                    <Text style={{ ...h1, textAlign: "left", marginLeft: 10}}>Notifications</Text>


                </View>



            </Header>


            <View style={{ height: windowHeight - (headerHeight - statusBarHeight) }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: (navHeight + 20), paddingTop: 0 }}>

                    <View style={{width: "100%"}}>

                        <View style={{paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "rgba(0, 0 ,0, 0.1)", width: "100%", paddingBottom: 10}}>

                            <Text style={{color: "rgba(0, 0, 0, .5)", fontWeight: "bold", fontSize: 18}}>Filters</Text>

                        </View>

                        <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "rgba(0, 0 ,0, 0.1)", paddingVertical: 15 }}>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 17}}>Quality Filter</Text>

                                <TouchableOpacity onPress={()=>{
                                    setFilterOn(prevState => !prevState)
                                }} style={{ width: 45, height: 25, backgroundColor: filterOn ? colors.primary : "rgba(0, 0, 0, .08)", borderRadius: 50, padding: 1, alignItems: filterOn ? "flex-end" : "flex-start"}}>

                                    <View style={{ width: 23, height: 23, backgroundColor: "white", borderRadius: 50 }}></View>

                                </TouchableOpacity>
                            </View>

                            <Text style={{fontSize: 15, color: "rgba(0, 0, 0, .4)", marginTop: 10}}>Ut occaecat est fugiat eiusmod qui voluptate incididunt velit fugiat eiusmod.</Text>

                        </View>

                        <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "rgba(0, 0 ,0, 0.1)", paddingVertical: 15 }}>

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 17 }}>Advanced Filters</Text>

                                <Fontisto name="angle-right" size={15} />
                            </TouchableOpacity>

                        </View>

                        <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "rgba(0, 0 ,0, 0.1)", paddingVertical: 15 }}>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: "rgba(0, 0, 0, .5)", fontWeight: "bold", fontSize: 18 }}>Preferences</Text>
                            </View>

                        </View>

                        <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "rgba(0, 0 ,0, 0.1)", paddingVertical: 15 }}>

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 17 }}>Push Notification</Text>

                                <Fontisto name="angle-right" size={15} />
                            </TouchableOpacity>

                        </View>

                    </View>


                </ScrollView>

            </View>

        </SafeAreaView>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({})