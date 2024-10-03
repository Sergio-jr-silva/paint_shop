
import Navbar from "../../shared/components/Navbar/Navbar";
import React from 'react';
import styled from 'styled-components';
import bg from '../main/fundo.png';
import '../../styles/style.css';
import { Link } from "@mui/material";
import Footer from '../../shared/components/footer/footer';

const Main = () =>{
  return(
    <><Navbar />
    <div className="home">
        <div className="main" style={{backgroundImage: `url(${bg})`}}> 
            <h3>A MARCA NÚMERO 1 <br/>DO BRASIL</h3> 
            <Link><button className="btn">CONHEÇA NOSSAS NOVIDADES</button></Link>
        </div>

      <><Footer/></>
        
    </div>
    </>
    
  )
}

export default Main;
