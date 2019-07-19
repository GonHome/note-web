import * as React from 'react';
import { Dialog } from '@blueprintjs/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pkg from '../../../package.json';
type propTypes = {
  isOpen: boolean;
  onClose: () => void;
};
type stateTypes = {
}
class AboutDialog extends React.Component<propTypes, stateTypes> {

  constructor(props: propTypes) {
    super(props);
    this.state = {}
  }

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Dialog
        title="关于系统"
        icon="info-sign"
        isOpen={isOpen}
        onClose={onClose}
        style={{ width: 300, height: 200 }}
      >
        <Grid fluid>
          <Row>
            <Col xs={4} md={4}>
              <img src='logo.svg' />
            </Col>
            <Col xs={8} md={8}>
              <h1>{pkg.name}</h1>
              <div>版本：{pkg.version}</div>
              <div>作者：{pkg.author}</div>
            </Col>
          </Row>
        </Grid>

      </Dialog>
    );
  }
}

export default AboutDialog;
