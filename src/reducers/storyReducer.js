import {
  FETCH_STORIES_DATA_START,
  FETCH_STORIES_DATA_SUCCESS,
  FETCH_STORIES_DATA_FAILURE,
  FETCH_STORY_DATA_START,
  FETCH_STORY_DATA_SUCCESS,
  FETCH_STORY_DATA_FAILURE,
  POST_STORY_DATA_START,
  POST_STORY_DATA_SUCCESS,
  POST_STORY_DATA_FAILURE,
} from '../actions';

const initialState = {
  stories: [],
  story: {},
  isLoading: false,
  error: 'error',
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case FETCH_STORIES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stories: action.payload.data,
        error: false,
      };
    case FETCH_STORIES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case FETCH_STORY_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case FETCH_STORY_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        story: action.payload.data,
        error: false,
      };
    case FETCH_STORY_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case POST_STORY_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case POST_STORY_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case POST_STORY_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};
