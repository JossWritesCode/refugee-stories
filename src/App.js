import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage.js';
import AdminConfirm from './components/admin/AdminConfirm';
import TheirStories from './components/read_stories/TheirStories.js';
import './SCSS/main.scss';
import StoryRoute from './components/read_stories/StoryRoute.js';
import StoryForm from './components/submit_stories/StoryForm.js';
import StoryConfirm from './components/read_stories/StoryConfirm.js';
import AdminSignIn from './components/admin/AdminSignIn.js';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/admin/Dashboard';
import AdminStoryView from './components/admin/AdminStoryView.js';
import AdminApply from './components/admin/AdminApply';
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

          <Route path="/adminconfirmation">
            <AdminConfirm />
          </Route>
          <Route path="/signin">
            <AdminSignIn {...props} />
          </Route>
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
          <Route
            path="/apply"
            render={(props) => (
              <AdminApply match={props.match} history={props.history} />
            )}
          />

          <PrivateRoute exact path="/dashboard" component={Dashboard} />

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
