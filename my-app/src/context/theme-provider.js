import { useState } from "react";
import { themeContext } from "./theme-context"

const lightTheme={
    primary:"primary",
    succes:"success",
    info:"warning",
    light:"light"
}

const darkTheme={
    primary:"secondary",
    succes:"info",
    info:"danger",
    light:"dark"
} 


function ThemeProvider({children}){
    let [theme, updateTheme] = useState(lightTheme);
    
    const changeTheme= ()=>{
        updateTheme(v=> v === lightTheme ? darkTheme : lightTheme)        
    }

    return(
        <themeContext.Provider value={[theme, updateTheme, changeTheme]}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider;