import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';

import Toolbar from './Toolbar';
class EditToolbar extends Toolbar {

  menuText = '编辑';

  initMenu = () => {
    const toolbar: toolbarObj = {
      text: '编辑',
      menus: [
        {
          text: '删除',
        },
        {
          text: '全选',
        },
        {
          text: '清空回收站',
        },
      ]
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default EditToolbar;
