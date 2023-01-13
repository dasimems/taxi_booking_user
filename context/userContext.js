import React, {useContext, useReducer} from "react";

const UserContext  = React.createContext();

const initialValue = {
    userDetails: null,
    token: ""
}


const reducer = (state, action) => {

    const {type, payload} = action;

    switch(type){

        case "addDetails":
            
            return {...state, userDetails: payload};

            case "addToken":

        return {...state, token: payload};


        case "removeDetails":

            return initialValue;

        default: 

        return state;
        
    }
}

export const UserProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialValue);
    
    const addUserDetails = (details) => {

        return new Promise((resolve, reject) => {
            
            if(details){

                dispatch({type: "addDetails", payload: details})

                resolve({
                    response: "User details saved successfully"
                })
                
            }else{
                reject({
                    response: "user details not sent"
                })
            }
        })

    }

    const removeUserDetails = () => {

        return new Promise((resolve, reject) => {

            dispatch({ type: "removeDetails"})

            resolve({
                response: "User details removed successfully"
            })

            
        })

    }

    const addUserToken = (details) => {

        return new Promise((resolve, reject) => {
            
            if(details){

                dispatch({type: "addToken", payload: details})

                resolve({
                    response: "User token saved successfully"
                })
                
            }else{
                reject({
                    response: "user token not sent"
                })
            }
        })

    }

    return(
        <UserContext.Provider value={{ ...state, addUserDetails, removeUserDetails, addUserToken }}>

            {children}
        
        </UserContext.Provider>
    )

}


const useUserContext = () => {

    return useContext(UserContext);

}

export default useUserContext;
