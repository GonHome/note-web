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
          text: '导入',
          visiable: true,
        },
        {
          text: '导出',
          menus: [
            {
              text: 'HTML',
              visiable: true,
            },
            {
              text: 'Markdown',
              visiable: true,
            },
            {
              text: 'PDF',
              visiable: true,
            },
          ]
        },
        {
          text: '打开',
          visiable: true,
        },
        {
          text: '新建',
          visiable: true,
        },
        {
          text: '复制',
          visiable: true,
        },
        {
          text: '编辑',
          visiable: true,
        },
        {
          text: '编辑标签',
          visiable: true,
        },
        {
          text: '编辑附件',
          visiable: true,
        },
        {
          text: '关注',
          visiable: true,
        },
        {
          text: '置顶',
          visiable: true,
        },
        {
          text: '删除',
          visiable: true,
        },
        {
          text: '永久删除',
          visiable: true,
        },
      ],
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default FileToolbar;
