import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/pink-logo.png';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logo: {
    width: '75px'
  },
  toolbar: {
    justifyContent: 'space-between',
    display: 'flex'
  },
  box: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.box}>
            <img className={classes.logo} src={Logo} alt="logo" />
            <Link to="/">
              <Typography className="stories-header">
                Refugee Stories
              </Typography>
            </Link>
          </Box>
          <Typography>Admin</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
