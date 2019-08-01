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
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
  isEye: boolean;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
  changeLanguage: (language: string) => void;
  checkNotes: string[];
  mainLoading: boolean;
  notes: any;
  changeContent: (content: string) => void;
  favoriteNotes: (isFavourite: boolean) => void;
  pinNotes: (isPin: boolean, ids?: string) => void;
  saveNotes: () => void;
  deleteNotes: (isDelete: boolean, ids?: string) => void;
  deleteForeverNotes: (ids?: string) => void;
};
class Main extends React.Component<propTypes> {

  render() {
    const { height, leftWidth, middleWidth, width, theme, isEdit, changeIsEdit, isEye, changeIsEyeWidth, checkNotes, changeContent, changeLanguage, notes, favoriteNotes, pinNotes, saveNotes, deleteNotes, deleteForeverNotes } = this.props;
    let checkNote: any = null;
    if (notes.length > 0 && checkNotes.length === 1) {
      checkNote = notes.filter((item: any) => {
        return item.id === checkNotes[0]
      })[0];
    }
    return (
      <div
        className={classNames("mainbar layout column", { multi: checkNotes.length > 1 } )}
        style={{ height, width: width - leftWidth - middleWidth }}>
        { checkNotes.length > 1 ?
          <MultiEditor
            checkNotes={checkNotes}
            favoriteNotes={favoriteNotes}
            pinNotes={pinNotes}
            deleteNotes={deleteNotes}
            deleteForeverNotes={deleteForeverNotes}
          /> :
          <div style={{ height: '100%' }}>
            <MainHeadBar isEdit={ isEdit } changeIsEdit={ changeIsEdit } isEye={ isEye }
               changeIsEyeWidth={ changeIsEyeWidth }
               language={checkNote ? checkNote.language : ''}
               isFavourite={checkNote ? checkNote.isFavourite : false}
               isPin={checkNote ? checkNote.isPin : false}
               isDelete={checkNote ? checkNote.isDelete : false}
               changeLanguage={changeLanguage}
               favoriteNotes={favoriteNotes}
               pinNotes={pinNotes}
               saveNotes={saveNotes}
               deleteNotes={deleteNotes}
               deleteForeverNotes={deleteForeverNotes}
            />
            {
              isEye
                ?
                <EyeEditor { ...this.props } checkNote={checkNote} changeContent={changeContent} />
                :
                (
                  isEdit ?
                    <Editor
                      height={ height }
                      width={ width - leftWidth - middleWidth }
                      theme={ theme }
                      isEdit={ isEdit }
                      checkNote={checkNote}
                      changeContent={changeContent}
                    />
                    :
                    <Content height={ height } content={checkNote ? checkNote.content : ''}/>
                )
            }
          </div>
        }
      </div>
    );
  }
}

export default Main;
