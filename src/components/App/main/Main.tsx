import * as React from 'react';
import Content from './Content';
import Editor from './Editor';
import MainHeadBar from './MainHeadBar';
import EyeEditor from './EyeEditor';
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
class Main extends React.Component<propTypes> {

  render() {
    const { height, leftWidth, middleWidth, width, theme, isEdit, changeIsEdit, isEye, changeIsEye } = this.props;
    return (
      <div className="mainbar layout column" style={{ height, width: width - leftWidth - middleWidth }}>
        <MainHeadBar isEdit={isEdit} changeIsEdit={changeIsEdit} isEye={isEye} changeIsEye={changeIsEye}/>
        {
          isEye
            ?
            <EyeEditor { ... this.props } />
            :
            (
              isEdit ?
                <Editor
                  height={height}
                  width={width - leftWidth - middleWidth}
                  theme={theme}
                  isEdit={isEdit}
                />
                :
                <Content height={height}/>
            )
        }
      </div>
    );
  }
}

export default Main;
