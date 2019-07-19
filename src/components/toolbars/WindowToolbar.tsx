import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';
import Toolbar from './Toolbar';
class WindowToolbar extends Toolbar {

  menuText = '窗口';

  focusSearch = () => {
    const search = document.getElementById("search");
    if (search) {
      search.focus();
    }
  };

  initMenu = () => {
    const toolbar: toolbarObj = {
      text: '窗口',
      menus: [
        {
          text: '搜索',
          event: () => this.focusSearch(),
        },
        {
          text: '上一个标签',
        },
        {
          text: '下一个标签',
        },
        {
          text: '上一个笔记',
        },
        {
          text: '下一个笔记',
        },
      ]
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default WindowToolbar;
