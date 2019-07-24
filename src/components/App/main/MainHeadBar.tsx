import * as React from 'react';
import { Button, ButtonGroup, Popover, Position } from '@blueprintjs/core';
import TagMenu from './TagMenu';
import { eyeWidthObj } from '../../../models/models';
import { LEFT_WIDTH, MIDDLE_WIDTH } from '../../../constants/CommonConstants';

type propTypes = {
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
  isEye: boolean;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
};
class MainHeadBar extends React.Component<propTypes> {

  changeEdit = () => {
    const { isEdit, changeIsEdit } = this.props;
    changeIsEdit(!isEdit);
  };

  changeEye = () => {
    const { isEye, changeIsEyeWidth } = this.props;
    if (isEye) {
      changeIsEyeWidth({ leftWidth: LEFT_WIDTH, middleWidth: MIDDLE_WIDTH, isEye: false });
    } else {
      changeIsEyeWidth({ leftWidth: 0, middleWidth: 0, isEye: true });
    }
  };

  render() {
    const { isEdit, isEye } = this.props;
    return (
      <div className="layout-header toolbar main-header">
        <ButtonGroup>
          <Button icon="edit" small title="编辑" active={isEdit} onClick={this.changeEdit} disabled={isEye}/>
          <Button icon="eye-on" small title="可视界面" active={isEye} onClick={this.changeEye}/>
          <Popover
            content={<TagMenu />}
            position={Position.BOTTOM}
          >
            <Button icon="tag" small title="标签" />
          </Popover>
          <Button icon="link" small title="附件" />
        </ButtonGroup>
        <ButtonGroup>
          <Button icon="star-empty" small title="关注" />
          <Button icon="pin" small title="固定" />
        </ButtonGroup>
        <ButtonGroup>
          <Button icon="git-push" small title="保存" />
          <Button icon="trash" small title="删除" />
        </ButtonGroup>
      </div>
    );
  }
}

export default MainHeadBar;
