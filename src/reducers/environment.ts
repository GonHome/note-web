import * as types from '../constants/ActionTypes';

const initialState = {
  height: window.innerHeight,
  width: window.innerWidth,
  theme: 'Light',
};

const environment = (state = initialState, action: any) => {
  switch (action.type) {
    case types.WINDOW_RESIZE:
      return { ...state, width: action.width, height: action.height };
    case types.CHANGE_THEME:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};

export default environment;
