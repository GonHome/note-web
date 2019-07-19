import * as React from 'react';
import { Button, ButtonGroup } from '@blueprintjs/core';

type propTypes = {
};
class MainHeadBar extends React.Component<propTypes> {

  render() {
    return (
      <div className="layout-header toolbar">
        <ButtonGroup>
          <Button icon="edit" small />
          <Button icon="tag" small />
          <Button icon="link" small />
        </ButtonGroup>
        <ButtonGroup>
          <Button icon="star-empty" small />
          <Button icon="pin" small />
        </ButtonGroup>
        <ButtonGroup className="right-group">
          <Button icon="trash" small />
        </ButtonGroup>
      </div>
    );
  }
}

export default MainHeadBar;
