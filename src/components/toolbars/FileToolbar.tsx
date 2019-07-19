import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';

import Toolbar from './Toolbar';
class FileToolbar extends Toolbar {

  menuText = '文件';

  initMenu = () => {
    const toolbar: toolbarObj = {
      text: '文件',
      menus: [
        {
          text: '导入'
        },
        {
          text: '导出',
          menus: [
            {
              text: 'HTML',
            },
            {
              text: 'Markdown',
            },
            {
              text: 'PDF',
            },
          ]
        },
        {
          text: '打开',
        },
        {
          text: '新建',
        },
        {
          text: '复制',
        },
        {
          text: '编辑',
        },
        {
          text: '编辑标签',
        },
        {
          text: '编辑附件',
        },
        {
          text: '关注',
        },
        {
          text: '固定',
        },
        {
          text: '删除',
        },
        {
          text: '永久删除',
        },
      ],
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default FileToolbar;
