import React from 'react';
import HeroImage from '../assets/humanitarian-aid.svg';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar.js';
import { Typography, Button } from '@material-ui/core';
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
      <div className="hero-section">
        <Typography variant="h1" component="h1">
          Refugee Stories
        </Typography>
        <Button variant="contained" color="secondary">
          Share Your Story
        </Button>
        <Typography
          className={classes.headerSecondary}
          variant="p"
          component="p"
        >
          “Could a greater miracle take place than for us to look through each
          other’s eye for an instant?” - Henry David Thoreau
        </Typography>

        <img className={classes.heroimage} src={HeroImage} alt="hero" />
      </div>
    </div>
  );
}
