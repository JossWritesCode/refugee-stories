import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
//components

//contexts

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
