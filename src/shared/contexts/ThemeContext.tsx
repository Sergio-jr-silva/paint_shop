import { createContext, useCallback, useMemo, useState } from "react";
import { Box, ThemeProvider } from '@mui/material';
import { LightTheme, DarkTheme } from './../themes';

interface IThmeCOntextData{
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}
const ThemeContext = createContext({} as IThmeCOntextData);

type Props = {
    children?: React.ReactNode,
};

export const AppThemeProvider: React.FC <Props> = ({ children }) =>{
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() =>{
            setThemeName(OldThemeName => OldThemeName === 'light' ? 'dark': 'light')
    }, [])
    
    const theme = useMemo(() =>{
       if(themeName === 'light') return LightTheme;
       
       return DarkTheme;
        
    }, [themeName]);

 return(
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
    <ThemeProvider theme={DarkTheme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
        {children}
        </Box >
    </ThemeProvider>
    </ThemeContext.Provider>
 )
}