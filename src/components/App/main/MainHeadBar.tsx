import * as React from 'react';
import { Button, ButtonGroup, Popover, Position, Icon } from '@blueprintjs/core';
import TagMenu from './TagMenu';
import LanguageMenu from './LanguageMenu';
import { eyeWidthObj } from '../../../models/models';
import { LEFT_WIDTH, MIDDLE_WIDTH } from '../../../constants/CommonConstants';


type propTypes = {
  isEdit: boolean;
  changeIsEdit: (isEdit: boolean) => void;
  isEye: boolean;
  language: string;
  changeIsEyeWidth: ({ leftWidth, middleWidth, isEye }: eyeWidthObj) => void;
  changeLanguage: (language: string) => void;
  favoriteNotes: (isFavourite: boolean, ids?: string) => void;
  isFavourite: boolean;
  pinNotes: (isPin: boolean) => void;
  isPin: boolean;
  saveNotes: () => void;
  isDelete: boolean;
  deleteNotes: (isDelete: boolean, ids?: string) => void;
  deleteForeverNotes: (ids?: string) => void;
};
class MainHeadBar extends React.Component<propTypes> {

  changeEdit = () => {
    const { isEdit, changeIsEdit } = this.props;
    changeIsEdit(!isEdit);
  };

  changeEye = () => {
    const { isEye, changeIsEyeWidth } = this.props;
    if (isEye) {
      changeIsEyeWidth({ leftWidth: LEFT_WIDTH, middleWidth: MIDDLE_WIDTH, isEye: false });
    } else {
      changeIsEyeWidth({ leftWidth: 0, middleWidth: 0, isEye: true });
    }
  };

  render() {
    const { isEdit, isEye, language, changeLanguage, isFavourite, favoriteNotes, isPin, pinNotes, saveNotes, isDelete, deleteNotes, deleteForeverNotes } = this.props;
    return (
      <div className="layout-header toolbar main-header">
        <ButtonGroup>
          <Button icon="edit" small title="编辑" active={isEdit} onClick={this.changeEdit} disabled={isEye}/>
          <Button icon="translate" small title="可视界面" active={isEye} onClick={this.changeEye}/>
          <Popover
            content={<TagMenu />}
            position={Position.BOTTOM}
          >
            <Button icon="tag" small title="标签" />
          </Popover>
          <Button icon="link" small title="附件" />
        </ButtonGroup>
        <ButtonGroup>
          <Button icon="star-empty" small title="关注" active={isFavourite} onClick={ () => favoriteNotes(!isFavourite)} />
          <Button icon="pin" small title="置顶" active={isPin} onClick={ () => pinNotes(!isPin)} />
        </ButtonGroup>
        <ButtonGroup>
          <Button icon="git-push" small title="保存" onClick={saveNotes}/>
          {!isDelete ? <Button icon="trash" small title="删除" onClick={() => deleteNotes(true)}/> : null}
          {isDelete ? <Button icon="undo" small title="还原" onClick={() => deleteNotes(false)}/> : null}
          {isDelete ? <Button icon={<Icon icon="trash" color="red" />} small title="永久删除" onClick={() => deleteForeverNotes()} /> : null}
        </ButtonGroup>
        <Popover
          content={<LanguageMenu language={language} changeLanguage={changeLanguage}/>}
          position={Position.BOTTOM}
        >
          <Button icon="font" small title="语言" text={language} />
        </Popover>
      </div>
    );
  }
}

export default MainHeadBar;
