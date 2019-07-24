import * as ActionTypes from '../constants/ActionTypes';
import * as CommonConstants from '../constants/CommonConstants';

const initialState = {
  leftWidth: CommonConstants.LEFT_WIDTH,
  middleWidth: CommonConstants.MIDDLE_WIDTH,
  dialogType: '',
  sort: { sortName: 'name', sortOrder: 'DESC' },
  isEdit: false,
  isEye: false,
};

const app = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.MOVE_WIDTH_BAR:
      return { ...state, leftWidth: action.leftWidth, middleWidth: action.middleWidth };
    case ActionTypes.CHANGE_DIALOG_TYPE:
      return { ...state, dialogType: action.dialogType };
    case ActionTypes.CHANGE_SORT:
      return { ...state, sort: action.sort };
    case ActionTypes.CHANGE_ISEDIT:
      return { ...state, isEdit: action.isEdit };
    case ActionTypes.CHANGE_ISEYEWIDTH:
      return { ...state, leftWidth: action.leftWidth, middleWidth: action.middleWidth, isEye: action.isEye };
    default:
      return state;
  }
};

export default app;
