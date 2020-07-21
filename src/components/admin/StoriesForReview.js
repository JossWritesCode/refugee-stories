import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import StoryCard from './StoryForReview';
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
    fontSize: '1.4rem',
    width: '100%',
    paddingTop: '1rem',
    fontFamily: 'Prata',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.8rem',
    },
  },

  headerPrimary: {
    fontFamily: 'Prata',
    fontSize: '4rem',
    paddingTop: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '6rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '8rem',
    },
  },
}));

const StoriesForReview = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://refugee-stories-api-082019.herokuapp.com/api/stories')
      .then((res) => {
        const unapprovedStories = res.data.filter((story) => {
          if (story.approved === false) return story;
        });
        setStories(unapprovedStories);
      })
      .catch((error) => console.log(error.response));
  }, []);
  const classes = useStyles();
  return (
    <div className="container">
      <Typography component="h2" className={classes.headerSecondary}>
        New Stories for Review
      </Typography>
      <div className="pending-stories-display">
        {stories.length > 0 ? (
          stories.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              title={story.title}
              image={story.imageUrl}
              author={story.author}
              country={story.country}
              year={story.year}
              text={story.story}
            />
          ))
        ) : (
          <p>There are no stories for review at this time.</p>
        )}
      </div>
    </div>
  );
};

export default StoriesForReview;
