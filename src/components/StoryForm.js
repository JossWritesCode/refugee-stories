import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import BackButton from './BackButton';
import NavBar from './NavBar.js';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer.js';
import { submitStory } from '../actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  headerPrimary: {
    fontFamily: 'Prata',
    fontSize: '8rem',
    textAlign: 'center',
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

function StoryForm({ submitStory, storyData }) {
  const classes = useStyles();

  const [newStory, setNewStory] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    submitStory(newStory);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setNewStory({ ...newStory, [event.target.name]: event.target.value });
  };

  return (
    <>
      <NavBar />
      <BackButton />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            classes={classes.headerPrimary}
            component="h1"
            variant="h4"
          >
            Share Your Story
          </Typography>
          <Typography variant="subtitle1">
            Please share your story with us. After our admins have reviewed it,
            we will do our part to share it with the world.
          </Typography>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className={classes.form}
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
                  onChange={(event) => handleChange(event)}
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
                  onChange={(event) => handleChange(event)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="imageUrl"
                  variant="outlined"
                  fullWidth
                  id="imageurl"
                  label="Link to Picture of Author"
                  autoFocus
                  onChange={(event) => handleChange(event)}
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
                  onChange={(event) => handleChange(event)}
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
                  multiline="true"
                  rows="100"
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

const mapStateToProps = (state) => {
  return {
    storyData: state.storyData,
  };
};
export default connect(mapStateToProps, { submitStory })(StoryForm);

// https://refugee-stories-api-082019.herokuapp.com/api/public
