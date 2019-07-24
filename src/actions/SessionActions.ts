import * as ActionTypes from '../constants/ActionTypes';

export const checkLogin = () => (dispatch) => {
  const hash = window.location.hash ? window.location.hash.slice(2) : '';
  console.log(hash);
  dispatch({ type: ActionTypes.CHECK_LOGIN, userInfo: null, isLogin: true });
};

export const login = () => (dispatch) => {
  window.location.href = '#/dataSource/manage/index';
  dispatch({ type: ActionTypes.CHECK_LOGIN, userInfo: null, isLogin: true });
};
