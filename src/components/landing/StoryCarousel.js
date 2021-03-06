import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import { getStories } from '../../actions';
import { connect } from 'react-redux';
import Story from '../read_stories/Story.js';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  headerSecondary: {
    fontSize: '1.8rem',
    fontFamily: 'Prata',
    textAlign: 'center',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  headerPrimary: {
    fontFamily: 'Prata',
    fontSize: '8rem',
  },
}));

function StoryCarousel({ storyData, getStories }) {
  const classes = useStyles();
  useEffect(() => {
    getStories();
  }, [getStories]);

  const recentStories = storyData.stories.slice(0, 4);
  return (
    <div className="carousel-container">
      <Link to="/stories">
        <Typography className={classes.headerSecondary} variant="h3">
          Their Stories
        </Typography>
      </Link>
      <Carousel autoplay id="carousel">
        {recentStories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </Carousel>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    storyData: state.storyData,
  };
};
export default connect(mapStateToProps, { getStories })(StoryCarousel);
