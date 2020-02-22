import React from 'react';
// import { Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import LandingPage from './components/landing/LandingPage.js';
import './index.css';
//components

//contexts

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
