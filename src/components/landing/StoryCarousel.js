import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { getStories } from '../../actions';
import { connect } from 'react-redux';
import Story from './Story.js';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function StoryCarousel({ stories, getStories }) {
  useEffect(() => {
    getStories();

    console.log('CALLING THE API');
  }, [getStories]);

  const recentStories = stories.slice(0, 4);
  return (
    <div className="carousel-container">
      <Link to="/stories">
        <Typography className="stories-header" variant="h3">
          Their Stories
        </Typography>
      </Link>
      <Carousel autoplay id="carousel">
        {recentStories.map(story => (
          <Story key={story.id} story={story} />
        ))}
      </Carousel>
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
export default connect(mapStateToProps, { getStories })(StoryCarousel);
