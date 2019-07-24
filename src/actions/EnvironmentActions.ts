import * as ActionTypes from '../constants/ActionTypes';

export const changeTheme = (theme: string) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_THEME, theme });
};

export const initEnvironment = () => (dispatch) => {
  dispatch({ type: ActionTypes.WINDOW_RESIZE, height: window.innerHeight, width: window.innerWidth });
};

