import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = (props) => {
  return (
    <div className="story-card">
      <h3>{props.title}</h3>
      <img src={props.image} />
      <Link to={`dashboard/story/${props.id}`}>
        <button className="submit-button">Review Story</button>
      </Link>
    </div>
  );
};

export default StoryCard;
