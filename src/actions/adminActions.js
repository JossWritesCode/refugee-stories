import axios from 'axios';

export const POST_LOGIN_DATA_START = 'POST_LOGIN_DATA_START';
export const POST_LOGIN_DATA_SUCCESS = 'POST_LOGIN_DATA_SUCCESS';
export const POST_LOGIN_DATA_FAILURE = 'POST_LOGIN_DATA_FAILURE';

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: POST_LOGIN_DATA_START });
    axios
      .post(`https://refugee-stories-api-082019.herokuapp.com/api/login`, user)
      .then((res) => {
        dispatch({ type: POST_LOGIN_DATA_SUCCESS, payload: res.data.token });
      })
      .catch((err) => {
        dispatch({ type: POST_LOGIN_DATA_FAILURE, payload: err.response });
      });
  };
};

//   axios
//       .post(
//         'https://refugee-stories-api-082019.herokuapp.com/api/login',
//         values
//       )
//       .then((res) => {
//         localStorage.setItem('token', res.data.token);
//         props.history.push('/dashboard');
//         // resetForm();
//       })
//       .catch((err) => console.log(err.response));
