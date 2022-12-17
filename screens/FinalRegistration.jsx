import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Button, HeaderOne, LogoHeader } from '../components';
import {useRegisterContext} from "../context"
import { FontAwesome } from '@expo/vector-icons';

const FinalRegistration = ({navigation}) => {

    const {registerDetails, setRegisterDetails} = useRegisterContext();

    const { userDetails } = useUserContext();

    useEffect(() => {

        if (userDetails) {

            navigation.navigate("Home");

        }
    }, [userDetails, navigation])

    const {parentContainerStyle, h1, p, label, loginInput, textInputStyle, pDefault, buttonText} = AllStyle;

  return (
    <SafeAreaView>
        <ScrollView scrollEnabled={true} contentContainerStyle={{...parentContainerStyle, width: "100%", justifyContent: "space-between"}}>

            <View style={{...styles.loginContainer, width: "100%"}} >

                {/* <HeaderOne></HeaderOne> */}

                <LogoHeader />

                <Text style={{...h1, fontFamily: "Roboto_700Bold"}}>Vehicle details</Text>

                <Text style={{...p, color: "rgba(0, 0, 0, .4)"}}>Add Vehicle information</Text>

                <View style={{width: "100%"}}>

                    <Text style={{...label, width: "100%", marginTop: 20}}>Vehicle Type</Text>

                    <View style={{...loginInput, marginTop: 20}}>

                        <TouchableOpacity style={{height: "100%", width: "100%", alignItems: "center", flexDirection: "row"}}>
                            {registerDetails.vehicleType === ""? <Text style={{...textInputStyle, color: "rgba(0, 0, 0, .3)", paddingHorizontal: 15, flex: 9}}>Select Type</Text>: <Text style={{...textInputStyle, color: "rgba(0, 0, 0, .4)", paddingHorizontal: 15, flex: 9}}>{registerDetails.vehicleType}</Text>}

                            <FontAwesome name="angle-down" size={24} color="rgba(0, 0, 0, .3)" style={{alignItems: "flex-end", flex: 1}}/>
                        </TouchableOpacity>

                    </View>

                    <Text style={{...label, width: "100%", marginTop: 20}}>Brand</Text>

                    <View style={{...loginInput, marginTop: 20}}>

                        <TouchableOpacity style={{height: "100%", width: "100%", alignItems: "center", flexDirection: "row"}}>
                            {registerDetails.vehicleBrand === ""? <Text style={{...textInputStyle, color: "rgba(0, 0, 0, .3)", paddingHorizontal: 15,  flex: 9}}>Select 
                            </Text>: <Text style={{...textInputStyle, color: "rgba(0, 0, 0, .4)", paddingHorizontal: 15,  flex: 9}}>{registerDetails.vehicleBrand}</Text>}

                            <FontAwesome name="angle-down" size={24} color="rgba(0, 0, 0, .3)" style={{alignItems: "flex-end", flex: 1}}/>
                        </TouchableOpacity>

                    </View>

                    <Text style={{...label, width: "100%", marginTop: 20}}>Model</Text>

                    <View style={{...loginInput, marginTop: 20}}>

                        <TouchableOpacity style={{height: "100%", width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                            {registerDetails.model === ""? <Text style={{...textInputStyle, color: "rgba(0, 0, 0, .3)", paddingHorizontal: 15, flex: 9}}>Select 
                            </Text>: <Text style={{...textInputStyle, color: "rgba(0, 0, 0, .4)", paddingHorizontal: 15, flex: 9}}>{registerDetails.model}</Text>}

                            <FontAwesome name="angle-down" size={24} color="rgba(0, 0, 0, .3)" style={{alignItems: "flex-end", flex: 1}}/>
                        </TouchableOpacity>

                    </View>

                    <Text style={{...label, width: "100%", marginTop: 20}}>Number</Text>

                    <View style={{...loginInput, marginTop: 20}}>

                        <TextInput 
                            autoComplete='off' 
                            dataDetectorTypes="phoneNumber" 
                            keyboardType="number-pad" 
                            style={{...textInputStyle, paddingHorizontal: 15}} 
                            placeholder="Enter number" 
                            value={registerDetails.number} 
                            onChangeText={(text)=>{
                                setRegisterDetails(prevState => {
                                    return(
                                        {
                                            ...prevState,
                                            number: text
                                        }
                                    )
                                })
                            }}
                        />

                    </View>

                    <Text style={{...label, width: "100%", marginTop: 20}}>Insurance Number</Text>

                    <View style={{...loginInput, marginTop: 20}}>

                        <TextInput 
                            autoComplete='off' 
                            dataDetectorTypes="phoneNumber" 
                            keyboardType="number-pad" 
                            style={{...textInputStyle, paddingHorizontal: 15}} 
                            placeholder="Enter number" 
                            value={registerDetails.insuranceNumber} 
                            onChangeText={(text)=>{
                                setRegisterDetails(prevState => {
                                    return(
                                        {
                                            ...prevState,
                                            insuranceNumber: text
                                        }
                                    )
                                })
                            }}
                        />

                    </View>

                    <Button onPress={()=>{
                            navigation.navigate("Verification")
                        }} buttonDisabled={true}>
                        <Text style={buttonText}>FINISH</Text>
                    </Button>


                </View>

            </View>


        </ScrollView>

    </SafeAreaView>
  )
}

export default FinalRegistration

const styles = StyleSheet.create({
    loginContainer: {
        paddingHorizontal: 25,
        width: "100%",
        paddingVertical: 0,
        alignItems: "center"
    }
})