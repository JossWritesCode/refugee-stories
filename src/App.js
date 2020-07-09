import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage.js';
import TheirStories from './components/landing/TheirStories.js';
import './SCSS/main.scss';
import StoryRoute from './components/landing/StoryRoute.js';
import StoryForm from './components/StoryForm.js';
import StoryConfirm from './components/landing/StoryConfirm.js';
import AdminSignIn from './components/AdminSignIn.js';
import PrivateRoute from './components/admin/PrivateRoute';
import Dashboard from './components/admin/Dashboard';
import AdminStoryView from './components/admin/AdminStoryView.js';
//components

//contexts

function App(props) {
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
          <Route path="/storyconfirmation">
            <StoryConfirm />
          </Route>
          <Route
            path="/signin"
            render={(props) => <AdminSignIn {...props} />}
          />
          <Route
            path="/story/:id"
            render={(props) => <StoryRoute {...props} />}
          />
          <Route
            path="/storyform"
            render={(props) => <StoryForm {...props} />}
          />
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/dashboard/story/:id" component={AdminStoryView} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
