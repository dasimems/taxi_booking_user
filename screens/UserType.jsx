import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Button, LogoHeader, UserCard, UserTypeList } from '../components';
import { userTypeLinks } from '../assets/data/data';
import { useRegisterContext } from '../context';

const UserType = ({navigation}) => {

  const {parentContainerStyle, buttonText, pDefault}= AllStyle;

  const [user, setUser] = useState("")
  const {registerDetails, setRegisterDetails} = useRegisterContext();

  return (
    <SafeAreaView>
        <ScrollView scrollEnabled={true} contentContainerStyle={{...parentContainerStyle}}>

          <View style={{width: "100%", height: "auto", height: "100%", justifyContent: "space-between", paddingHorizontal: 20}}>

            <LogoHeader />

            <View style={{width: "100%", alignItems: "center", marginVertical: 20}}>

              <Text style={{...pDefault, fontSize: 22}}>Are you a</Text>


              <FlatList
                contentContainerStyle={{width: "100%", justifyContent: "center", marginTop: 40}}
                horizontal={true}
                data={userTypeLinks}
                renderItem={({item})=>{
                return(
                    <UserCard active={registerDetails.userType.toLowerCase()=== item.label.toLowerCase()? true : false } onElementClick={(value)=>{

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
              navigation.navigate("Register")
            }} buttonDisabled={registerDetails.userType === ""? true: false }>
              <Text style={{...buttonText}}>Next</Text>
            </Button>

          </View>


        </ScrollView>

    </SafeAreaView>
  )
}

export default UserType

const styles = StyleSheet.create({})