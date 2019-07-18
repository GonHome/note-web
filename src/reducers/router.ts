import { ActionType, getType } from 'typesafe-actions';
import * as routerActions from '../actions/RouterActions';
import { INITIAL_ROUTE } from '../constants/CommonConstants';

export type actionTypes = ActionType<typeof routerActions>;

export type routeTypes = Readonly<{
  keys: any;
  options: any;
  path: any;
  hash: string
}>;

const initialState = {
  route: {
    ...INITIAL_ROUTE,
  },
};

const router = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case getType(routerActions.initRouter):
      return { ...state, route: action.route };
    default:
      return state;
  }
};

export default router;
