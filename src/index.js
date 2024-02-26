import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main:"#00324d" , 
    },

      secondary: {  main: '#00324d',
      light: "#bbdde6",
      contrast: '#D6D6D6',
      },
 },
      typography:{
        
        h1: {
          fontSize: "3rem",
          fontWeight: "600",
        },

        h2: {
          fontSize: "1.75rem",
          fontWeight: "600",
        },
 
        h3: {
          fontSize: "1.5rem",
          fontWeight: "600",
        },

        h5: {
          fontSize: "1.2rem",
          fontWeight: "400",
        },

        h6: {
          fontSize: "1.5rem",
          fontWeight: "600",
        },
      },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
