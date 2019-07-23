import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';
import { MIDDLE_WIDTH, LEFT_WIDTH } from '../../constants/CommonConstants';
import Toolbar from './Toolbar';
class ViewToolbar extends Toolbar {

  menuText = '视图';

  initMenu = () => {
    const { moveWidth, middleWidth, leftWidth, isEye, changeIsEye } = this.props;
    const toolbar: toolbarObj = {
      text: '视图',
      menus: [
        {
          text: '主界面',
          event: () => moveWidth ? moveWidth(LEFT_WIDTH, MIDDLE_WIDTH) : null,
          visiable: middleWidth === 0 || leftWidth === 0 ,
        },
        {
          text: '编辑界面',
          event: () => moveWidth ? moveWidth(0, 0) : null,
          visiable: middleWidth !== 0 || leftWidth !== 0 ,
        },
        {
          text: '隐藏菜单',
          event: () => moveWidth &&  middleWidth ? moveWidth(0, middleWidth) : null,
          visiable: leftWidth !== 0,
        },
        {
          text: '显示菜单',
          event: () => moveWidth &&  middleWidth ? moveWidth(LEFT_WIDTH, middleWidth) : null,
          visiable: leftWidth === 0 &&  middleWidth !== 0,
        },
        {
          text: '可视界面',
          event: () => changeIsEye ? changeIsEye(true) : null,
          visiable: !isEye,
        },
      ]
    };
    return (
      <ToolbarMenu toolbar={toolbar} />
    )
  };
}

export default ViewToolbar;
