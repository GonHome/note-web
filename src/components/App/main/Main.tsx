import * as React from 'react';
import Content from './Content';
import Editor from './Editor';
import MainHeadBar from './MainHeadBar';
import EyeEditor from './EyeEditor';
import { eyeWidthObj } from '../../../models/models';
type propTypes = {
  height: number,
  width: number;
  leftWidth: number,
  middleWidth: number,
  theme: string;
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
  isEye: boolean;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
};
class Main extends React.Component<propTypes> {

  render() {
    const { height, leftWidth, middleWidth, width, theme, isEdit, changeIsEdit, isEye, changeIsEyeWidth } = this.props;
    return (
      <div className="mainbar layout column" style={{ height, width: width - leftWidth - middleWidth }}>
        <MainHeadBar isEdit={isEdit} changeIsEdit={changeIsEdit} isEye={isEye} changeIsEyeWidth={changeIsEyeWidth}/>
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
