import * as React from 'react';
import { connect } from 'react-redux';
import { stateTypes } from '../reducers';
import App from '../components/App/App';
import { getAppHeight, getTheme, getWidth } from '../selectors/CommonSelectors';
import {
  getLeftWidth,
  getMiddleWidth,
  getSort,
  getIsEdit,
  getIsEye,
  getCheckMenu,
  getCheckNotes,
  getNotes,
  getSearch,
  getLeftLoading,
  getMiddleLoading,
  getMainLoading,
} from '../selectors/AppSelectors';
import {
  moveWidth,
  changeSort,
  changeIsEdit,
  changeIsEyeWidth,
  changeCheckMenu,
  changeCheckNotes,
  changeLanguage,
  initNotes,
  changeSearch,
  addNotes,
  changeContent,
  favoriteNotes,
  pinNotes,
  saveNotes,
  deleteNotes,
  deleteForeverNotes,
  addTag,
  delTag,
} from '../actions/AppActions';
import { sortObj, eyeWidthObj, searchObj } from '../models/models';
type propTypes = {
  height: number;
  leftWidth: number;
  middleWidth: number;
  width: number;
  sort: sortObj;
  checkMenu: string;
  checkNotes: string[];
  moveWidth: (leftWidth: number, middleWidth: number) => void;
  initNotes: (params: searchObj, checkNote: string[] | undefined) => void;
  changeSort: (sort: sortObj) => void;
  theme: string;
  search: string;
  notes: any[];
  isEdit: boolean;
  isEye: boolean;
  leftLoading: boolean;
  middleLoading: boolean;
  mainLoading: boolean;
  changeIsEdit: (isEdit: boolean) => void;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
  changeCheckMenu: (checkMenu: string) => void;
  changeCheckNotes: (checkNotes: string[]) => void;
  changeLanguage: (language: string) => void;
  changeSearch: (search: string) => void;
  addNotes: () => void;
  changeContent: (content: string) => void;
  favoriteNotes: (isFavourite: boolean, ids?: string) => void;
  pinNotes: (isPin: boolean, ids?: string) => void;
  saveNotes: () => void;
  deleteNotes: (isDelete: boolean, ids?: string) => void;
  deleteForeverNotes: (ids?: string) => void;
  addTag: (tagName :string) => void;
  delTag: (tagName :string) => void;
};

const AppContainer = (props: propTypes) => <App {...props} />;

const mapStateToProps = (state: stateTypes) => ({
  height: getAppHeight(state),
  width: getWidth(state),
  leftWidth: getLeftWidth(state),
  middleWidth: getMiddleWidth(state),
  sort: getSort(state),
  theme: getTheme(state),
  isEdit: getIsEdit(state),
  isEye: getIsEye(state),
  checkMenu: getCheckMenu(state),
  checkNotes: getCheckNotes(state),
  notes: getNotes(state),
  search: getSearch(state),
  leftLoading: getLeftLoading(state),
  middleLoading: getMiddleLoading(state),
  mainLoading: getMainLoading(state),
});

export default connect(
  mapStateToProps,
  {
    moveWidth,
    changeSort,
    changeIsEdit,
    changeIsEyeWidth,
    changeCheckMenu,
    changeCheckNotes,
    changeLanguage,
    initNotes,
    changeSearch,
    addNotes,
    changeContent,
    favoriteNotes,
    pinNotes,
    saveNotes,
    deleteNotes,
    deleteForeverNotes,
    addTag,
    delTag,
  },
)(AppContainer);
