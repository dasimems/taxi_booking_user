import { StyleSheet, Image, Text, View, SafeAreaView, Pressable, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { CountryList, LogoHeader } from '../components';
import { icons } from '../assets/data/data';
import {Button} from "../components"
import { FontAwesome } from '@expo/vector-icons'; 

const LoginScreen = ({navigation}) => {

    
    const [formState, setFormState] = useState({
        mobileCode: "1",
        countryCode: "us",
        phoneNumber: "",
        countryName: "united state of america"
        
    });

    const [search, setSearchValue] = useState("")

    const [countryMenuOpened, setCountryMenuOpened] = useState(false)

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(()=>{

        var {phoneNumber} = formState;

        if(phoneNumber.length > 8){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)

        }

    }, [formState])

    const {parentContainerStyle, h1, p, container, label, loginInput, textInputStyle, buttonText, otherButton, buttonTextTwo, buttonIcons, linkStyle, pDefault, dividerText, divider, dividerContainer, absolute} = AllStyle;

    const {google, apple, faceId} = icons;
    


  return (
    <SafeAreaView>
        <ScrollView scrollEnabled={true} contentContainerStyle={parentContainerStyle}>

            <LogoHeader />

            <View style={styles.loginContainer}>

                <Text style={{...h1, fontFamily: "Roboto_700Bold"}}>Login to your account</Text>

                <Text style={p}>Welcome back to <Text style={{color: "rgba(0, 0, 0, 1)"}}>Carmee,</Text> enter your details below to continue.</Text>

                <View style={container}>

                    <Text style={label}>Enter your phone</Text>

                    <View style={loginInput}>

                        <TouchableOpacity style={{
                            height: "100%",
                            paddingHorizontal: 12,
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row"
                        }}
                        
                        onPress={()=>{
                            setCountryMenuOpened(true)
                        }}

                        >

                            <Image source={{uri: `https://countryflagsapi.com/png/${formState.countryCode.toLowerCase()}`}} style={{width: 20, height: 20, resizeMode: "cover", borderRadius: 20}} />

                            <Text style={{fontSize: 18, marginLeft: 10}}>+{formState.mobileCode}</Text>

                            <FontAwesome name="angle-down" size={17} color="rgba(0, 0, 0, .3)" style={{marginLeft: 5}} />

                        </TouchableOpacity>

                        <TextInput 
                            autoComplete='tel-device' 
                            dataDetectorTypes="phoneNumber" 
                            keyboardType="phone-pad" 
                            style={textInputStyle} 
                            placeholder="Enter your phone" 
                            value={formState.phoneNumber} 
                            onChangeText={(text)=>{
                                setFormState(prevState => {
                                    return(
                                        {
                                            ...prevState,
                                            phoneNumber: text
                                        }
                                    )
                                })
                            }}
                        />

                    </View>
                    
                    <Pressable style={{marginTop: 40, alignItems: "center"}}>

                        <Image source={faceId} style={{width: 31}} />

                    </Pressable>

                    <Button buttonDisabled={buttonDisabled}>
                        <Text style={buttonText}>Continue</Text>
                    </Button>

                    <View style={dividerContainer}>
                    <View style={divider}></View>
                        <Text style={dividerText}>OR</Text>
                        <View style={divider}></View>
                    </View>

                    <TouchableOpacity style={otherButton}>
                        <Image source={google} style={buttonIcons} /><Text style={buttonTextTwo}>Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={otherButton}>
                        <Image source={apple} style={buttonIcons} /><Text style={buttonTextTwo}>Continue with Apple</Text>
                    </TouchableOpacity>

                    <View style={{...container, flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom: 0}}>
                        <Text style={{...pDefault}}>Don't have an account?</Text>

                        <TouchableOpacity onPress={()=>{
                            navigation.navigate("UserType")
                        }}><Text style={{...pDefault, ...linkStyle, marginLeft: 5}}>Register</Text></TouchableOpacity>
                    </View>
                    
                

                </View>


                

            </View>
            

        </ScrollView>

        {countryMenuOpened? <View style={{...absolute, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, .1)", bottom: 0}}>

            <Pressable onPress={()=>{
                setCountryMenuOpened(false)
            }} style={{...absolute, width: "100%", height: "14%", top: 0}}></Pressable>

            <View style={{...absolute, width: "100%", height: "85%", backgroundColor: "white", bottom: 0, borderTopRightRadius: 40, borderTopLeftRadius: 40, paddingHorizontal: 25}}>

                <View style={loginInput}>
                    <TextInput 
                        placeholder='Search'
                        style={{...textInputStyle, fontSize: 16, width: "100%", paddingHorizontal: 20}}
                        value={search}
                        onChangeText={(text)=>{
                            setSearchValue(text)
                        }}
                    />
                </View>
                
                <CountryList searched={search} onValuePicked={(item)=>{

                    setFormState(prevState => {
                        return({
                            ...prevState,
                            mobileCode: item["dial_code"].slice(1,),
                            countryCode: item.code.toLowerCase(),
                            countryName: item.name

                        })
                    })
                    setCountryMenuOpened(false)

                }} />

            </View>
        </View>: null}

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginContainer: {
        paddingHorizontal: 25,
        width: "100%",
        paddingVertical: 0,
        alignItems: "center"
    }
})