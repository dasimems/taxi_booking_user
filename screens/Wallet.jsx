import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Header, Modal, Nav } from '../components';
import { useParamsContext } from '../context';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { card, colors, icons, statusBarHeight, transactions, windowHeight, withdrawalOptions } from '../assets/data/data';
import translate from '../translation';

const Wallet = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [withdrawalActive, setWithdrawalActive] = useState(false)


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
                <Text style={{ ...h1, textAlign: "left", marginVertical: 30 }}>{translate.t("wallet")}</Text>
            </Header>


            <View style={{ flex: 1 }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: (navHeight + 20), paddingTop: 0 }}>

                    <View style={{ paddingHorizontal: 20, width: "100%", alignItems: "center", }}>

                        <View style={{ width: "100%", position: "relative", overflow: "hidden", borderRadius: 20 }}>

                            <View style={{width: "100%", padding: 20, backgroundColor: colors.danger, borderRadius: 20 }}>

                                <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>

                                    <View>
                                        <Text style={{color: "rgba(255, 255, 255, .5)"}}>{translate.t("currentBalance")}</Text>
                                        <Text style={{color: "white", fontSize: 27, marginTop: 6}}>${card.balance.toLocaleString()}</Text>
                                    </View>

                                    <Image source={icons.masterCard} style={{width: 50, height: 50, resizeMode: "contain"}} />

                                </View>

                                <View style={{width: "100%", marginTop: 70, flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text style={{color: "rgba(255, 255, 255, .8)", fontSize: 17}}>{card.cardNumber}</Text>
                                    <Text style={{color: "rgba(255, 255, 255, .8)", fontSize: 17}}>{card.expiringMonth}/{card.expiringYear}</Text>
                                </View>

                            </View>


                            <View style={{ position: "absolute", top: -220, right: -150, height: 321, width: 321, backgroundColor: "rgba(0, 0, 0, .2)", borderRadius: 500 }}></View>

                            <View style={{ position: "absolute", bottom: -230, left: -140, height: 321, width: 321, backgroundColor: "rgba(0, 0, 0, .2)", borderRadius: 500 }}></View>

                        </View>

                        <View style={{width: "100%"}}>

                            <View style={{flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center", marginVertical: 20}}>

                                <TouchableOpacity style={{width: "45%", backgroundColor: colors.primary, paddingVertical: 15, alignItems: "center", justifyContent: "center", borderRadius: 10}} onPress={()=>{
                                    setWithdrawalActive(true)
                                }}>
                                    <Text style={{color: "white", fontSize: 16}}>{translate.t("withdraw")}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: "45%", backgroundColor: colors.primary, paddingVertical: 15, alignItems: "center", justifyContent: "center", borderRadius: 10, marginLeft: "10%" }}>
                                    <Text style={{ color: "white", fontSize: 16 }}>{translate.t("topUp")}</Text>
                                </TouchableOpacity>

                            </View>

                            <Text style={{fontSize: 18}}>Transaction History</Text>

                            <FlatList 
                                data={transactions}
                                extraData={transactions}
                                keyExtractor={(item, index)=> index}
                                renderItem={({item})=>{

                                    var {image, name, date, time, price, description, type} = item;

                                    return(
                                        <View style={{flexDirection: "row", marginTop: 20, justifyContent: "space-between"}}>

                                            

                                            <View style={{flexDirection: "row"}}>

                                                <Image source={image} style={{ width: 50, height: 50, borderRadius: 100, resizeMode: "contain" }} />

                                                <View style={{justifyContent: "space-between", marginLeft: 13, paddingVertical: 3}}>
                                                    <Text style={{fontSize: 14}}>{name}</Text>
                                                    <Text style={{fontSize: 13, color: "rgba(0, 0, 0, .5)"}}>{date} | {time}</Text>
                                                </View>
                                            </View>

                                            <View style={{justifyContent: "space-between", alignItems: "flex-end"}}>
                                                <Text style={{fontSize: 16}}>${price}</Text>

                                                <View style={{flexDirection: "row", alignItems: "center"}}>

                                                    <Text style={{color: "rgba(0, 0, 0, .5)"}}>{description}</Text>

                                                    <View style={{ width: 15, height: 15, textAlign: "center", justifyContent: "center", backgroundColor: type === "debit" ? colors.dangerLight : colors.success, borderRadius: 3, marginLeft: 5}}>

                                                        {type === "debit"? (
                                                        
                                                        
                                                            <>
                                                            
                                                                <Ionicons name="ios-arrow-down" size={12} style={{marginLeft: 1.5}} color="white" />
                                                            
                                                            </>
                                                        
                                                        
                                                        ) : (
                                                        
                                                            <>

                                                                <Ionicons name="arrow-up-outline" size={12} style={{marginLeft: 1.5}} color="white" />
                                                            
                                                            </>
                                                        
                                                        
                                                        )}

                                                    </View>

                                                </View>
                                            </View>


                                        </View>
                                    )

                                }}

                            />

                        </View>

                    </View>

                </ScrollView>

            </View>


            <Nav onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setNavHeight(height)

            }} />

            {withdrawalActive && (<Modal>

                <TouchableOpacity style={{flex: 1}} onPress={()=>{

                    setWithdrawalActive(false)
                }}>

                </TouchableOpacity>

                <View style={{width: "100%", borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingVertical: 30, paddingHorizontal: 20, backgroundColor: "white"}}>

                    <Text style={{textAlign: "center", fontSize: 17}}>Withdraw To</Text>

                    <FlatList 

                        data={withdrawalOptions}
                        extraData={withdrawalOptions}
                        keyExtractor={(item)=> item.link}
                        renderItem={({item}) => {
                            var {label, icon, link} = item;
                            return (

                                <TouchableOpacity style={{paddingVertical: 20, borderBottomColor: "rgba(0, 0, 0, .1)", flexDirection: "row", alignItems: "center", borderBottomWidth: 1, justifyContent: "space-between"}} onPress={()=>{
                                    navigation.navigate("BankList", {bankType: link});
                                }}>

                                    <View style={{flexDirection: "row", alignItems: "center"}}>

                                        <Image source={icon} style={{width: 35, height: 35, resizeMode: "contain"}} />
 
                                        <Text style={{marginLeft: 20}}>{label}</Text>

                                    </View>

                                    <Fontisto name="angle-right" color="rgba(0, 0, 0, .8)" size={14} />

                                </TouchableOpacity>

                            )
                        }}
                    
                    />

                </View>

            </Modal>)}

        </SafeAreaView>
    )
}

export default Wallet

const styles = StyleSheet.create({})