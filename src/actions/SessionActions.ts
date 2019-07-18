import { createStandardAction } from 'typesafe-actions';
import * as ActionTypes from '../constants/ActionTypes';

export const checkLogin = createStandardAction(ActionTypes.CHECK_LOGIN).map(() => {
  const hash = window.location.hash ? window.location.hash.slice(2) : '';
  console.log(hash);
  // window.location.href = '#/dataSource/manage/index';
  return { userInfo: null, isLogin: true };
});

export const login = createStandardAction(ActionTypes.CHECK_LOGIN).map(() => {
  window.location.href = '#/dataSource/manage/index';
  return { userInfo: null, isLogin: true };
});
