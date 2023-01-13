import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Button, LogoHeader, UserCard, UserTypeList } from '../components';
import { userTypeLinks } from '../assets/data/data';
import { useRegisterContext, useUserContext } from '../context';
import translate from '../translation';
import { useIsFocused } from '@react-navigation/native';

const UserType = ({navigation}) => {

  const {parentContainerStyle, buttonText, pDefault}= AllStyle;

  const [user, setUser] = useState("")
  const {registerDetails, setRegisterDetails} = useRegisterContext();

  const isFocused = useIsFocused();
  const {userDetails} = useUserContext();
  useEffect(() => {

    if (userDetails) {

      navigation.navigate("Home");

    }
  }, [userDetails, navigation, isFocused])

  return (
    <SafeAreaView>
        <ScrollView scrollEnabled={true} contentContainerStyle={{...parentContainerStyle}}>

          <View style={{width: "100%", height: "auto", height: "100%", justifyContent: "space-between", paddingHorizontal: 20}}>

            <LogoHeader />

            <View style={{width: "100%", alignItems: "center", marginVertical: 20}}>

              <Text style={{...pDefault, fontSize: 22}}>{translate.t("userTypeQuestion")}</Text>


              <FlatList
                contentContainerStyle={{width: "100%", justifyContent: "center", marginTop: 40, paddingHorizontal: 10}}
                style={{paddingHorizontal: 10}}
                horizontal={true}
                data={userTypeLinks}
                renderItem={({item, index})=>{
                return(
                    <UserCard index={index} active={registerDetails.userType.toLowerCase()=== item.label.toLowerCase()? true : false } onElementClick={(value)=>{

                      setRegisterDetails(prevState => {
                        return({
                          ...prevState,
                          userType: value
                        })
                      })

                    }} data={item} />
                )
                }}
                keyExtractor={(item)=>item.label}
                
            />
              

            </View>

            <Button onPress={()=>{
              navigation.navigate("Login")
            }} buttonDisabled={registerDetails.userType === ""? true: false }>
              <Text style={{...buttonText}}>{translate.t("next")}</Text>
            </Button>

          </View>


        </ScrollView>

    </SafeAreaView>
  )
}

export default UserType

const styles = StyleSheet.create({})