import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as _ from 'lodash';
import * as ActionTypes from '../constants/ActionTypes';
import { sortObj, eyeWidthObj, searchObj } from '../models/models';
import { api, checkError, doError, doSucMessage } from '../util/api';
import { getCheckNotes, getSearch, getSort, getNotes } from '../selectors/AppSelectors';

export const moveWidth = (leftWidth: number, middleWidth: number) => (dispatch) => {
  dispatch({ type: ActionTypes.MOVE_WIDTH_BAR, leftWidth, middleWidth });
};

export const initNotes =(params: searchObj, checkNote: string[] | undefined) => async (dispatch) => {
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
        if (checkNote && checkNote.length > 0) {
          checkNoteIds = checkNote.filter((item: any) => noteIds.indexOf(item) > -1);
        }
        if (checkNoteIds.length === 0 &&  notes.length > 0) {
          checkNoteIds = [notes[0].id];
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
  let name = content.split('\n').filter((item: string) => item && item !== '\r')[0];
  if (name) {
    name = name.replace('#', '');
  }
  if (notes.length > 0 && checkNotes.length === 1) {
    notes.forEach((item: any) => {
      if(item.id === checkNotes[0]) {
        item.content = content;
        item.name = name ? name : '未命名';
        dispatch({ type: ActionTypes.CHANGE_NOTES, notes });
      }
    });
  }
};

export const favoriteNotes = (isFavourite: boolean, ids?: string) =>  async (dispatch, getState) => {
  const checkNotes = getCheckNotes(getState());
  const search = getSearch(getState());
  const sort = getSort(getState());
  const { sortName, sortOrder } = sort;
  if (!ids) {
    ids = checkNotes.join(',');
  }
  const params: searchObj = { search, sortName, sortOrder };
  if (ids) {
    api.jsonHal().from('/api/note/update/').post({ ids, isFavourite },
      (err, response) => {
        const error = checkError({response, error: err});
        if (error) {
          doError(error);
        } else {
          if (isFavourite) {
            doSucMessage('关注成功');
          } else {
            doSucMessage('取消成功');
          }
          dispatch(initNotes(params, checkNotes));
          dispatch(hideLoading());
        }
      });
  }
};

export const pinNotes = (isPin: boolean, ids?: string) =>  async (dispatch, getState) => {
  const checkNotes = getCheckNotes(getState());
  const search = getSearch(getState());
  const sort = getSort(getState());
  const { sortName, sortOrder } = sort;
  if (!ids) {
    ids = checkNotes.join(',');
  }
  const params: searchObj = { search, sortName, sortOrder };
  if (ids) {
    api.jsonHal().from('/api/note/update/').post({ ids, isPin },
      (err, response) => {
        const error = checkError({response, error: err});
        if (error) {
          doError(error);
        } else {
          if (isPin) {
            doSucMessage('置顶成功');
          } else {
            doSucMessage('取消成功');
          }
          dispatch(initNotes(params, checkNotes));
          dispatch(hideLoading());
        }
      });
  }
};

export const changeLanguage = (language: string) => (dispatch, getState) => {
  const checkNotes = getCheckNotes(getState());
  const search = getSearch(getState());
  const sort = getSort(getState());
  const { sortName, sortOrder } = sort;
  const ids = checkNotes.join(',');
  const params: searchObj = { search, sortName, sortOrder };
  if (ids) {
    api.jsonHal().from('/api/note/update/').post({ ids, language },
      (err, response) => {
        const error = checkError({response, error: err});
        if (error) {
          doError(error);
        } else {
          doSucMessage('切换成功');
          dispatch(initNotes(params, checkNotes));
          dispatch(hideLoading());
        }
      });
  }
};

export const saveNotes = () => (dispatch, getState) => {
  const checkNotes = getCheckNotes(getState());
  const search = getSearch(getState());
  const sort = getSort(getState());
  const { sortName, sortOrder } = sort;
  const ids = checkNotes.join(',');
  const params: searchObj = { search, sortName, sortOrder };
  if (checkNotes.length === 1) {
    const notes = getNotes(getState());
    const checkNote = notes.filter((item: any) => item.id === checkNotes[0]);
    if (checkNote[0]) {
      api.jsonHal().from('/api/note/update/').post({ ids,  ...checkNote[0] },
        (err, response) => {
          const error = checkError({response, error: err});
          if (error) {
            doError(error);
          } else {
            doSucMessage('保存成功');
            dispatch(initNotes(params, checkNotes));
            dispatch(hideLoading());
          }
        });
    }
  }
};

export const deleteNotes = (isDelete: boolean, ids?: string) => async (dispatch, getState) => {
  const checkNotes = getCheckNotes(getState());
  const search = getSearch(getState());
  const sort = getSort(getState());
  const { sortName, sortOrder } = sort;
  if (!ids) {
    ids = checkNotes.join(',');
  }
  const params: searchObj = { search, sortName, sortOrder };
  if (checkNotes.length > 0) {
    const notes = getNotes(getState());
    const checkNote = notes.filter((item: any) => item.id === checkNotes[0]);
    if (checkNote[0]) {
      api.jsonHal().from('/api/note/update/').post({ ids,  isDelete },
        (err, response) => {
          const error = checkError({response, error: err});
          if (error) {
            doError(error);
          } else {
            if (isDelete) {
              doSucMessage('删除成功');
            } else {
              doSucMessage('还原成功');
            }
            dispatch(initNotes(params, checkNotes));
            dispatch(hideLoading());
          }
        });
    }
  }
};

export const deleteForeverNotes = (ids?: string) => async (dispatch, getState) => {
  const checkNotes = getCheckNotes(getState());
  const search = getSearch(getState());
  const sort = getSort(getState());
  const { sortName, sortOrder } = sort;
  if (!ids) {
    ids = checkNotes.join(',');
  }
  const params: searchObj = { search, sortName, sortOrder };
  if (checkNotes.length > 0) {
    const notes = getNotes(getState());
    const checkNote = notes.filter((item: any) => item.id === checkNotes[0]);
    if (checkNote[0]) {
      api.jsonHal().from('/api/note/delete/').post({ ids },
        (err, response) => {
          const error = checkError({response, error: err});
          if (error) {
            doError(error);
          } else {
            doSucMessage('永久删除成功');
            dispatch(initNotes(params, checkNotes));
            dispatch(hideLoading());
          }
        });
    }
  }
};

export const clearNotes = () => async (dispatch, getState) => {
  const checkNotes = getCheckNotes(getState());
  const search = getSearch(getState());
  const sort = getSort(getState());
  const { sortName, sortOrder } = sort;
  const params: searchObj = { search, sortName, sortOrder };
  api.jsonHal().from('/api/note/clear/').post({},
    (err, response) => {
      const error = checkError({response, error: err});
      if (error) {
        doError(error);
      } else {
        doSucMessage('清空回收站成功');
        dispatch(initNotes(params, checkNotes));
        dispatch(hideLoading());
      }
    });
};

export const choseAll = () => (dispatch, getState) => {
  const notes = getNotes(getState());
  const checkNotes = notes.map((item: any) => item.id);
  dispatch(changeCheckNotes(checkNotes));
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
        doSucMessage('添加成功');
        dispatch(initNotes(params, [response.id]));
        dispatch(changeIsEdit(true));
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
  dispatch(initNotes(params, checkNotes));
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


