import { ActionType, getType } from 'typesafe-actions';
import * as appActions from '../actions/AppActions';
import * as CommonConstants from '../constants/CommonConstants';

export type actionTypes = ActionType<typeof appActions>;

const initialState = {
  leftWidth: CommonConstants.LEFT_WIDTH,
  middleWidth: CommonConstants.MIDDLE_WIDTH,
};

const app = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case getType(appActions.moveWidth):
      return { ...state, leftWidth: action.leftWidth, middleWidth: action.middleWidth };
    default:
      return state;
  }
};

export default app;
