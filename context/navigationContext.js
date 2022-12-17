import React, { useContext, useReducer } from "react";


const initialValue = {
    from: "",
    to: "",
    present: ""
}

const reducer = (state, action) => {

    var {type, payload} = action;

    switch(type){

        case "setFrom":

            return {...state, from: payload}

        case "setTo":

            return { ...state, to: payload }

        case "present":

            return { ...state, present: payload }

        default: 

            return state;

    }
}

var NavigationContext = React.createContext();

export const NavigationProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <NavigationContext.Provider value={{ ...state }}>

            {children}

        </NavigationContext.Provider>
    )

}


const useNavigationContext = () => {

    return useContext(NavigationContext);

}

export default useNavigationContext;