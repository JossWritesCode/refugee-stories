import { combineReducers } from 'redux';
import { storyReducer } from './storyReducer.js';
import { adminReducer } from './adminReducer.js';

export default combineReducers({
  storyData: storyReducer,
  adminData: adminReducer,
});
