
import React, { useContext, useState } from 'react'

var RegisterContext = React.createContext();

export const RegisterProvider = ({children}) => {

    const [registerDetails, setRegisterDetails] = useState({
        userType: "",
        phoneNumber: "",
        countryCode: "",
        passCodeSet: false,
        passCode: "",
        faceSet: false,
        vehicleType: "",
        vehicleBrand: "",
        model: "",
        number: "",
        insuranceNumber: ""
    })

  return (

    <RegisterContext.Provider value={{registerDetails, setRegisterDetails}}>

        {children}

    </RegisterContext.Provider>
    
  )
}

const useRegisterContext = ()=>{
    return useContext(RegisterContext);
}

export default useRegisterContext