import { createTheme } from '@mui/material';
import {} from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            dark: '#002744' ,
            light: '#3D5A99',
            contrastText: '#FFFFFF',
        },

        secondary: {
            main: '#F7C800',      
            dark: '#C6A000',     
            light: '#FFE54F',    
            contrastText: '#333333', 
        },

        background: {
            default: '#202124',  
            paper: '#303134',     
        }
    }
})