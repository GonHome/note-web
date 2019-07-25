import * as ActionTypes from '../constants/ActionTypes';
import { sortObj, eyeWidthObj } from '../models/models';

export const moveWidth = (leftWidth: number, middleWidth: number) => (dispatch) => {
  dispatch({ type: ActionTypes.MOVE_WIDTH_BAR, leftWidth, middleWidth });
};

export const changeDialogType = (dialogType: string) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_DIALOG_TYPE, dialogType });
};

export const changeSort = (sort: sortObj) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_SORT, sort });
};

export const changeIsEdit = (isEdit: boolean) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_ISEDIT, isEdit });
};

export const changeIsEyeWidth = ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_ISEYEWIDTH, leftWidth, middleWidth, isEye });
};

export const changeCheckMenu = (checkMenu: string) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_CHECK_MENU, checkMenu });
};

export const changeCheckNotes = (checkNotes: string[]) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_CHECK_NOTES, checkNotes });
};

export const changeLanguage = (language: string) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_LANGUAGE, language });
};
