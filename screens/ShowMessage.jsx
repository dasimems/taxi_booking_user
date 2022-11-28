import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import {  Header, MessageCard, MessageNav, Nav } from '../components';
import { useParamsContext } from '../context'; 
import { Fontisto } from '@expo/vector-icons';
import { chats, colors, statusBarHeight, windowHeight } from '../assets/data/data';

const ShowMessage = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active, id } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [userDetails, setUserDetails] = useState(null)


    useEffect(() => {

        setActiveParam(active);

        const messageDetails = chats.filter(chat => parseInt(chat.id) === parseInt(id));

        setUserDetails(messageDetails[0]);



    }, [active, id])


    const { h1 } = AllStyle;

    return (
        <SafeAreaView>

            <Header style={{alignItems: "center", borderBottomWidth: 1, borderBottomColor: "rgba(0, 0, 0, .2)"}} onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>
                
                <View style={{width: "100%", paddingVertical: 15, flexDirection: "row", alignItems: "center"}}>

                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Inbox")
                    }}>
                        <Fontisto name="angle-left" size={22} color="black" />
                    </TouchableOpacity>

                    <View style={{width: 40, height: 40, marginLeft: 10, position: "relative"}}>

                        {userDetails?.status.toLowerCase() === "online" && <View style={{position: "absolute", width: 13, height: 13, backgroundColor: colors.success, borderRadius: 50, zIndex: 1, right: -3, borderWidth: 2, borderColor: "white"}}></View>}
                        
                        <Image source={userDetails?.image} style={{width: 40, height: 40, borderRadius: 100,resizeMode: "contain"}}/>

                    </View>


                    <View style={{marginLeft: 13, justifyContent: "center"}}>
                        <Text>{userDetails?.name}</Text>
                        {userDetails?.status.toLowerCase() === "online" && <Text style={{color: "rgba(0, 0, 0, .4)", marginTop: 2}}>{userDetails?.status}</Text>}
                    </View>

                </View>

            </Header>


            <View style={{ height: windowHeight - (headerHeight - statusBarHeight) }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: (navHeight + 20), paddingTop: 10 }}>

                    <View style={{paddingHorizontal: 20, width: "100%"}}>

                        <FlatList 
                            data={userDetails?.messages}
                            extraData={userDetails?.messages}
                            keyExtractor={(item, index)=> index}
                            renderItem={({item})=>{
                                return(
                                    <MessageCard data={item}/>
                                )
                            }}
                        
                        />

                    </View>


                </ScrollView>


            </View>
            
            <MessageNav onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setNavHeight(height)

            }} />


            {/* <Nav onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setNavHeight(height)

            }} /> */}

            

        </SafeAreaView>
    )
}

export default ShowMessage

const styles = StyleSheet.create({})