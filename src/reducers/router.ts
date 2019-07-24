import * as ActionTypes from '../constants/ActionTypes';
import { INITIAL_ROUTE } from '../constants/CommonConstants';

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

const router = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ROUTE:
      return { ...state, route: action.route };
    default:
      return state;
  }
};

export default router;
