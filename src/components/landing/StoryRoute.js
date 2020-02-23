import React, { useEffect } from 'react';
import { getData } from '../../actions';
import { connect } from 'react-redux';

function StoryRoute(props) {
  let thisStory;
  useEffect(() => {
    if (props.stories.length === 0) {
      props.getData();

      console.log('CALLING THE API');
    }
    for (let i = 0; i < props.stories.length; i++) {
      if (props.stories[i].id === storyId) {
        thisStory = props.stories[i];
      }
    }
  }, []);

  const storyId = props.match.params.id;

  return (
    <div>
      <h4>{thisStory.title}</h4>
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
export default connect(mapStateToProps, { getData })(StoryRoute);
