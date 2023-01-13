import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Button, Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { statusBarHeight, windowHeight, withdrawalOptions } from '../assets/data/data';
import { useIsFocused } from '@react-navigation/native';

import { Fontisto } from '@expo/vector-icons';

const NewAccount = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active, bankType } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const isFocused = useIsFocused();

    const [newBankFromDetails, setNewBankFormDetails] = useState({
        bankName: "",
        branchName: "",
        accountNumber: "",
        accountHolderName: ""
    })

    const [buttonEnabled, setButtonEnabled] = useState(false)

    const [bankImage, setBankImage] = useState(null)

    const {loginInput} = AllStyle;

    useEffect(() => {

        setActiveParam(active);

    }, [active, isFocused])

    useEffect(() => {
        var activeWithdrawOption = withdrawalOptions.filter(option => option.link === bankType);

        setBankImage(activeWithdrawOption[0])

    }, [bankType])

    useEffect(()=>{

        var {bankName, branchName, accountNumber, accountHolderName} = newBankFromDetails;

        if (bankName.trim() !== "" && branchName.trim() !== "" && accountNumber.trim() !== "" && accountHolderName.trim() !== ""){
            setButtonEnabled(true)
        }

    }, [newBankFromDetails])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView style={{height: "100%"}}>

            <Header onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>
                
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 15 }}>

                    <TouchableOpacity onPress={() => {
                        navigation.navigate("BankList", {bankType})
                        setActiveParam("BankList");
                    }}>

                        <Fontisto name='angle-left' size={18} color="black" />

                    </TouchableOpacity>

                    <Text style={{ ...h1, textAlign: "left", marginLeft: 10 }}>Add New {bankImage?.label}</Text>


                </View>

            </Header>


            <View style={{ flex: 1 }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingBottom: (navHeight + 20), paddingTop: 0 }}>

                    <View style={{paddingHorizontal: 20, width: "100%"}}>

                        <View style={{ ...loginInput }}>

                            <TouchableOpacity style={{width: "100%", paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                <Text style={{ color: newBankFromDetails.bankName.trim() === "" ? "rgba(0, 0, 0, .4)" : "black", fontSize: 17 }}>{newBankFromDetails.bankName.trim() === "" ? "Bank Name" : newBankFromDetails.bankName}</Text>
                                <Fontisto name="angle-down" color="rgba(0, 0, 0, .2)" size={14} />
                            </TouchableOpacity>

                        </View>

                        <View style={{ ...loginInput }}>

                            <TouchableOpacity style={{ width: "100%", paddingHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: newBankFromDetails.branchName.trim() === "" ? "rgba(0, 0, 0, .4)" : "black", fontSize: 17 }}>{newBankFromDetails.branchName.trim() === "" ? "Branch Name" : newBankFromDetails.branchName}</Text>
                                <Fontisto name="angle-down" color="rgba(0, 0, 0, .2)" size={14} />
                            </TouchableOpacity>

                        </View>

                        <View style={{ ...loginInput }}>

                            <TextInput 
                                style={{paddingHorizontal: 10, fontSize: 17}}
                                placeholder="Account Number"
                                keyboardType='number-pad'
                                value={newBankFromDetails.accountNumber}
                                onChangeText={(text)=>{

                                    setNewBankFormDetails(prevForm => {
                                        return({
                                            ...prevForm,
                                            accountNumber: text
                                        })
                                    })

                                }}

                            />

                        </View>

                        <View style={{ ...loginInput }}>

                            <TextInput
                                style={{ paddingHorizontal: 10, fontSize: 17 }}
                                placeholder="Account Holder's Name"
                                value={newBankFromDetails.accountHolderName}
                                onChangeText={(text) => {

                                    setNewBankFormDetails(prevForm => {
                                        return ({
                                            ...prevForm,
                                            accountHolderName: text
                                        })
                                    })

                                }}

                            />

                        </View>

                    </View>


                </ScrollView>

            </View>

            <View style={{ backgroundColor: "white", width: "100%", paddingVertical: 30, paddingHorizontal: 20 }}>

                <Button buttonDisabled={buttonEnabled}>

                    <Text style={{ color: "white", fontSize: 17 }}>Add</Text>

                </Button>



            </View>


            

        </SafeAreaView>
    )
}

export default NewAccount

const styles = StyleSheet.create({})