import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';
import Toolbar from './Toolbar';
class ViewToolbar extends Toolbar {

  menuText = '视图';

  initMenu = () => {
    const toolbar: toolbarObj = {
      text: '视图',
      menus: [
        {
          text: '主界面',
        },
        {
          text: '隐藏菜单',
        },
        {
          text: '编辑界面',
        },
      ]
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default ViewToolbar;
