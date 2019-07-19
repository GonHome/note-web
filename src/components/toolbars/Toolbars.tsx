import * as React from 'react';
import { ButtonGroup } from '@blueprintjs/core';
import { toolbars } from '../../constants/ToolbarConstants';
import { toolbarObj } from '../../models/models';
import Toolbar from './Toolbar';
import SysToolbar from './SysToolbar';

type propTypes = {
  TOOLBAR_HEIGHT: number;
  theme: string;
  changeTheme: (theme: string) => void;
};
class Toolbars extends React.Component<propTypes> {
  showToolbars = (theme: string) => toolbars.map((toolbar: toolbarObj, index: number) => {
    return <Toolbar key={index} toolbar={toolbar} theme={theme}/>
  });

  render() {
    const { TOOLBAR_HEIGHT, theme } = this.props;
    return (
      <div className="toolbar" style={{ height: TOOLBAR_HEIGHT }}>
        <ButtonGroup>
          <SysToolbar toolbar={toolbars[0]} theme={theme}/>
        </ButtonGroup>
      </div>
    );
  }
}

export default Toolbars;
