import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';
import { getStories } from '../../actions';
import { connect } from 'react-redux';
import Story from './Story.js';
import { Typography } from '@material-ui/core';
import NavBar from '../NavBar.js';
import Footer from '../Footer.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    textAlign: 'center'
  }
}));
function TheirStories({ stories, getStories, error, isLoading }) {
  const classes = useStyles();
  useEffect(() => {
    if (stories.length === 0) {
      getStories();
      console.log('CALLING THE API');
    }
  }, [getStories, stories.length]);

  return (
    <div className="their-stories">
      <NavBar />
      <main className="main-their-stories">
        <Typography className={classes.title} variant="h3">
          Their Stories
        </Typography>
        {error ? <p className="error">Error</p> : ''}
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        ) : (
          ''
        )}

        <div className="stories-container">
          {stories.map(story => (
            <Story key={story.id} story={story} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    stories: state.stories,
    error: state.error
  };
};
export default connect(mapStateToProps, { getStories })(TheirStories);
