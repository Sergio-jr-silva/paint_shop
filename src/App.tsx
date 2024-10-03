import {BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './routes';
import '../src/styles/StyleApp.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
    overflow-x: hidden;
  }
`;

export const App = () => {

  return (
    
    <BrowserRouter>
      <GlobalStyle />
     <AppRoutes />
    </BrowserRouter>
  );
}


