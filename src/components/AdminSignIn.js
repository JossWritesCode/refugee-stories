import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AdminSignIn = ({
  history,
  errors,
  touched,
  values,
  handleSubmit,
  status,
}) => {
  //make a post request to retrieve the token from BE
  //set token to local storage
  //navigate user to admin dashboard
  //render a form to allow admin to login
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
        <Form className={classes.form}>
          <label>Email</label>
          <Field
            className="field form-field"
            type="text"
            name="email"
            placeholder="email address"
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          <label>Password</label>
          <Field
            className="field form-field"
            type="password"
            name="password"
            placeholder="password"
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
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
              <Link href="#" variant="body2">
                {'Want to be an admin? Apply here'}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
      <Footer />
    </Container>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  }),

  handleSubmit(values, { props, resetForm }) {
    axios
      .post(
        'https://refugee-stories-api-082019.herokuapp.com/api/login',
        values
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
        // resetForm();
      })
      .catch((err) => console.log(err.response));
  },
})(AdminSignIn);

export default FormikLoginForm;
