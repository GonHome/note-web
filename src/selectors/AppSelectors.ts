import { stateTypes } from '../reducers';
export const getLeftWidth = (state: stateTypes) => state.app.leftWidth;
export const getMiddleWidth = (state: stateTypes) => state.app.middleWidth;
export const getDialogType = (state: stateTypes) => state.app.dialogType;
export const getSort = (state: stateTypes) => state.app.sort;
export const getIsEdit = (state: stateTypes) => state.app.isEdit;
