import { ActionType, getType } from 'typesafe-actions';
import * as sessionActions from '../actions/SessionActions';

export type actionTypes = ActionType<typeof sessionActions>;

export type sessionTypes = Readonly<{
  userInfo: any;
  isLogin: boolean;
}>;

const initialState = {
  userInfo: null,
  isLogin: true,
};

const session = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case getType(sessionActions.checkLogin):
      return { ...state, userInfo: action.userInfo, isLogin: action.isLogin };
    default:
      return state;
  }
};

export default session;
