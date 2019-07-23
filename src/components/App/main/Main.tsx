import * as React from 'react';
import Content from './Content';
import Editor from './Editor';
import MainHeadBar from './MainHeadBar';
type propTypes = {
  height: number,
  width: number;
  leftWidth: number,
  middleWidth: number,
  theme: string;
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
};
class Main extends React.Component<propTypes> {

  render() {
    const { height, leftWidth, middleWidth, width, theme, isEdit, changeIsEdit } = this.props;
    return (
      <div className="mainbar layout column" style={{ height, width: width - leftWidth - middleWidth }}>
        <MainHeadBar isEdit={isEdit} changeIsEdit={changeIsEdit}/>
        { isEdit ?
          <Editor
            height={height}
            width={width - leftWidth - middleWidth}
            theme={theme}
            isEdit={isEdit}
          />
          :
          <Content height={height}/>
        }
      </div>
    );
  }
}

export default Main;
