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

    const setFrom = (details) => {
        return new Promise((resolve, reject) => {

            if(details){
                dispatch({type: "setFrom", payload: details})
                resolve({response: "From location saved successfully"})
            }else{
                reject({
                    response: "From Location not included" 
                })

            }

        })
    }

    const setTo = (details) => {
        return new Promise((resolve, reject) => {

            if (details) {
                dispatch({ type: "setTo", payload: details })
                resolve({ response: "To location saved successfully" })
            } else {
                // reject({
                //     response: "To Location not included"
                // })

                dispatch({ type: "setTo", payload: "" })

            }

        })
    }

    const setPresent = (details) => {
        return new Promise((resolve, reject) => {

            if (details) {
                dispatch({ type: "present", payload: details })
                resolve({ response: "Present location saved successfully" })
            } else {
                reject({
                    response: "Present Location not included"
                })

            }

        })
    }

    return (
        <NavigationContext.Provider value={{ locationState: state, setFrom, setTo, setPresent }}>

            {children}

        </NavigationContext.Provider>
    )

}


const useNavigationContext = () => {

    return useContext(NavigationContext);

}

export default useNavigationContext;