import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';

import Toolbar from './Toolbar';
class EditToolbar extends Toolbar {

  menuText = '编辑';

  initMenu = () => {
    const { clearNotes, choseAll, deleteNotes } = this.props;
    const toolbar: toolbarObj = {
      text: '编辑',
      menus: [
        {
          text: '删除',
          visiable: true,
          event: () => deleteNotes ? deleteNotes(true) : null,
        },
        {
          text: '全选',
          visiable: true,
          event: () => choseAll ? choseAll() : null,
        },
        {
          text: '清空回收站',
          visiable: true,
          event: () => clearNotes ? clearNotes() : null,
        },
      ]
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default EditToolbar;
