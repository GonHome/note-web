import * as React from 'react';
import { Button, ButtonGroup, Popover, Position } from '@blueprintjs/core';
import TagMenu from './TagMenu';

type propTypes = {
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
};
class MainHeadBar extends React.Component<propTypes> {

  changeIsEdit = () => {
    const { isEdit, changeIsEdit } = this.props;
    changeIsEdit(!isEdit);
  };

  render() {
    const { isEdit } = this.props;
    return (
      <div className="layout-header toolbar main-header">
        <ButtonGroup>
          <Button icon="edit" small title="编辑" active={isEdit} onClick={this.changeIsEdit}/>
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
