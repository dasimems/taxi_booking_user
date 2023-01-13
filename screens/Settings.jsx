import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { settingsLink, statusBarHeight, windowHeight } from '../assets/data/data';
import { Fontisto } from '@expo/vector-icons';
import translate from '../translation';
import { useIsFocused } from '@react-navigation/native';

const SettingsScreen = ({ route, navigation }) => {
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

            <Header style={{ paddingHorizontal: 10}} onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>

                <View style={{ marginVertical: 15, flexDirection: "row", alignItems: "center" }}>

                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Profile")
                        setActiveParam("Profile");
                    }}>
                        
                        <Fontisto name='angle-left' size={18} color="black" />

                    </TouchableOpacity>

                    <Text style={{ ...h1, textAlign: "left", marginLeft: 10}}>{translate.t("settings")}</Text>


                </View>



            </Header>


            <View style={{ height: windowHeight - (headerHeight - statusBarHeight) }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: 0, paddingTop: 0 }}>

                    <FlatList 
                        style={{width: "100%"}}
                        data={settingsLink}
                        extraData={settingsLink}
                        renderItem={({item}) => {
                            var {label, screenName} = item;
                            return(
                                <TouchableOpacity style={{width: "100%", paddingHorizontal: 20, paddingTop: 10, paddingBottom: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}} onPress={()=>{
                                    navigation.navigate(screenName);
                                }}>
                                    <Text style={{fontSize: 16}}>{translate.t(label.toLowerCase())}</Text>

                                    <Fontisto name="angle-right" size={14} color="rgba(0, 0, 0, .4)" />
                                </TouchableOpacity>
                            )
                        }}

                    />

                </ScrollView>

            </View>

        </SafeAreaView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})