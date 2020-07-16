import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  signOutButton: {
    position: 'absolute',
    top: '2rem',
    right: '8rem',
    fontSize: '1.4rem',
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

function AdminSignOut({ history }) {
  const classes = useStyles();
  function signOut() {
    localStorage.setItem('token', null);
  }

  return (
    <React.Fragment>
      <Link to="/">
        <p className={classes.signOutButton} onClick={signOut()}>
          Sign Out
        </p>
      </Link>
    </React.Fragment>
  );
}

export default AdminSignOut;
