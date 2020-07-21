import React, { useState } from 'react';

import axios from 'axios';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import BackButton from '../layout/BackButton';
import NavBar from '../layout/NavBar.js';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../layout/Footer.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '75vh',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  headerPrimary: {
    fontFamily: 'Prata',
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  story: {
    height: 250,
    width: 400,

    labelOffset: -20,
  },
}));

function AdminApply({ history }) {
  const classes = useStyles();

  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        'https://refugee-stories-api-082019.herokuapp.com/api/register',
        userData
      )
      .then((res) => {
        history.push('/adminconfirmation');
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  return (
    <>
      <NavBar />
      <BackButton link="/" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            className={classes.headerPrimary}
            component="h1"
            variant="h4"
          >
            Apply to Be an Admin
          </Typography>
          <Typography variant="subtitle1">
            Thank you for applying to be an admin. After you submit your
            information, an admin will review your application.
          </Typography>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className={classes.form}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Last Name"
                  autoFocus
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default AdminApply;
