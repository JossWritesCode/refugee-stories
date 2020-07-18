import axios from 'axios';

export const POST_LOGIN_DATA_START = 'POST_LOGIN_DATA_START';
export const POST_LOGIN_DATA_SUCCESS = 'POST_LOGIN_DATA_SUCCESS';
export const POST_LOGIN_DATA_FAILURE = 'POST_LOGIN_DATA_FAILURE';

export const APPLY_ADMIN_START = 'APPLY_ADMIN_START';
export const APPLY_ADMIN_SUCCESS = 'APPLY_ADMIN_SUCCESS';
export const APPLY_ADMIN_FAILURE = 'APPLY_ADMIN_FAILURE';

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: POST_LOGIN_DATA_START });
    axios
      .post(`https://refugee-stories-api-082019.herokuapp.com/api/login`, user)
      .then((res) => {
        console.log(user, 'user');
        dispatch({ type: POST_LOGIN_DATA_SUCCESS, payload: res.data.token });
      })
      .catch((err) => {
        dispatch({ type: POST_LOGIN_DATA_FAILURE, payload: err.response });
      });
  };
};

export const apply = (user) => {
  return (dispatch) => {
    dispatch({ type: APPLY_ADMIN_START });
    axios
      .post(
        'https://refugee-stories-api-082019.herokuapp.com/api/register',
        user
      )
      .then((res) => {
        console.log(user, 'apply admin user');
        dispatch({ type: APPLY_ADMIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: APPLY_ADMIN_FAILURE, payload: err.response });
      });
  };
};
