import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { getData } from '../../actions';
import { connect } from 'react-redux';
import Story from './Story.js';
import { Typography } from '@material-ui/core';

function StoryCarousel(props) {
  useEffect(() => {
    props.getData();
  }, []);
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const stories = props.stories.slice(0, 4);
  return (
    <div className="carousel-container">
      <Typography className="stories-header" variant="h3">
        Their Stories
      </Typography>
      <Carousel autoplay id="carousel" afterChange={onChange}>
        {stories.map(story => (
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
export default connect(mapStateToProps, { getData })(StoryCarousel);
