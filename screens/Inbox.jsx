import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { ChatCard, Header, Nav } from '../components';
import { useParamsContext } from '../context';
import { chats, statusBarHeight, windowHeight } from '../assets/data/data';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import translate from '../translation';
import { useIsFocused } from '@react-navigation/native';

const Inbox = ({ route }) => {
    const { parentContainerStyle, loginInput, textInputStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [searchOpened, setSearchOpened] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const searchRef = useRef()
    const isFocused = useIsFocused();


    useEffect(() => {

        if(isFocused){

            setActiveParam(active);
        }

    }, [active, isFocused])

    useEffect(()=>{

        if(searchOpened){
            searchRef.current.focus();
        }

    }, [searchOpened])

    const { h1 } = AllStyle;

    return (
        <SafeAreaView style={{height: "100%"}}>

            <Header onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>

                <View style={{ marginVertical: 30, alignItems: "center", justifyContent: "space-between", flexDirection: "row"}}>

                    {!searchOpened && <Text style={{ ...h1, textAlign: "left" }}>{translate.t("message")}</Text>}

                    {searchOpened? 
                    
                    (
                        <View style={{...loginInput, marginTop: 0}}>

                            <TextInput 
                                ref={searchRef}
                                style={{...textInputStyle, paddingHorizontal: 15}}
                                placeholder="Search text..."
                                value={searchValue}
                                onChangeText={(text)=>{
                                    setSearchValue(text)
                                }}

                            />

                            <TouchableOpacity style={{position: "absolute", right: 10, height: "100%", justifyContent: "center"}} onPress={()=>{
                                setSearchOpened(false)
                            }}>

                                <MaterialIcons name="cancel" size={24} color="rgba(0, 0, 0, .4)" />

                            </TouchableOpacity>

                        </View>
                    ) : (
                        <TouchableOpacity onPress={()=>{
                            setSearchOpened(true);
                        }}>

                            <Text><FontAwesome name="search" size={24} color="black" /></Text>
                            
                        </TouchableOpacity>
                    ) }

                </View>

                
            </Header>


            <View style={{ height: windowHeight - (headerHeight - statusBarHeight) }}>

                <ScrollView scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", justifyContent: "space-between", paddingTop: 0 }}>

                    <View style={{paddingHorizontal: 20}}>

                        <FlatList
                            data={chats}
                            extraData={chats}
                            keyExtractor={(item, index)=> index}
                            renderItem={({item})=>{

                                return(
                                    
                                    <ChatCard data={item} />
                                )
                            }}

                        />

                    </View>

                </ScrollView>

            </View>


            <Nav onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setNavHeight(height)

            }} />

        </SafeAreaView>
    )
}

export default Inbox

const styles = StyleSheet.create({})