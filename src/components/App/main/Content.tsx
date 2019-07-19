import * as React from 'react';
import Markdown from '../../../util/markdown';

type propTypes = {
  height: number;
};
class Content extends React.Component<propTypes> {

  render() {
    const { height } = this.props;
    const content = '\n' +
      '# 03 - The Middlebar\n' +
      '\n' +
      'The middlebar shows you all notes contained in the currently active category, properly ordered and filtered by the search query.\n' +
      '\n' +
      '## Search\n' +
      '\n' +
      'To search just type something in the search bar.\n' +
      '\n' +
      'The title of notes is searched in _fuzzily_, which basically means that you can omit some characters from the query: if for instance there\'s a note titled "Notable" you can also find it by typing "Noab" or "Notae", as long as the characters are in the right order the note will be found.\n' +
      '\n' +
      'The content of notes is searched in too, but not fuzzily, a full-match is required in this case.\n' +
      '\n' +
      '## New Note Button\n' +
      '\n' +
      'Next to the search bar there\'s also a button for creating a new note.\n' +
      '\n' +
      '## Sorting Order\n' +
      '\n' +
      'Right below the search bar you can change the order in which notes are being displayed.\n' +
      '\n' +
      'By default this is by `Title - Ascending`, so that the tutorial notes get displayed in order, but you might want to change this later to `Date Modified - Descending`, so that the most recently edited notes are at the top.\n' +
      '\n' +
      '## Notes\n' +
      '\n' +
      'Lastly there\'s the notes list.\n' +
      '\n' +
      'Notes will have some badges if they are pinned, favorited or have attachments.\n' +
      '\n' +
      'Pinned notes are displayed before the others.\n' +
      '\n' +
      'If you right-click them you can access some commands, all of them are also available from the app menu, most of them are also available from the mainbar\'s toolbar.\n';
    const html = Markdown.render ( content );
    return (
      <div className="content preview" dangerouslySetInnerHTML={{ __html: html }} style={{ height: height - 38 }}/>
    );
  }
}

export default Content;
