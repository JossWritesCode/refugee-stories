import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar.js';
import { Typography, Button } from '@material-ui/core';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom';
import StoryForm from '../StoryForm';

import StoryCarousel from './StoryCarousel.js';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heroimage: {
    width: '60rem',
    padding: '0',
    margin: '2rem'
  },
  headerSecondary: {
    fontSize: '1.8rem'
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className="landing-page">
      <NavBar />
      <main>
        <div className="hero-section">
          <Typography variant="h1" component="h1">
            Refugee Stories
          </Typography>
          <Link to="/storyform">
            <Button variant="contained" color="secondary">
              Share Your Story
            </Button>
          </Link>
          <Typography className={classes.headerSecondary} component="p">
            “Could a greater miracle take place than for us to look through each
            other’s eye for an instant?” - Henry David Thoreau
          </Typography>
        </div>
        <StoryCarousel />
      </main>
      <Footer />
    </div>
  );
}
