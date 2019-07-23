import * as React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Content from './Content';
import Editor from './Editor';

type propTypes = {
  height: number,
  width: number;
  leftWidth: number,
  middleWidth: number,
  theme: string;
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
  isEye: boolean;
  changeIsEye: (isEye: boolean) => void;
};
class EyeEditor extends React.Component<propTypes> {

  render() {
    const { height, leftWidth, middleWidth, width, theme, isEdit } = this.props;
    return (
      <Grid fluid style={{ width : width - leftWidth - middleWidth }}>
        <Row>
          <Col xs={6} md={6}>
            <Content height={height}/>
          </Col>
          <Col xs={6} md={6}>
            <Editor
              height={height}
              width={(width - leftWidth - middleWidth) / 2}
              theme={theme}
              isEdit={isEdit}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default EyeEditor;
