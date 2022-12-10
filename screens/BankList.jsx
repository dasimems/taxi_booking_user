import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Button, Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { bankAccounts, colors, statusBarHeight, windowHeight, withdrawalOptions } from '../assets/data/data';
import { Fontisto } from '@expo/vector-icons';

const BankList = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active, bankType } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [accounts, setAccount] = useState([])
    const [bankImage, setBankImage] = useState("")
    const [chosenAccount, setChosenAccount] = useState("")


    useEffect(() => {

        setActiveParam(active);

    }, [active])

    useEffect(()=>{
        var activeWithdrawOption = withdrawalOptions.filter(option => option.link === bankType);
        setAccount(bankAccounts.filter(account => account.bankType === bankType))

        setBankImage(activeWithdrawOption[0])

    }, [bankType])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView style={{height: "100%"}}>

            <Header onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }}>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Wallet")
                        setActiveParam("Wallet");
                    }}>

                        <Fontisto name='angle-left' size={18} color="black" />

                    </TouchableOpacity>

                    <Text style={{ ...h1, textAlign: "left", marginLeft: 10 }}>Withdraw to {bankImage?.label}</Text>


                </View>
                
            </Header>


            <View style={{ flex: 1 }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: (navHeight + 20), paddingTop: 0 }}>

                    <View style={{paddingHorizontal: 20, width: "100%"}}>

                        <FlatList 
                            style={{width: "100%"}}
                            data={accounts}
                            extraData={accounts}
                            keyExtractor={(item)=>item.id}
                            renderItem={({item})=>{
                                var { bankName, accountNo, id } = item;
                                return(
                                    <TouchableOpacity style={{flexDirection: "row", width: "100%", justifyContent: "space-between", paddingVertical: 15, alignItems: "center"}} onPress={()=>{

                                        setChosenAccount(id)

                                    }}>

                                        <View style={{flexDirection: "row", alignItems: "center"}}>
                                            <Image source={bankImage?.icon} style={{width: 40, height: 40, resizeMode: "contain"}} />

                                            <View style={{marginLeft: 15}}>
                                                <Text style={{fontSize: 17}}>{bankName}</Text>
                                                <Text style={{color: "rgba(0, 0, 0, .6)", marginTop: 10}}>{accountNo}</Text>
                                            </View>
                                        </View>

                                        <View style={{width: 15, height: 15, backgroundColor: "rgba(0, 0, 0, .07)", borderRadius: 50, alignItems: "center", justifyContent: "center"}}>
                                            {chosenAccount === id && <View style={{width: 10, height: 10, backgroundColor: colors.primary, borderRadius: 50}}></View>}
                                        </View>

                                    </TouchableOpacity>
                                )
                            }}

                        />

                        <TouchableOpacity style={{paddingVertical: 15, width: "100%", paddingHorizontal: 10, alignItems: "center", justifyContent: "center", borderRadius: 10, borderWidth: 2, borderColor: colors.primary, marginTop: 20}}>
                            <Text style={{color: colors.primary, fontSize: 18}}>Add New Account</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>

            <View style={{backgroundColor: "white", width: "100%", paddingVertical: 30, paddingHorizontal: 20}}>

                <Button buttonDisabled={chosenAccount === ""}>

                    <Text style={{color: "white", fontSize: 17}}>Withdraw</Text>

                </Button>

                

            </View>



        </SafeAreaView>
    )
}

export default BankList

const styles = StyleSheet.create({})