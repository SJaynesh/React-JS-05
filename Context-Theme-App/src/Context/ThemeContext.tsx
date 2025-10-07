/*
1. Create Context
    - Method: createContext()
2. Create Context Provide
    - State
    - Return Provider
3. Use Context
    - Hook: useContext

*/

import { createContext, useContext, useState } from "react";

type ThemeType = {
    theme: string,
    toggleTheme: () => void
}

// Context
export const ThemeContext = createContext<ThemeType>({ theme: "light", toggleTheme: () => { } });

// Custom Hook
export function useTheme() {
    return useContext(ThemeContext);
}

// Context Provider
export function ThemeProvider({ children }: any) {

    const [theme, setTheme] = useState<string>("light");

    const toggleTheme = () => {
        setTheme(theme => theme === 'light' ? "dark" : "light");
    }

    const values: ThemeType = {
        theme, toggleTheme
    }

    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
}