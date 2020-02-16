import axios from 'axios';

export const FETCH_STORY_DATA_START = 'FETCH_STORY_DATA_START';
export const FETCH_STORY_DATA_SUCCESS = 'FETCH_STORY_DATA_SUCCESS';
export const FETCH_STORY_DATA_FAILURE = 'FETCH_STORY_DATA_FAILURE';

export const getData = query => {
  return dispatch => {
    dispatch({ type: FETCH_STORY_DATA_START });
    axios
      .get(`https://refugee-stories-api-082019.herokuapp.com/api/public`)
      .then(res => {
        // res.data.data
        // comment
        dispatch({ type: FETCH_STORY_DATA_SUCCESS, payload: res });
      })
      .catch(err => {
        dispatch({ type: FETCH_STORY_DATA_FAILURE, payload: err.response });
      });
  };
};
