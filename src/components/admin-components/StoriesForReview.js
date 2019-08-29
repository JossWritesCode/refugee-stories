import React, { useState } from 'react';

import StoryCard from './StoryForReview';

const StoriesForReview = ({stories}) => {
    console.log(stories);
    
    return (
       <div className='container'>
           <h2>Stories For Your Review:</h2>
           <div className='pending-stories-display'>
            { (stories.length > 0) ? (stories.map(story => (
                <StoryCard key={story.id} id={story.id} title={story.title} image={story.imageUrl} author={story.author} country={story.country} year={story.year} text={story.story}/>))) : (<p>There are no stories for review at this time.</p>)
            }
           </div>
       </div> 
    )
}

export default StoriesForReview;