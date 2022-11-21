import { StyleSheet, Image, Text, View, SafeAreaView, Pressable, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { LogoHeader } from '../components';
import { icons } from '../assets/data/data';
import {Button} from "../components"

const LoginScreen = () => {

    
    const [formState, setFormState] = useState({
        countryCode: "1",
        countryImage: "",
        phoneNumber: ""
    });

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(()=>{

        var {phoneNumber} = formState;

        if(phoneNumber.length > 8){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)

        }

    }, [formState])

    const {parentContainerStyle, h1, p, container, label, loginInput, buttonDisabledStyle, buttonStyle, textInputStyle, buttonText, otherButton, buttonTextTwo, buttonIcons, linkStyle, pDefault, dividerText, divider, dividerContainer} = AllStyle;

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
                            paddingHorizontal: 20,
                            justifyContent: "center"
                    
                        }}>
                            <Text style={{fontSize: 18}}>+{formState.countryCode}</Text>
                        </TouchableOpacity>

                        <TextInput 
                            autoComplete='tel' 
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

                        <TouchableOpacity><Text style={{...pDefault, ...linkStyle, marginLeft: 5}}>Register</Text></TouchableOpacity>
                    </View>
                    

                </View>


                

            </View>

        </ScrollView>
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