import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';
import Toolbar from './Toolbar';
class HelpToolbar extends Toolbar {

  menuText = '帮助';

  initMenu = () => {
    const toolbar: toolbarObj = {
      text: '帮助',
      menus: [
        {
          text: '帮助手册',
          visiable: true,
        },
      ]
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default HelpToolbar;
