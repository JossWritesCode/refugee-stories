import {
  POST_LOGIN_DATA_START,
  POST_LOGIN_DATA_SUCCESS,
  POST_LOGIN_DATA_FAILURE,
} from '../actions';

const initialState = {
  token: '',
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_DATA_START:
      return {
        ...state,
      };
    case POST_LOGIN_DATA_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case POST_LOGIN_DATA_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
