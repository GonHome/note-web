import * as React from 'react';
import ToolbarMenu from './ToolbarMenu';
import { toolbarObj } from '../../models/models';
import { MIDDLE_WIDTH, LEFT_WIDTH } from '../../constants/CommonConstants';
import Toolbar from './Toolbar';
class ViewToolbar extends Toolbar {

  menuText = '视图';

  initMenu = () => {
    const { middleWidth, leftWidth, isEye, changeIsEyeWidth } = this.props;
    const toolbar: toolbarObj = {
      text: '视图',
      menus: [
        {
          text: '主界面',
          event: () => changeIsEyeWidth ? changeIsEyeWidth({ leftWidth: LEFT_WIDTH, middleWidth: MIDDLE_WIDTH, isEye: false }) : null,
          visiable: middleWidth === 0 || leftWidth === 0 ,
        },
        {
          text: '编辑界面',
          event: () => changeIsEyeWidth ? changeIsEyeWidth({ leftWidth: 0, middleWidth: 0, isEye: false })  : null,
          visiable: middleWidth !== 0 || leftWidth !== 0 ,
        },
        {
          text: '隐藏菜单',
          event: () => changeIsEyeWidth &&  middleWidth ? changeIsEyeWidth({ leftWidth: 0, middleWidth: middleWidth, isEye: false }) : null,
          visiable: leftWidth !== 0,
        },
        {
          text: '显示菜单',
          event: () => changeIsEyeWidth &&  middleWidth ? changeIsEyeWidth({ leftWidth: LEFT_WIDTH, middleWidth: middleWidth, isEye: false }) : null,
          visiable: leftWidth === 0 &&  middleWidth !== 0,
        },
        {
          text: '可视界面',
          event: () => changeIsEyeWidth ? changeIsEyeWidth({ leftWidth: 0, middleWidth:0, isEye: true }) : null,
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
