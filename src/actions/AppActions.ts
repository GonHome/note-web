import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as ActionTypes from '../constants/ActionTypes';
import { sortObj, eyeWidthObj, searchObj } from '../models/models';
import { api, checkError, doError } from '../util/api';
import { getCheckNotes, getSearch, getSort } from '../selectors/AppSelectors';

export const moveWidth = (leftWidth: number, middleWidth: number) => (dispatch) => {
  dispatch({ type: ActionTypes.MOVE_WIDTH_BAR, leftWidth, middleWidth });
};

export const initNotes =(params: searchObj, checkNote: string | undefined) => async (dispatch) => {
  const { search, sortName, sortOrder } = params;
  dispatch(showLoading());
  api.newRequest().jsonHal().from(`/api/note/search?sortName=${sortName}&&sortOrder=${sortOrder}${search ? `&&search=${search}` : ''}`)
    .getResource((err,response)=>{
      const error = checkError({response, error: err});
      if (error) {
        doError(error);
      } else {
        const { notes } = response;
        const noteIds = notes.map((item: any) => item.id);
        let checkNoteIds: string[] = [];
        if (checkNote && noteIds.indexOf(checkNote) > -1 ) {
          checkNoteIds = [checkNote];
        } else if (notes.length > 0) {
          checkNoteIds = [notes[0].id]
        }
        dispatch({ type: ActionTypes.INIT_NOTES, notes, checkNotes: checkNoteIds });
        dispatch(hideLoading());
      }
    });
};

export const addNotes = () => async (dispatch, getState) => {
  dispatch(showLoading());
  const search = getSearch(getState());
  const sort = getSort(getState());
  const { sortName, sortOrder } = sort;
  const params: searchObj = { search, sortName, sortOrder };
  api.jsonHal().from('/api/note/add/').post({ name: '未命名', content: '# 未命名', language: 'markdown' },
    (err, response) => {
      const error = checkError({response, error: err});
      if (error) {
        doError(error);
      } else {
        dispatch(initNotes(params, response.id));
        dispatch(hideLoading());
      }
    });
};

export const changeSearch = (search: string) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_SEARCH, search });
};

export const changeDialogType = (dialogType: string) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_DIALOG_TYPE, dialogType });
};

export const changeSort = (sort: sortObj) => (dispatch, getState) => {
  const checkNotes = getCheckNotes(getState());
  const search = getSearch(getState());
  const { sortName, sortOrder } = sort;
  dispatch({ type: ActionTypes.CHANGE_SORT, sort });
  const params: searchObj = { search, sortName, sortOrder };
  dispatch(initNotes(params, checkNotes.length > 1 ? undefined : checkNotes[0]));
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
