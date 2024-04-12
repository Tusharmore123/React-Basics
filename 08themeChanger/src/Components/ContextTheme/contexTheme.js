import React from 'react'
import {useContext} from 'react'
export const ThemeContext=React.createContext(
    {
        themeMode:"light",
        darkMode:()=>{},
        lightMode:()=>{}
    }
);
export const ThemeContextProvider=ThemeContext.Provider;
export function useTheme(){
    return useContext(ThemeContext);
};

