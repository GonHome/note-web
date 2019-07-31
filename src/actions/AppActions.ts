import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as _ from 'lodash';
import * as ActionTypes from '../constants/ActionTypes';
import { sortObj, eyeWidthObj, searchObj } from '../models/models';
import { api, checkError, doError } from '../util/api';
import { getCheckNotes, getSearch, getSort, getNotes } from '../selectors/AppSelectors';

export const moveWidth = (leftWidth: number, middleWidth: number) => (dispatch) => {
  dispatch({ type: ActionTypes.MOVE_WIDTH_BAR, leftWidth, middleWidth });
};

export const initNotes =(params: searchObj, checkNote: string | undefined) => async (dispatch) => {
  const { search, sortName, sortOrder } = params;
  dispatch(showLoading());
  dispatch(changeMiddleLoading(true));
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
        dispatch(changeMiddleLoading(false));
        dispatch(hideLoading());
      }
    });
};

export const changeMiddleLoading = (middleLoading: boolean) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_MIDDLE_LOADING, middleLoading });
};

export const changeContent = (content: string) => (dispatch, getState) => {
  const notes = _.cloneDeep(getNotes(getState()));
  const checkNotes = getCheckNotes(getState());
  if (notes.length > 0 && checkNotes.length === 1) {
    notes.forEach((item: any) => {
      if(item.id === checkNotes[0]) {
        item.content = content;
        dispatch({ type: ActionTypes.CHANGE_NOTES, notes });
      }
    });

  }
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
