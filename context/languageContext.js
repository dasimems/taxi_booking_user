import React, { useContext, useEffect, useState, useCallback } from 'react'
import { getLocales, getCalendars } from 'expo-localization';
import translate from '../translation';

const LanguageContext = React.createContext();

export const LanguageProvider = ({children}) => {
    const appLocale = getLocales();

    const setLanguageCode = useCallback((code) => {

        translate.locale = code;

    }, [translate])

    useEffect(()=>{

        setLanguageCode(appLocale[0].languageCode);

    }, [])

  return (
    <LanguageContext.Provider value={{setLanguageCode}}>

        {children}
      
    </LanguageContext.Provider>
  )
}

const useLanguageContext = () => {

    return useContext(LanguageContext);

}

export default useLanguageContext
