import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import NavBar from './NavBar.js';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './Footer.js';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  story: {
    height: 250,
    width: 400,
    labelOffset: -20
  }
}));

function StoryForm(props) {
  const classes = useStyles();

  const [newStory, setNewStory] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        'https://refugee-stories-api-082019.herokuapp.com/api/public',
        newStory
      )
      .then(res => {
        console.log('posted');
        props.history.push('/storyconfirmation');
      })
      .catch(error => console.log(error.response));
  };

  const handleChange = event => {
    event.preventDefault();
    setNewStory({ ...newStory, [event.target.name]: event.target.value });
  };

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Share Your Story
          </Typography>
          <Typography variant="subtitle1">
            Please share your story with us. After our admins have reviewed it,
            we will do our part to share it with the world.
          </Typography>
          <form
            onSubmit={event => handleSubmit(event)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="author"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={event => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Title of Story"
                  name="title"
                  onChange={event => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="imageUrl"
                  variant="outlined"
                  fullWidth
                  id="imageurl"
                  label="Picture of Author"
                  autoFocus
                  onChange={event => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="country"
                  label="Author's Country of Origin"
                  name="country"
                  onChange={event => handleChange(event)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  InputProps={{ classes: { input: classes.story } }}
                  variant="outlined"
                  required
                  fullWidth
                  name="story"
                  label="Story"
                  type="text"
                  id="story"
                  onChange={event => handleChange(event)}
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

export default StoryForm;

// https://refugee-stories-api-082019.herokuapp.com/api/public