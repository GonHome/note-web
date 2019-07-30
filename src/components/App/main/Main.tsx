import * as React from 'react';
import * as classNames from 'classnames';
import Content from './Content';
import Editor from './Editor';
import MainHeadBar from './MainHeadBar';
import MultiEditor from './MultiEditor';
import EyeEditor from './EyeEditor';
import { eyeWidthObj } from '../../../models/models';
import EditSql from "./EditSql";
type propTypes = {
  height: number,
  width: number;
  leftWidth: number,
  middleWidth: number,
  theme: string;
  language: string;
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
  isEye: boolean;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
  changeLanguage: (language: string) => void;
  checkNotes: string[];
  mainLoading: boolean;
};
class Main extends React.Component<propTypes> {

  render() {
    const { height, leftWidth, middleWidth, width, theme, isEdit, changeIsEdit, isEye, changeIsEyeWidth, checkNotes, language, changeLanguage } = this.props;
    return (
      <div
        className={classNames("mainbar layout column", { multi: checkNotes.length > 1 } )}
        style={{ height, width: width - leftWidth - middleWidth }}>
        { checkNotes.length > 1 ? <MultiEditor checkNotes={checkNotes}/> :
          <div style={{ height: '100%' }}>
            <MainHeadBar isEdit={ isEdit } changeIsEdit={ changeIsEdit } isEye={ isEye }
                         changeIsEyeWidth={ changeIsEyeWidth } language={language} changeLanguage={changeLanguage} />
            {
              isEye
                ?
                <EyeEditor { ...this.props } />
                :
                (
                  isEdit ?
                    <EditSql
                      height={ height }
                      width={ width - leftWidth - middleWidth }
                      theme={ theme }
                      isEdit={ isEdit }
                      language={language}
                    />
                    :
                    <Content height={ height }/>
                )
            }
          </div>
        }
      </div>
    );
  }
}

export default Main;
