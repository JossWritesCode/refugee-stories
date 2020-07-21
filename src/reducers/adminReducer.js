import {
  POST_LOGIN_DATA_START,
  POST_LOGIN_DATA_SUCCESS,
  POST_LOGIN_DATA_FAILURE,
} from '../actions';

const initialState = {
  token: null,
  error: false,
  isLoading: false,
  isAdmin: false,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: false,
        isAdmin: false,
      };
    case POST_LOGIN_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        token: action.payload,
        isAdmin: true,
      };
    case POST_LOGIN_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        isAdmin: false,
      };

    default:
      return state;
  }
};
