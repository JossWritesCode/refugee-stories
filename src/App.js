import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage.js';
import TheirStories from './components/landing/TheirStories.js';
import './index.css';
import Story from './components/landing/Story.js';
//components

//contexts

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/stories">
            <TheirStories />
          </Route>
          <Route path="/story/:id">
            <Story />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
