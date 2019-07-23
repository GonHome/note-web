import { createStandardAction } from 'typesafe-actions';
import * as ActionTypes from '../constants/ActionTypes';
import { sortObj } from '../models/models';
import { MIDDLE_WIDTH, LEFT_WIDTH } from '../constants/CommonConstants';

export const moveWidth = createStandardAction(
  ActionTypes.MOVE_WIDTH_BAR,
).map((leftWidth: number, middleWidth: number) => ({ leftWidth, middleWidth }));

export const changeDialogType = createStandardAction(
  ActionTypes.CHANGE_DIALOG_TYPE,
).map((dialogType: string) => ({ dialogType }));

export const changeSort = createStandardAction(
  ActionTypes.CHANGE_SORT,
).map((sort: sortObj) => ({ sort }));

export const changeIsEdit = createStandardAction(
  ActionTypes.CHANGE_ISEDIT,
).map((isEdit: boolean) => ({ isEdit }));

export const changeIsEye = createStandardAction(
  ActionTypes.CHANGE_ISEYE,
).map((isEye: boolean) => {
    if (isEye) {
      return { leftWidth: 0, middleWidth: 0, isEye };
    }
    return { leftWidth: LEFT_WIDTH, middleWidth: MIDDLE_WIDTH, isEye };
  });
