import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';
import { getStories } from '../../actions';
import { connect } from 'react-redux';
import Story from './Story.js';
import { Typography } from '@material-ui/core';
import NavBar from '../layout/NavBar.js';
import Footer from '../layout/Footer.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Prata',
  },
}));
function TheirStories({ storyData, getStories }) {
  const classes = useStyles();
  useEffect(() => {
    getStories();
  }, [getStories, storyData.stories.length]);

  return (
    <div className="their-stories">
      <NavBar />
      <main className="main-their-stories">
        <Typography className={classes.title} variant="h3">
          Their Stories
        </Typography>
        {storyData.error ? <p className="error">Error</p> : ''}
        {storyData.isLoading ? (
          <div className="react-spinner">
            <Loader
              timeout={5000}
              type="Rings"
              color="#C96567"
              height={100}
              width={100}
            />
          </div>
        ) : (
          ''
        )}

        <div className="stories-container">
          {storyData.stories.map((story) => (
            <Story key={story.id} story={story} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    storyData: state.storyData,
  };
};
export default connect(mapStateToProps, { getStories })(TheirStories);
