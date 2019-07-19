import { ActionType, getType } from 'typesafe-actions';
import * as environmentActions from '../actions/EnvironmentActions';

export type actionTypes = ActionType<typeof environmentActions>;

const initialState = {
  height: window.innerHeight,
  width: window.innerWidth,
  theme: 'Light',
};

const environment = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case getType(environmentActions.initEnvironment):
      return { ...state, width: action.width, height: action.height };
    case getType(environmentActions.changeTheme):
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};

export default environment;
