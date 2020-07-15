import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from '../components/admin/Dashboard';
import AdminSignIn from '../components/AdminSignIn';
const RedirectToDashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token')) {
          return <Dashboard match={props.match} history={props.history} />;
        }
        return <AdminSignIn {...props} />;
      }}
    />
  );
};

export default RedirectToDashboardRoute;
