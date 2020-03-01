import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar.js';
import logo from '../../assets/white-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Footer';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '50%',
    height: '70vh'
  },
  thanks: {
    margin: '5rem'
  }
}));

function StoryConfirm() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.main}>
        <div className={classes.thanks}>
          <h1 className="h1">Thank you!</h1>
          <p className="p">
            Our admins will review your story shortly. For any questions or
            concerns, please contact us at example@email.com
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default StoryConfirm;
