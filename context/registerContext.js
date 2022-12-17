
import React, { useContext, useState } from 'react'

var RegisterContext = React.createContext();

export const RegisterProvider = ({children}) => {

  const initialState = {
    userType: "",
    phoneNumber: "",
    countryCode: "us",
    mobileCode: "1",
    countryName: "America",
    passCodeSet: false,
    passCode: "",
    faceSet: false,
    vehicleType: "",
    vehicleBrand: "",
    model: "",
    number: "",
    insuranceNumber: ""
  }

  const [registerDetails, setRegisterDetails] = useState(initialState)

    const clearRegDetails = () => {

      return new Promise((resolve, reject) => {
        setRegisterDetails(initialState)
        resolve({response: "Registered Details Cleared Successfully"});
      })

    }

  return (

    <RegisterContext.Provider value={{ registerDetails, setRegisterDetails, clearRegDetails }}>

        {children}

    </RegisterContext.Provider>
    
  )
}

const useRegisterContext = ()=>{

    return useContext(RegisterContext);
}

export default useRegisterContext