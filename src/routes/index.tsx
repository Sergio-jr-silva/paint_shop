import { Button, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { DarkTheme } from "../shared/themes";
import Navbar from "../shared/components/Navbar/Navbar";
import Main from "../pages/main/Main";
import Produtos from '../pages/Produtos/Produtos';

export const AppRoutes = () =>{
    return(
        <ThemeProvider theme={DarkTheme}>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/produtos" element={<Produtos/>} />
            
        </Routes>
        </ThemeProvider>
    );
}