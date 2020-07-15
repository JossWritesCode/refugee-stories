import axios from 'axios';

export const FETCH_STORIES_DATA_START = 'FETCH_STORIES_DATA_START';
export const FETCH_STORIES_DATA_SUCCESS = 'FETCH_STORIES_DATA_SUCCESS';
export const FETCH_STORIES_DATA_FAILURE = 'FETCH_STORIES_DATA_FAILURE';

export const FETCH_STORY_DATA_START = 'FETCH_STORY_DATA_START';
export const FETCH_STORY_DATA_SUCCESS = 'FETCH_STORY_DATA_SUCCESS';
export const FETCH_STORY_DATA_FAILURE = 'FETCH_STORY_DATA_FAILURE';

export const POST_STORY_DATA_START = 'POST_STORY_DATA_START';
export const POST_STORY_DATA_SUCCESS = 'POST_STORY_DATA_SUCCESS';
export const POST_STORY_DATA_FAILURE = 'POST_STORY_DATA_FAILURE';

export const getStories = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_STORIES_DATA_START });
    axios
      .get(`https://refugee-stories-api-082019.herokuapp.com/api/public`)
      .then((res) => {
        dispatch({ type: FETCH_STORIES_DATA_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: FETCH_STORIES_DATA_FAILURE, payload: err.response });
      });
  };
};

export const getStory = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_STORY_DATA_START });
    axios
      .get(`https://refugee-stories-api-082019.herokuapp.com/api/public/${id}`)
      .then((res) => {
        dispatch({ type: FETCH_STORY_DATA_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: FETCH_STORY_DATA_FAILURE, payload: err.response });
      });
  };
};

export const submitStory = (newStory) => {
  return (dispatch) => {
    dispatch({ type: POST_STORY_DATA_START });
    axios
      .post(
        'https://refugee-stories-api-082019.herokuapp.com/api/public',
        newStory
      )
      .then((res) => {
        dispatch({ type: POST_STORY_DATA_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: POST_STORY_DATA_FAILURE, payload: err.response });
      });
  };
};
