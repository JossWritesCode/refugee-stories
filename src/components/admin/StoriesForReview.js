import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import StoryCard from './StoryForReview';

const StoriesForReview = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://refugee-stories-api-082019.herokuapp.com/api/stories')
      .then((res) => {
        console.log(res.data);
        const unapprovedStories = res.data.filter((story) => {
          if (story.approved === false) return story;
        });
        setStories(unapprovedStories);
      })
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="container">
      <h2>Stories For Your Review:</h2>
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
