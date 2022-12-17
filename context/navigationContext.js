import React, { useContext } from "react";

const NavigationContext = React.createContext();

export const NavigationProvider = ({ children }) => {

    return (
        <NavigationContext.Provider>

            {children}

        </NavigationContext.Provider>
    )

}


const useNavigationContext = () => {

    return useContext(NavigationContext);

}

export default useNavigationContext();