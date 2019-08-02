import * as React from 'react';
import { ButtonGroup, Button, Icon, InputGroup } from '@blueprintjs/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { doErrMessage } from '../../../util/api';
type propTypes = {
  checkNotes: string[];
  favoriteNotes: (isFavourite: boolean, ids?: string) => void;
  pinNotes: (isPin: boolean, ids?: string) => void;
  deleteNotes: (isDelete: boolean, ids?: string) => void;
  deleteForeverNotes: (ids?: string) => void;
  addTag: (tagName :string) => void;
  delTag: (tagName :string) => void;
};
type stateTypes = {
  addValue: string;
  delValue: string;
};

class MultiEditor extends React.Component<propTypes, stateTypes> {
  constructor(props: propTypes) {
    super(props);
    this.state = {
      addValue: '',
      delValue: '',
    }
  }
  addTagButton = () =>{
    return (
      <Button
        icon="tag"
        minimal
        title="添加标签"
        large
        onClick={this.addEvent}
      />
    )
  };

  addEvent = () => {
    const { addTag } = this.props;
    const { addValue } = this.state;
    if (addValue) {
      addTag(addValue);
      this.setState({ addValue: ''});
    } else {
      doErrMessage('标签名称不可为空');
    }
  };

  delTagButton = () =>{
    return (
      <Button
        icon={<Icon icon="tag" color="red" />}
        minimal
        title="删除标签"
        large
        onClick={this.delEvent}
      />
    )
  };

  delEvent = () => {
    const { delTag } = this.props;
    const { delValue } = this.state;
    if (delValue) {
      delTag(delValue);
      this.setState({ delValue: ''});
    } else {
      doErrMessage('标签名称不可为空');
    }
  };

  render() {
    const { checkNotes, favoriteNotes, pinNotes, deleteForeverNotes, deleteNotes } = this.props;
    const { delValue, addValue } = this.state;
    return (
      <div className="multi-editor">
        <h1>{checkNotes.length} notes selected</h1>
        <div className="container bordered action">
          <Grid fluid>
            <Row>
              <Col xs={6} md={6}>
                <ButtonGroup className="button-group">
                  <Button className="button-50 button" icon={<Icon icon="star-empty" iconSize={24} />} title="取消关注" large onClick={() => favoriteNotes(false)} />
                  <Button className="button-50 button" icon={<Icon icon="star" iconSize={24} />} title="关注" large onClick={() => favoriteNotes(true)}/>
                </ButtonGroup>
              </Col>
              <Col xs={6} md={6}>
                <ButtonGroup className="button-group">
                  <Button className="button-50 button" icon={<Icon icon="unpin" iconSize={24} />}title="取消置顶" large onClick={() => pinNotes(false)} />
                  <Button className="button-50 button" icon={<Icon icon="pin" iconSize={24} />} title="置顶" large onClick={() => pinNotes(true)}/>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={9} md={9}>
                <ButtonGroup className="button-group">
                  <Button className="button-33 button" icon={<Icon icon="trash" iconSize={24} />} title="删除" large onClick={() => deleteNotes(true)} />
                  <Button className="button-33 button" icon={<Icon icon="undo" iconSize={24} />} title="还原" large onClick={() => deleteNotes(false)} />
                  <Button className="button-33 button" icon={<Icon icon="trash" iconSize={24} color="red" />} title="永久删除" large onClick={() => deleteForeverNotes()}/>
                </ButtonGroup>
              </Col>
            </Row>
            <InputGroup large placeholder="添加标签..." rightElement={this.addTagButton()} onChange={e => this.setState({ addValue: e.currentTarget.value })} value={addValue} />
            <InputGroup large placeholder="删除标签..." rightElement={this.delTagButton()} onChange={e => this.setState({ delValue: e.currentTarget.value })} value={delValue} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default MultiEditor;
