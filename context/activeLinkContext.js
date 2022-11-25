import React, { useContext, useState } from "react";

const ParamsContext = React.createContext();

export const ParamsProvider = ({children}) => {

    const [activeParam, setActiveParam] = useState("")
    return(
        <ParamsContext.Provider value={{activeParam, setActiveParam}}>
            {children}
        </ParamsContext.Provider>
    )
}

const useParamsContext = () => {
    return useContext(ParamsContext);
}

export default useParamsContext;