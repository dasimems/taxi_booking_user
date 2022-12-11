import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import {  Header, MessageCard, MessageNav, Modal, Nav } from '../components';
import { useParamsContext } from '../context'; 
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { chats, colors, statusBarHeight, windowHeight } from '../assets/data/data';

const ShowMessage = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active, id } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [userDetails, setUserDetails] = useState(null)
    const [otherOption, setOtherOption] = useState(false)

    console.log(otherOption)


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
            
            <MessageNav openOtherOption={setOtherOption} onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setNavHeight(height)

            }} />


            {otherOption && 
            (<Modal>

                <TouchableOpacity onPress={() => {
                    setOtherOption(false)
                }} style={{flex: 1}}></TouchableOpacity>

                <View style={{padding: 13}}>

                    <View style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 8, overflow: "hidden"}}>

                        <TouchableOpacity style={{paddingHorizontal: 20, paddingVertical: 10, flexDirection: "row", alignItems: "center", borderBottomColor: "rgba(0, 0, 0, .08)", borderBottomWidth: 1}}>

                            <Ionicons name='camera-outline' size={28} color={colors.primary} />

                            <Text style={{color: "rgba(0, 0, 0, .7)", fontSize: 17, marginLeft: 15}}>Camera</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: "row", alignItems: "center", borderBottomColor: "rgba(0, 0, 0, .08)", borderBottomWidth: 1 }}>

                            <Ionicons name='image-outline' size={28} color={colors.primary} />

                            <Text style={{ color: "rgba(0, 0, 0, .7)", fontSize: 17, marginLeft: 15 }}>Photos & Videos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: "row", alignItems: "center", borderBottomColor: "rgba(0, 0, 0, .08)", borderBottomWidth: 1 }}>

                            <Ionicons name='document-text-outline' size={28} color={colors.primary} />

                            <Text style={{ color: "rgba(0, 0, 0, .7)", fontSize: 17, marginLeft: 15 }}>Documents</Text>

                        </TouchableOpacity>

                    </View>

                    <Pressable onPress={()=>{
                        setOtherOption(false)
                    }} style={{ padding: 15, width: "100%", alignItems: "center", backgroundColor: "white", borderRadius: 10 }}>
                        <Text style={{fontSize: 17}}>Cancel</Text>
                    </Pressable>

                </View>
                
            </Modal>)
            }

            

        </SafeAreaView>
    )
}

export default ShowMessage

const styles = StyleSheet.create({})