import * as ActionTypes from '../constants/ActionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const changeTheme = (theme: string) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_THEME, theme });
};

export const initEnvironment = () => (dispatch) => {
  dispatch(showLoading());
  dispatch({ type: ActionTypes.WINDOW_RESIZE, height: window.innerHeight, width: window.innerWidth });
  dispatch(hideLoading());
};

