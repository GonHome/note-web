import { createStandardAction } from 'typesafe-actions';
import * as ActionTypes from '../constants/ActionTypes';
import { sortObj, eyeWidthObj } from '../models/models';

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

export const changeIsEyeWidth = createStandardAction(
  ActionTypes.CHANGE_ISEYEWIDTH,
).map(({ leftWidth, middleWidth, isEye }: eyeWidthObj) => ({ leftWidth, middleWidth, isEye }));

