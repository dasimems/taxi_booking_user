import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors, windowWidth } from '../assets/data/data';
import { Ionicons } from '@expo/vector-icons';
import AllStyle from '../assets/styles/Styles';

const MessageNav = ({style, ...props}) => {

    const [messageValue, setMessageValue] = useState("");
    const  {textInputStyle} = AllStyle;
    const inputRef = useRef("")
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [isSearchFocus, setSearchFocus] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);

                var { endCoordinates } = Keyboard["_currentlyShowing"];

                if (endCoordinates.height){

                    setKeyboardHeight(endCoordinates.height)

                }
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    

  return (
      <View {...props} style={{
        ...style,
        width: "100%",
        position: "absolute",
        bottom: isKeyboardVisible && isSearchFocus? keyboardHeight : 0,
        left: 0,
          backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "center"
}}>
        
        <View style={{width: "100%", flexDirection: "row", padding: 20, alignItems: "center", justifyContent: "space-between"}}>

            <TouchableOpacity style={{borderWidth: 2, borderColor: colors.primary, borderRadius: 5, borderBottomLeftRadius: 0, justifyContent: "center", alignItems: "center"}}>

                <Ionicons name="add" size={20} color={colors.primary} />

            </TouchableOpacity>

            <TextInput
             style={{...textInputStyle, fontSize: 14, paddingHorizontal: 20, width: (windowWidth - 120),backgroundColor: "white", borderRadius: 70, minHeight: 45, paddingVertical: 5, maxHeight: 100}}
             onFocus={()=>{
                setSearchFocus(true)
             }}
             onBlur={()=>{
                setSearchFocus(false)
             }}
             placeholder="Message"
             multiline
             ref={inputRef}
             value={messageValue}
             onChangeText={(text)=>{
                setMessageValue(text)
             }}

            />

            <TouchableOpacity style={{ justifyContent: "center", alignItems: "center"}}>

                <Ionicons name="ios-paper-plane" size={24} color={colors.primary} />

            </TouchableOpacity>

        </View>
    </View>
  )
}

export default MessageNav

const styles = StyleSheet.create({})