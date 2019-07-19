import * as React from 'react';
import { ButtonGroup } from '@blueprintjs/core';
import SysToolbar from './SysToolbar';
import FileToolbar from './FileToolbar';
import EditToolbar from './EditToolbar';
import ViewToolbar from './ViewToolbar';
import WindowToolbar from './WindowToolbar';
import HelpToolbar from './HelpToolbar';
type propTypes = {
  TOOLBAR_HEIGHT: number;
  theme: string;
  changeTheme: (theme: string) => void;
  changeDialogType: (dialogType: string) => void;
};
class Toolbars extends React.Component<propTypes> {

  render() {
    const { TOOLBAR_HEIGHT, theme, changeTheme, changeDialogType } = this.props;
    return (
      <div className="toolbar" style={{ height: TOOLBAR_HEIGHT }}>
        <ButtonGroup>
          <SysToolbar theme={theme} changeTheme={changeTheme} changeDialogType={changeDialogType}/>
          <FileToolbar />
          <EditToolbar />
          <ViewToolbar />
          <WindowToolbar />
          <HelpToolbar />
        </ButtonGroup>
      </div>
    );
  }
}

export default Toolbars;
