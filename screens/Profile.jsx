import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { colors, icons, statusBarHeight, userDetails, windowHeight } from '../assets/data/data';

const Profile = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)

    const { userImage, name, email, mobileNumber, joinedDate, carModel, plateNumber } = userDetails;

    useEffect(() => {

        setActiveParam(active);

    }, [active])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView style={{height: "100%"}}>

            <Header onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>
                <Text style={{ ...h1, textAlign: "left", marginVertical: 30 }}>Profile</Text>
            </Header>


            <View style={{ flex: 1 }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingTop: 10, paddingBottom: (navHeight + 40) }}>

                    <View style={{width: "100%", alignItems: "center", paddingHorizontal: 20 }}>

                        <Image source={userImage} style={{ height: 80, width: 80, borderRadius: 100, borderWidth: 1, borderColor: "black" }} />
                        <Text style={{ fontWeight: "bold", marginTop: 7, fontSize: 18 }}>{name}</Text>
                        <Text style={{ fontSize: 16, marginTop: 7, color: "rgba(0, 0, 0, .5)" }}>{email}</Text>
                        <Text style={{ fontSize: 16, marginTop: 7, color: "rgba(0, 0, 0, .5)" }}>{mobileNumber}</Text>

                        <View elevation={5} style={{width: "100%",
                            shadowColor: "#000",
                            marginTop: 30,
                            shadowOpacity: 0.5,
                            shadowRadius: 300,
                            borderRadius: 15,
                            shadowOffset: {
                                width: 0,
                                height: 0,
                            },
                    
                        }}>

                            <View style={{ width: "100%", backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 15, flexDirection: "row", justifyContent: "space-between" }}>

                                <View style={{alignItems: "center"}}>

                                    <View style={{width: 60, height: 60, borderRadius: 100, backgroundColor: colors.secondaryLight, justifyContent: "center", alignItems: "center"}}>

                                        <FontAwesome name="star-half-full" size={24} color="rgba(0, 0, 0, .6)" />

                                    </View>

                                    <Text style={{fontWeight: "bold", fontSize: 18, marginTop: 9}}>4.8</Text>
                                    <Text style={{color: "rgba(0, 0, 0, .5)", fontSize: 16, marginTop: 1}}>Ratings</Text>

                                </View>

                                <View style={{ alignItems: "center" }}>

                                    <View style={{ width: 60, height: 60, borderRadius: 100, backgroundColor: colors.secondaryLight, justifyContent: "center", alignItems: "center" }}>

                                        <Ionicons name="car-sport-outline" size={24} color="rgba(0, 0, 0, .6)" />

                                    </View>

                                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 9 }}>279</Text>
                                    <Text style={{ color: "rgba(0, 0, 0, .5)", fontSize: 16, marginTop: 1 }}>Trips</Text>

                                </View>


                                <View style={{ alignItems: "center" }}>

                                    <View style={{ width: 60, height: 60, borderRadius: 100, backgroundColor: colors.secondaryLight, justifyContent: "center", alignItems: "center" }}>

                                        <Fontisto name="clock" size={24} color="rgba(0, 0, 0, .6)" />

                                    </View>

                                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 9 }}>5</Text>
                                    <Text style={{ color: "rgba(0, 0, 0, .5)", fontSize: 16, marginTop: 1 }}>Years</Text>

                                </View>



                            </View>

                        </View>

                        <View style={{ width: "100%", marginTop: 40 }}>

                            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                                <Text style={{fontSize: 16, color: "rgba(0, 0, 0, .5)"}}>Member Since</Text>
                                <Text style={{ fontSize: 16, color: "rgba(0, 0, 0, .5)", fontWeight: "bold" }}>{joinedDate}</Text>

                            </View>

                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                                <Text style={{ fontSize: 16, color: "rgba(0, 0, 0, .5)" }}>Car Model</Text>
                                <Text style={{ fontSize: 16, color: "rgba(0, 0, 0, .5)", fontWeight: "bold" }}>{carModel}</Text>

                            </View>

                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                                <Text style={{ fontSize: 16, color: "rgba(0, 0, 0, .5)" }}>Plate Number</Text>
                                <Text style={{ fontSize: 16, color: "rgba(0, 0, 0, .5)", fontWeight: "bold" }}>{plateNumber}</Text>

                            </View>

                        </View>

                        <View style={{ width: "100%", marginTop: 40 }}>

                            <TouchableOpacity style={{width: "100%", flexDirection: "row", alignItems: "center", marginBottom: 20}} onPress={()=>{
                                navigation.navigate("Settings");
                            }}>
                                <View style={{width: 30, height: 30, backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", borderRadius: 7}}>
                                    <Image source={icons.settings} style={{height: 15, width: 15, resizeMode: "contain"}} />

                                </View>

                                <Text style={{marginLeft: 15, fontSize: 16, color: "rgba(0, 0, 0, .7)"}}>Settings</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: "100%", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                                <View style={{ width: 30, height: 30, backgroundColor: colors.danger, alignItems: "center", justifyContent: "center", borderRadius: 7 }}>
                                    <Image source={icons.signOut} style={{ height: 15, width: 15, resizeMode: "contain" }} />

                                </View>

                                <Text style={{ marginLeft: 15, fontSize: 16, color: "rgba(0, 0, 0, .7)" }}>Sign Out</Text>
                            </TouchableOpacity>

                        </View>

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

export default Profile

const styles = StyleSheet.create({})