import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: '#03002e',
    height: '5rem'
  }
}));

export default function Footer() {
  const classes = useStyles();
  return <footer className={classes.footer}></footer>;
}
