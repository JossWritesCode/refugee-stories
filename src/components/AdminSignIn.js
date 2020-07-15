import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  // Checkbox,
  Grid,
  Container,
  Typography,
} from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    margin: '0',
    padding: '0',
    minHeight: '100vh',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '28.8rem',
    margin: '0 auto',
    minHeight: '75vh',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    marginTop: '2rem',
  },
}));

const AdminSignIn = ({ login, adminData, history }) => {
  //make a post request to retrieve the token from BE
  //set token to local storage
  //navigate user to admin dashboard
  //render a form to allow admin to login

  const [userInfo, setUserInfo] = useState({});
  console.log(adminData, 'adminData');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(adminData, 'adminData');

    login(userInfo);
    console.log(adminData, 'adminData');

    localStorage.setItem('token', adminData.token);
    if (!adminData.error) {
      history.push('/dashboard');
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const classes = useStyles();
  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <NavBar />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className={classes.form}
        >
          <TextField
            autoComplete="email"
            name="email"
            type="email"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
            onChange={(event) => handleChange(event)}
            className={classes.textField}
          ></TextField>

          <TextField
            autoComplete="password"
            name="password"
            variant="outlined"
            required
            type="password"
            fullWidth
            id="password"
            label="Password"
            autoFocus
            onChange={(event) => handleChange(event)}
            className={classes.textField}
          ></TextField>

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {'Want to be an admin? Apply here'}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Footer />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    adminData: state.adminData,
  };
};

export default connect(mapStateToProps, { login })(AdminSignIn);
