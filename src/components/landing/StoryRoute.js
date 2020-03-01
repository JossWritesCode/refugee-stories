import React, { useEffect } from 'react';
import { getStory } from '../../actions';
import { connect } from 'react-redux';
import NavBar from '../NavBar.js';
import Footer from '../Footer.js';
import Loader from 'react-loader-spinner';
import { Typography } from '@material-ui/core';

function StoryRoute({ isLoading, story, getStory, match }) {
  useEffect(() => {
    getStory(match.params.id);
    console.log('CALLING THE API');
  }, [getStory, match.params.id]);


  return (
    <div>
      <NavBar />
      <div className="story-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#c96567" height={100} width={100} />
        ) : (
          ''
        )}
        <Typography variant="h3" component="h3">
          {story.title}
        </Typography>

        <img className="story-picture" src={story.imageUrl} alt="author" />
        <Typography variant="h6" component="h6">
          by {story.author}
        </Typography>
        <Typography className="story-text">{story.story}</Typography>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    stories: state.stories,
    story: state.story,
    error: state.error
  };
};
export default connect(mapStateToProps, { getStory })(StoryRoute);
