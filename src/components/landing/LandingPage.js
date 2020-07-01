import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar.js';
import { Typography, Button } from '@material-ui/core';
import Footer from '../Footer.js';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getStories } from '../../actions';
import { connect } from 'react-redux';
import cherryTree from '../../assets/cherry-tree.jpg';

import StoryCarousel from './StoryCarousel.js';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroimage: {
    width: '60rem',
    padding: '0',
    margin: '2rem',
  },
  headerSecondary: {
    fontSize: '1.8rem',
    width: '50%',
  },
}));

function LandingPage({ stories, getStories, error, isLoading }) {
  const classes = useStyles();
  return (
    <div className="landing-page">
      <NavBar />
      <main className="main-landing">
        <div className="top-row">
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
              “Could a greater miracle take place than for us to look through
              each other’s eye for an instant?” - Henry David Thoreau
            </Typography>
            {isLoading ? (
              <Loader
                type="TailSpin"
                color="#c96567"
                height={100}
                width={100}
              />
            ) : (
              ''
            )}
          </div>
          <div className="cherry-image-container">
            <img src={cherryTree} alt="cherry tree" />
          </div>
        </div>
        <div className="bottom-row">
          <StoryCarousel />
          <div className="story-links">
            <Link to="/stories">
              <Button variant="contained" color="primary">
                Read Stories
              </Button>
            </Link>
            <Typography
              id="story-text"
              className={classes.headerSecondary}
              component="p"
            >
              Grow through understanding.
            </Typography>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    stories: state.stories,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getStories })(LandingPage);
