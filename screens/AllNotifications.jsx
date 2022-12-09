import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { colors, notification, statusBarHeight, windowHeight } from '../assets/data/data';
import { Fontisto } from '@expo/vector-icons';

const AllNotification = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)


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

                <View style={{ flexDirection: "row", marginVertical: 15, alignItems: "center", justifyContent: "space-between"}}>

                    <View style={{  flexDirection: "row", alignItems: "center" }}>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Home")
                            setActiveParam("Home");
                        }}>

                            <Fontisto name='angle-left' size={18} color="black" />

                        </TouchableOpacity>

                        <Text style={{ ...h1, textAlign: "left", marginLeft: 10 }}>Notifications</Text>


                    </View>

                    <View style={{ width: 25, height: 25, justifyContent: "center", backgroundColor: colors.dangerLight, alignItems: "center", borderRadius: 50 }}>
                        <Text style={{color: "white", fontSize: 12}}>10</Text>
                    </View>
                </View>




            </Header>


            <View style={{ height: windowHeight - (headerHeight - statusBarHeight) }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: (navHeight + 20), paddingTop: 0 }}>

                    <View style={{width: "100%", paddingHorizontal: 20}}>

                        <FlatList 
                        data={notification}
                        extraData={notification}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item}) => {
                            var {icon, description, title} = item;
                            return(
                                <View style={{flexDirection: "row", borderBottomColor: "rgba(0, 0, 0, .2)", borderBottomWidth: 1, paddingVertical: 20, width: "100%", alignItems: "center"}}>

                                    <View style={{width: 40, height: 40, backgroundColor: "rgba(0, 0, 0, .07)", alignItems: "center", justifyContent: "center", borderRadius: 100}}>

                                        <Image source={icon} style={{width: 20, height: 20, resizeMode: "contain"}} />

                                    </View>

                                    <View style={{flex: 1, paddingHorizontal: 10, paddingLeft: 20}}>

                                        <Text style={{fontSize: 19}}>{title}</Text>

                                        <Text style={{fontSize: 14, color: "rgba(0, 0, 0, .5)", marginTop: 10}}>{description}</Text>

                                    </View>

                                </View>
                            )
                        }}

                        />
                    </View>


                </ScrollView>

            </View>


           
        </SafeAreaView>
    )
}

export default AllNotification

const styles = StyleSheet.create({})