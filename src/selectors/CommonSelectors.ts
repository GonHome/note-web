import { stateTypes } from '../reducers';
import * as CommonConstants from '../constants/CommonConstants';

export const getRoute = (state: stateTypes) => state.router.route;
export const getHeight = (state: stateTypes) => state.environment.height;
export const getWidth = (state: stateTypes) => state.environment.width;
export const getAppHeight = (state: stateTypes) => getHeight(state)
  - CommonConstants.HEAD_HEIGHT - CommonConstants.TOOLBAR_HEIGHT;
export const getUserInfo = (state: stateTypes) => state.session.userInfo;
export const getIsLogin = (state: stateTypes) => state.session.isLogin;
export const getTheme = (state: stateTypes) => state.environment.theme;
