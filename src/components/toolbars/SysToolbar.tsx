import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';

import Toolbar from './Toolbar';
class SysToolbar extends Toolbar {

  menuText = '系统';

  initMenu = () => {
    const { theme, changeTheme, changeDialogType } = this.props;
    const toolbar: toolbarObj = {
      text: '系统',
      menus: [
        {
          text: '关于系统',
          event: () => changeDialogType ? changeDialogType('about') : null,
        },
        {
          text: '主题',
          menus: [
            {
              text: 'Light',
              icon: 'Light' === theme ? 'tick' : 'blank',
              event: () => changeTheme ? changeTheme('Light') : null,
            },
            {
              text: 'Dark',
              icon: 'Dark' === theme ? 'tick' : 'blank',
              event: () => changeTheme ? changeTheme('Dark') : null,
            },
          ]
        },
        {
          text: '退出'
        }
      ],
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default SysToolbar;
