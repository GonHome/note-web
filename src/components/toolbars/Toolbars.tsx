import * as React from 'react';
import { ButtonGroup } from '@blueprintjs/core';
import SysToolbar from './SysToolbar';
import FileToolbar from './FileToolbar';
import EditToolbar from './EditToolbar';
import ViewToolbar from './ViewToolbar';
import WindowToolbar from './WindowToolbar';
import HelpToolbar from './HelpToolbar';
import { eyeWidthObj } from '../../models/models';
type propTypes = {
  TOOLBAR_HEIGHT: number;
  theme: string;
  changeTheme: (theme: string) => void;
  changeDialogType: (dialogType: string) => void;
  moveWidth: (leftWidth: number, middleWidth: number) => void;
  middleWidth: number;
  leftWidth: number;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
  isEye: boolean;
  clearNotes: () => void;
  choseAll: () => void;
  deleteNotes: (isDelete: boolean, ids?: string) => void;
};
class Toolbars extends React.Component<propTypes> {

  render() {
    const { TOOLBAR_HEIGHT, theme, changeTheme, changeDialogType, moveWidth, middleWidth, leftWidth, changeIsEyeWidth, isEye, clearNotes, choseAll, deleteNotes } = this.props;
    return (
      <div className="toolbar" style={{ height: TOOLBAR_HEIGHT }}>
        <ButtonGroup>
          <SysToolbar theme={theme} changeTheme={changeTheme} changeDialogType={changeDialogType}/>
          <FileToolbar />
          <EditToolbar clearNotes={clearNotes} choseAll={choseAll} deleteNotes={deleteNotes} />
          <ViewToolbar moveWidth={moveWidth} middleWidth={middleWidth} leftWidth={leftWidth} changeIsEyeWidth={changeIsEyeWidth} isEye={isEye}/>
          <WindowToolbar />
          <HelpToolbar />
        </ButtonGroup>
      </div>
    );
  }
}

export default Toolbars;
