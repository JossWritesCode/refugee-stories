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
        // isLoading: true,
        // error: false,
      };
    case POST_LOGIN_DATA_SUCCESS:
      return {
        ...state,
        // isLoading: false,
        token: action.payload,
        // error: false,
      };
    case POST_LOGIN_DATA_FAILURE:
      return {
        ...state,
        // isLoading: false,
        // error: true,
      };

    default:
      return state;
  }
};
