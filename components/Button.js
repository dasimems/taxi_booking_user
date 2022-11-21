import { TouchableOpacity, Text, Pressable } from 'react-native'
import React from 'react'
import AllStyle from '../assets/styles/Styles'

const Button = ({buttonDisabled, children}) => {

    const {buttonDisabledStyle, buttonStyle} = AllStyle

  return (
    <>
    
        {buttonDisabled? (

            <Pressable style={buttonDisabledStyle}>
                {children}
            </Pressable>
            
        ) : (
            <TouchableOpacity style={buttonStyle}>
                {children}
            </TouchableOpacity>
        )}

    </>
  )
}

export default Button;