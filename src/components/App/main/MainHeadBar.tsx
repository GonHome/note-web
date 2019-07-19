import * as React from 'react';
import { Button, ButtonGroup } from '@blueprintjs/core';

type propTypes = {
};
class MainHeadBar extends React.Component<propTypes> {

  render() {
    return (
      <div className="layout-header toolbar">
        <ButtonGroup>
          <Button icon="edit" small title="编辑" />
          <Button icon="tag" small title="标签" />
          <Button icon="link" small title="附件" />
        </ButtonGroup>
        <ButtonGroup>
          <Button icon="star-empty" small title="关注" />
          <Button icon="pin" small title="固定" />
        </ButtonGroup>
        <ButtonGroup>
          <Button icon="trash" small title="删除" />
        </ButtonGroup>
      </div>
    );
  }
}

export default MainHeadBar;
