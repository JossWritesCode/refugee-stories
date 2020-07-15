import React, { useEffect } from 'react';
import { getStory } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import NavBar from '../NavBar.js';
import Footer from '../Footer.js';
import BackButton from '../BackButton';
import Loader from 'react-loader-spinner';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  headerSecondary: {
    fontSize: '2.4rem',
    width: '50%',
    fontFamily: 'Prata',
    textAlign: 'center',
    minWidth: '30rem',
  },
  headerPrimary: {
    fontFamily: 'Prata',
    fontSize: '8rem',
    textAlign: 'center',
  },
  storyText: {
    fontSize: '1.6rem',
    margin: '2rem',
  },
  backButton: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    fontFamily: 'Prata',
    fontSize: '2.4rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

function StoryRoute({ storyData, getStory, match }) {
  const classes = useStyles();
  useEffect(() => {
    getStory(match.params.id);
  }, [getStory, match.params.id]);

  return (
    <div>
      <NavBar />
      <BackButton />
      <div className="story-container">
        <Link className={classes.backButton} to="/stories">
          &#8592;
        </Link>
        {storyData.isLoading ? (
          <Loader type="TailSpin" color="#c96567" height={100} width={100} />
        ) : (
          ''
        )}
        <Typography
          className={classes.headerSecondary}
          variant="h3"
          component="h3"
        >
          {storyData.story.title}
        </Typography>

        <img
          className="story-picture"
          src={storyData.story.imageUrl}
          alt="author"
        />
        <Typography
          variant="h6"
          component="h6"
          className={classes.headerSecondary}
        >
          by {storyData.story.author}
        </Typography>
        <Typography className={classes.storyText}>
          {storyData.story.story}
        </Typography>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storyData: state.storyData,
  };
};
export default connect(mapStateToProps, { getStory })(StoryRoute);
