import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Logo from '../assets/pink-logo.png';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: '#03002e',
    color: 'white',
    textAlign: 'center',
    margin: '0',
    padding: '0'
  },
  logo: {
    width: '100px'
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img className={classes.logo} src={Logo} alt="logo" />
      <Typography component="h5" variant="h5" className={classes.footer}>
        “The shortest distance between truth and a human being is a story.” -
        Anthony de Mello
      </Typography>
    </footer>
  );
}
