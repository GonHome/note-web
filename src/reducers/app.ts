import { ActionType, getType } from 'typesafe-actions';
import * as appActions from '../actions/AppActions';
import * as CommonConstants from '../constants/CommonConstants';

export type actionTypes = ActionType<typeof appActions>;

const initialState = {
  leftWidth: CommonConstants.LEFT_WIDTH,
  middleWidth: CommonConstants.MIDDLE_WIDTH,
  dialogType: '',
  sort: { sortName: 'name', sortOrder: 'DESC' },
  isEdit: false,
  isEye: false,
};

const app = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case getType(appActions.moveWidth):
      return { ...state, leftWidth: action.leftWidth, middleWidth: action.middleWidth };
    case getType(appActions.changeDialogType):
      return { ...state, dialogType: action.dialogType };
    case getType(appActions.changeSort):
      return { ...state, sort: action.sort };
    case getType(appActions.changeIsEdit):
      return { ...state, isEdit: action.isEdit };
    case getType(appActions.changeIsEyeWidth):
      return { ...state, leftWidth: action.leftWidth, middleWidth: action.middleWidth, isEye: action.isEye };
    default:
      return state;
  }
};

export default app;
