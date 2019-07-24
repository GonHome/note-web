import * as ActionTypes from '../constants/ActionTypes';

export type sessionTypes = Readonly<{
  userInfo: any;
  isLogin: boolean;
}>;

const initialState = {
  userInfo: null,
  isLogin: true,
};

const session = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.CHECK_LOGIN:
      return { ...state, userInfo: action.userInfo, isLogin: action.isLogin };
    default:
      return state;
  }
};

export default session;
