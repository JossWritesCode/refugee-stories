import {
  POST_LOGIN_DATA_START,
  POST_LOGIN_DATA_SUCCESS,
  POST_LOGIN_DATA_FAILURE,
  // APPLY_ADMIN_START,
  // APPLY_ADMIN_SUCCESS,
  // APPLY_ADMIN_FAILURE,
} from '../actions';

const initialState = {
  token: null,
  error: false,
  isLoading: false,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case POST_LOGIN_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        token: action.payload,
      };
    case POST_LOGIN_DATA_FAILURE:
      return {
        isLoading: false,
        error: true,
        ...state,
      };

    default:
      return state;
  }
};
