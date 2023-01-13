import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useLanguageContext, useParamsContext } from '../context';
import { languages, statusBarHeight, windowHeight } from '../assets/data/data';

import { Fontisto } from '@expo/vector-icons';
import translate from '../translation';

const Languages = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const {setLanguageCode} = useLanguageContext();


    useEffect(() => {

        setActiveParam(active);

    }, [active])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView>

            <Header onLayout={(event) => {
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

                    <Text style={{ ...h1, textAlign: "left", marginLeft: 10}}>{translate.t("languages")}</Text>


                </View>
            </Header>


            <View style={{ height: windowHeight - (headerHeight - statusBarHeight), backgroundColor: "white"}}>

                <FlatList

                    data={languages}
                    keyExtractor={(item)=>item.code}
                    renderItem={({item}) => {
                        var {label, code} = item;
                        return(

                            <TouchableOpacity style={{paddingVertical: 15, borderTopWidth: 1, borderTopColor: "rgba(0, 0, 0, .2)", paddingHorizontal: 30 }} onPress={()=>{
                                setLanguageCode(code);
                                navigation.navigate("Settings")
                            }}>

                                <Text>{label}</Text>

                            </TouchableOpacity>


                        )
                    }}

                />

                

            </View>

        </SafeAreaView>
    )
}

export default Languages

const styles = StyleSheet.create({})