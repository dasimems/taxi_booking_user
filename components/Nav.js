import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native'
import React, { memo } from 'react'
import { navLinks } from '../assets/data/data'
import { useParamsContext } from '../context'
import { useNavigation } from '@react-navigation/native'


const Nav = ({style, ...props}) => {

    const {activeParam, setActiveParam} = useParamsContext();
    const navigation = useNavigation();


  return (


    <>
          <View elevation={3} {...props} style={{
            ...style,
            width: "100%",
            shadowColor: "#000",
            shadowOffset: {
            width: 2,
            height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 10,
            borderRadius: 10,
            position: "absolute",
            bottom: 0,
            left: 0,
            alignItems: "center",
            justifyContent: "center"
      
        }}>

            <View style={{width: "100%", marginTop: 2, backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 15}}>

                <FlatList
                    data={navLinks}
                    keyExtractor={(item)=>item.label}
                    numColumns={navLinks.length}
                    columnWrapperStyle={{
                        flex: 1,
                        justifyContent: "space-around"
                    }}
                    renderItem={({item})=>{
                        const {label, inActiveIcon, activeIcon} = item;
                        return(

                            activeParam.toLowerCase() === label.toLowerCase() ? (

                                <Pressable style={{ flex: 1 / navLinks.length, alignItems: "center" }}>

                                    <Image source={activeParam.toLowerCase() === label.toLowerCase() ? activeIcon : inActiveIcon} style={{ width: 20, height: 20, resizeMode: "contain", marginBottom: 9 }} />

                                    <Text style={{ width: "100%", textAlign: "center", color: "rgba(0, 0, 0, .5)", fontSize: 14 }}>{item.label}</Text>

                                </Pressable>

                            ) :(
                            
                            <TouchableOpacity onPress={()=> {
                                navigation.navigate(label);
                                setActiveParam(label);
                            }} style={{flex: 1/ navLinks.length, alignItems: "center"}}>

                                <Image source={activeParam.toLowerCase() === label.toLowerCase()? activeIcon: inActiveIcon} style={{width: 20, height: 20, resizeMode: "contain", marginBottom: 9}} />    

                                <Text style={{width: "100%", textAlign: "center", color: "rgba(0, 0, 0, .5)", fontSize: 14}}>{item.label}</Text>

                            </TouchableOpacity>)
                        )
                    }}
                />
            </View>

        </View>
    
    </>
  )
}

export default memo(Nav)

const styles = StyleSheet.create({})