import { combineReducers } from 'redux';
import { storyReducer } from './storyReducer.js';
import { adminReducer } from './adminReducer.js';

export default combineReducers({
  isLoading: storyReducer,
  error: storyReducer,
  stories: storyReducer,
  story: storyReducer,
  token: adminReducer,
});
