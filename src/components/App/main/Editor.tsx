import * as React from 'react';
import * as _ from 'lodash';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/editor/contrib/dnd/dnd.js';
import 'monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations.js';
import 'monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js';
import 'monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js';
import 'monaco-editor/esm/vs/basic-languages/apex/apex.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/go/go.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/less/less.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/php/php.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/r/r.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/st/st.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js';
import { MonacoEditor } from '../../../models/models';

type propTypes = {
  height: number;
  width: number;
  theme: string;
  isEdit: boolean;
};
type stateTypes = {
  lineNun: number;
  content: string;
  theme: string;
}
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

class Editor extends React.Component<propTypes, stateTypes> {
  private content;
  private ref;
  private editor;
  constructor(props: propTypes) {
    super(props);
    this.state = {
      lineNun: 0,
      content: _.cloneDeep(content),
      theme: 'Light',
    }
  }

  componentDidMount(): void {
    this.initMonaco (this.props);
    const scrollHeight = this.content.scrollHeight;
    this.setState({ lineNun: scrollHeight / 21 });
    const docu = document.getElementById('high-content');
    console.log(docu);
  }

  componentWillReceiveProps(nextProps: Readonly<propTypes>, nextContext: any): void {
    if (nextProps.theme !== this.state.theme) {
      const { theme } = nextProps;
      if (this.editor) {
        monaco.editor.setTheme(theme === 'Light' ? 'vs' : 'vs-dark');
      }
      this.setState({ theme: nextProps.theme });
    }
  }

  initMonaco = (props: propTypes) => {
    const { theme } = props;
    this.editor = monaco.editor.create ( this.ref,
      {
        lineNumbers: 'off',
        language: 'markdown',
        value: content,
        lineHeight: 21,
        theme: theme === 'Light' ? 'vs' : 'vs-dark',
        minimap: { enabled: false },
        wordWrap: 'on',
      }) as unknown as MonacoEditor; //TSC //UGLY
    this.editor.onDidChangeModelContent( event => {
      const value = this.editor.getValue ();
      this.setState({ content: value });
    })
  };

  render() {
    return (
      <div className="layout-content editor">
        <div className="editor-content"  ref={e => this.content = e} >
          <div
            ref={e => this.ref = e}
            className={"high-content"}
            id="high-content"
            tabIndex={0}
            contentEditable={true}
          />
        </div>
      </div>
    );
  }
}

export default Editor;
