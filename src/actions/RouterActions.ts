import { createStandardAction } from 'typesafe-actions';
import * as ActionTypes from '../constants/ActionTypes';
import { path } from '../models/models';
import { compileHash, parseRoute } from '../util/RouterUtil';

/* global window */
const pushState = (route: any) => {
  const hash = compileHash(route);
  // 当 location的hash 不等于 hash时，浏览器 地址跳转为 ''
  if (window.location.hash !== hash) {
    window.history.pushState({ route }, '', hash);
  }
};

export const navigateTo = (route: any, shouldPushState = true) => {
  if (shouldPushState) {
    pushState(route);
  }
  return { route, type: 'CHANGE_ROUTE' };
};

// export const navigateBack = (bo: IBackObj) => (dispatch: any) => {
//   const { state } = bo.e;
//   if (state) {
//     const { route } = state;
//     dispatch(navigateTo(route, false));
//   } else {
//     const location = bo.e.target.location;
//     const hash = location.hash ? location.hash.slice(2) : '';
//     const route = parseRoute(hash, bo.paths);
//     return dispatch(navigateTo(route));
//   }
// };
/* global window */
export const initRouter = (paths: path[]) => (dispatch) => {
  const urls = paths.map(item => item.path);
  const hash = window.location.hash ? window.location.hash.slice(2) : '';
  const route = parseRoute(hash, urls);
  dispatch({ type: ActionTypes.CHANGE_ROUTE, route });
};

