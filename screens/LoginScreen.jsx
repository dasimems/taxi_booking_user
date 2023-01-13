import { StyleSheet, Image, Text, View, SafeAreaView, Pressable, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { CountryList, LogoHeader } from '../components';
import { icons } from '../assets/data/data';
import {Button} from "../components"
import { FontAwesome } from '@expo/vector-icons'; 
import { useParamsContext, useRegisterContext, useUserContext } from '../context';

import { getLocales, getCalendars } from 'expo-localization';
import translate from '../translation';

const LoginScreen = ({navigation}) => {


    const { setActiveParam } = useParamsContext();

    const { userDetails } = useUserContext()

    const { registerDetails, setRegisterDetails } = useRegisterContext();

    const [search, setSearchValue] = useState("")

    const [countryMenuOpened, setCountryMenuOpened] = useState(false)

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(()=>{

        var { phoneNumber } = registerDetails;

        if(phoneNumber.length > 8){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)

        }

    }, [registerDetails])
    
    useEffect(() => {

        if(userDetails){

            navigation.navigate("Home");

        }
     }, [userDetails, navigation])

    const {parentContainerStyle, h1, p, container, label, loginInput, textInputStyle, buttonText, otherButton, buttonTextTwo, buttonIcons, linkStyle, pDefault, dividerText, divider, dividerContainer, absolute} = AllStyle;

    const {google, apple, faceId} = icons;
    


  return (
    <SafeAreaView>
        <ScrollView scrollEnabled={true} contentContainerStyle={{...parentContainerStyle, width: "100%", height: "100%", justifyContent: "space-between"}}>

            <View style={{...styles.loginContainer}} >

                <LogoHeader />

                  <Text style={{ ...h1, fontFamily: "Roboto_700Bold" }}>{translate.t("loginTitle")}</Text>
                  {/* <Text style={{ color: "rgba(0, 0, 0, 1)" }}>Carmee,</Text> */}

                  <Text style={p}>{translate.t("loginSubtitle", { appName: "CarMee" })}</Text>

                  <Text style={{ ...label, width: "100%", marginTop: 20 }}>{translate.t("phoneRequestLabel")}</Text>

                <View style={{...loginInput, marginTop: 20}}>

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

                          <Image source={{ uri: `https://countryflagsapi.com/png/${registerDetails.countryCode.toLowerCase()}`}} style={{width: 20, height: 20, resizeMode: "cover", borderRadius: 20}} />

                          <Text style={{ fontSize: 18, marginLeft: 10 }}>+{registerDetails.mobileCode}</Text>

                        <FontAwesome name="angle-down" size={17} color="rgba(0, 0, 0, .3)" style={{marginLeft: 5}} />

                    </TouchableOpacity>

                    <TextInput 
                        autoComplete='tel-device' 
                        dataDetectorTypes="phoneNumber" 
                        keyboardType="phone-pad" 
                        style={textInputStyle} 
                          placeholder={translate.t("phoneRequestLabel")} 
                          value={registerDetails.phoneNumber} 
                        onChangeText={(text)=>{
                            setRegisterDetails(prevState => {
                                return (
                                    {
                                        ...prevState,
                                        phoneNumber: text
                                    }
                                )
                            })
                        }}
                    />

                </View>
                
                
            </View>

            {/* <Pressable style={{marginTop: 40, alignItems: "center"}}>

                <Image source={faceId} style={{width: 31}} />

            </Pressable> */}

            <View style={{...styles.loginContainer}} >

                <Button buttonDisabled={buttonDisabled} onPress={()=>{
                      navigation.navigate("Verification");
                      setActiveParam("Verification");
                }}>
                      <Text style={buttonText}>{translate.t("continue")}</Text>
                </Button>

                <View style={{flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom: 0}}>
                      <Text style={{ ...pDefault }}>{translate.t("nonUserQuestion")}</Text>

                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Register")
                      }}><Text style={{ ...pDefault, ...linkStyle, marginLeft: 5 }}>{translate.t("register")}</Text></TouchableOpacity>
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

                      setRegisterDetails(prevState => {
                          return ({
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