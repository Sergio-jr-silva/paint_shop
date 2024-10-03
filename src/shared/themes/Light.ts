import { createTheme } from '@mui/material';
import {} from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#003D6B',
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
            default: '#F5F5F5',  
            paper: '#FFFFFF',     
        }
    }
})