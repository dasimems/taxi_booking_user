import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { expensesLabels, statusBarHeight, windowHeight } from '../assets/data/data';
import { Fontisto } from '@expo/vector-icons';
import translate from '../translation';
import { useIsFocused } from '@react-navigation/native';

const ShareExpensesScreen = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [activeExpense, setActiveExpense] = useState("high")
    const isFocused = useIsFocused();


    useEffect(() => {

        if(isFocused){

            setActiveParam(active);
        }


    }, [active, isFocused])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView>

            <Header style={{ paddingHorizontal: 10 }} onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>

                <View style={{ marginVertical: 15, flexDirection: "row", alignItems: "center" }}>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Settings")
                        setActiveParam("Settings");
                    }}>

                        <Fontisto name='angle-left' size={18} color="black" />

                    </TouchableOpacity>

                    <Text style={{ ...h1, textAlign: "left", marginLeft: 10 }}>{translate.t("Share Expenses")}</Text>


                </View>



            </Header>


            <View style={{ height: windowHeight - (headerHeight - statusBarHeight) }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: (navHeight + 20), paddingTop: 0 }}>

                    <View style={{ paddingHorizontal: 20, width: "100%" }}>

                        <Text style={{fontSize: 17, color: "rgba(0, 0, 0, .5)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

                        <FlatList 
                            style={{width: "100%"}}
                            data={expensesLabels}
                            extraData={expensesLabels}
                            renderItem={({item})=>{

                                var {icon, label, description} = item;

                                return(
                                    <TouchableOpacity onPress={()=>{
                                        setActiveExpense(label.toLowerCase())

                                        setTimeout(()=>{
                                            navigation.navigate("Settings")
                                            setActiveParam("Settings")

                                        })
                                    }} style={{ flexDirection: "row", width: "100%", alignItems: "center", marginTop: 20, padding: 10, backgroundColor: activeExpense.toLowerCase() === label.toLowerCase() ? "#B4E9C3" : "rgba(0, 0, 0, .05)", borderRadius: 10, borderWidth: activeExpense.toLowerCase() === label.toLowerCase() ? 1 : 0, borderColor: "#82CA97" }}>


                                            <Image source={icon} style={{width: 60, height: 60, resizeMode: "contain"}} />

                                        <View style={{ flex: 1, marginLeft: 10}}>
                                            <Text style={{fontSize: 19}}>{translate.t(label.toLowerCase())}</Text>
                                            <Text style={{fontSize: 16, color: "rgba(0, 0, 0, .5)", marginTop: 5}}>{translate.t(label.toLowerCase() + "Text")}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )

                            }}

                        />

                    </View>


                </ScrollView>

            </View>

        </SafeAreaView>
    )
}

export default ShareExpensesScreen

const styles = StyleSheet.create({})