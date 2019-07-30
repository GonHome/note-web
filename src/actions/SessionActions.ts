import * as ActionTypes from '../constants/ActionTypes';
import { api, checkError, doError } from '../util/api';

export const checkLogin = () => (dispatch) => {
  // const hash = window.location.hash ? window.location.hash.slice(2) : '';
  // console.log(hash);
  // dispatch({ type: ActionTypes.CHECK_LOGIN, userInfo: null, isLogin: true });
  dispatch(login());
};

export const login = () => async (dispatch) => {
  api.jsonHal().from('/api/user/login/').post({ name: 'root2', password: '123456' },
    (err, response) => {
      const error = checkError({response, error: err});
      if (error) {
        doError(error);
      } else {
        dispatch({ type: ActionTypes.CHECK_LOGIN, userInfo: response.user, isLogin: true });
      }
    });
};
