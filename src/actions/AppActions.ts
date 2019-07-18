import { createStandardAction } from 'typesafe-actions';
import * as ActionTypes from '../constants/ActionTypes';

export const moveWidth = createStandardAction(
  ActionTypes.MOVE_WIDTH_BAR,
).map((leftWidth: number, middleWidth: number) => ({ leftWidth, middleWidth }));
