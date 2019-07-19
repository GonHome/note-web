import { createStandardAction } from 'typesafe-actions';
import * as ActionTypes from '../constants/ActionTypes';

export const initEnvironment = createStandardAction(
  ActionTypes.WINDOW_RESIZE,
).map(() => ({ height: window.innerHeight, width: window.innerWidth }));

export const changeTheme = createStandardAction(
  ActionTypes.CHANGE_THEME,
).map((theme: string) => ({ theme }));
