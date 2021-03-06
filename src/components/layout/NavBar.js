import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/pink-logo.png';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    fontFamily: 'Prata',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Prata',
  },
  logo: {
    width: '75px',
  },
  toolbar: {
    justifyContent: 'space-between',
    display: 'flex',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
  },

  admin: {
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },

  navLink: {
    textAlign: 'center',
    fontSize: '1.6rem',
    marginRight: '3rem',
    fontFamily: 'Prata',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box className={classes.box}>
            <Link to="/">
              <img className={classes.logo} src={Logo} alt="logo" />
            </Link>
            {/* <Link to="/">
              <Typography className={classes.navLink}>
                Refugee Stories
              </Typography>
            </Link> */}
            <Link to="/stories">
              <Typography className={classes.navLink}>Stories</Typography>
            </Link>
          </Box>
          <Link to="/signin">
            <Typography className={classes.admin}>Admin</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
