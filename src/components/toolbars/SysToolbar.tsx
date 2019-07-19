import * as React from 'react';
import {
  Button, Popover, Position,
} from '@blueprintjs/core';
import ToolbarMenu from './ToolbarMenu';
import Toolbar from './Toolbar';
class SysToolbar extends Toolbar {

  initMenu = () => {
    const { toolbar, theme } = this.props;
    return (
      <ToolbarMenu toolbar={toolbar} theme={theme} />
    )
  };
}

export default SysToolbar;
