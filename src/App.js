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
import PrivateRoute from './utils/PrivateRoute';
import RedirectToDashboardRoute from './utils/RedirectToDashboardRoute';
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
          <RedirectToDashboardRoute
            path="/signin"
            render={(props) => <AdminSignIn {...props} />}
          />
          <Route
            path="/story/:id"
            render={(props) => (
              <StoryRoute match={props.match} history={props.history} />
            )}
          />
          <Route
            path="/storyform"
            render={(props) => (
              <StoryForm match={props.match} history={props.history} />
            )}
          />
          <PrivateRoute exact path="/dashboard">
            <Dashboard {...props} />
          </PrivateRoute>
          {/* <PrivateRoute
            exact
            path="/dashboard"
            render={(props) => (
              <Dashboard match={props.match} history={props.history} />
            )}
          /> */}
          <PrivateRoute
            exact
            path="/dashboard/story/:id"
            component={AdminStoryView}
          />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
