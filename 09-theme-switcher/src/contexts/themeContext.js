import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },

}); // Create Context and assign

export const ThemeProvider = ThemeContext.Provider;

export default function UseTheme(params) {
    return useContext(ThemeContext)
}

