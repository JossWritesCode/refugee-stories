import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(Component, 'component');
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(localStorage.getItem('token'), 'token 2');
        if (localStorage.getItem('token')) {
          return <Component match={props.match} history={props.history} />;
        }
        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default PrivateRoute;
