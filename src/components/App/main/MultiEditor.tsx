import * as React from 'react';
import { ButtonGroup, Button, Icon, InputGroup } from '@blueprintjs/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
type propTypes = {
  checkNotes: string[];
};
class MultiEditor extends React.Component<propTypes> {
  addTagButton = (
    <Button
      icon="tag"
      minimal
      title="添加标签"
      large
    />
  );
  delTagButton = (
    <Button
      icon={<Icon icon="tag" color="red" />}
      minimal
      title="删除标签"
      large
    />
  );
  render() {
    const { checkNotes } = this.props;
    return (
      <div className="multi-editor">
        <h1>{checkNotes.length} notes selected</h1>
        <div className="container bordered action">
          <Grid fluid>
            <Row>
              <Col xs={6} md={6}>
                <ButtonGroup className="button-group">
                  <Button className="button-50 button" icon={<Icon icon="star-empty" iconSize={24} />} title="取消关注" large />
                  <Button className="button-50 button" icon={<Icon icon="star" iconSize={24} />} title="关注" large />
                </ButtonGroup>
              </Col>
              <Col xs={6} md={6}>
                <ButtonGroup className="button-group">
                  <Button className="button-50 button" icon={<Icon icon="unpin" iconSize={24} />}title="取消置顶" large />
                  <Button className="button-50 button" icon={<Icon icon="pin" iconSize={24} />} title="置顶" large />
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={9} md={9}>
                <ButtonGroup className="button-group">
                  <Button className="button-33 button" icon={<Icon icon="trash" iconSize={24} />} title="删除" large />
                  <Button className="button-33 button" icon={<Icon icon="trash" iconSize={24} color="green"  />} title="恢复" large />
                  <Button className="button-33 button" icon={<Icon icon="trash" iconSize={24} color="red" />} title="永久删除" large />
                </ButtonGroup>
              </Col>
            </Row>
            <InputGroup large placeholder="添加标签..." rightElement={this.addTagButton} />
            <InputGroup large placeholder="删除标签..." rightElement={this.delTagButton} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default MultiEditor;
