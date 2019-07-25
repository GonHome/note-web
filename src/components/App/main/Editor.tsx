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
  language:string;
};
type stateTypes = {
  content: string;
  theme: string;
  language: string;
}
const content = "\n" +
  "# 02 - The Sidebar\n" +
  "\n" +
  "The sidebar is where all your notes are categorized.\n" +
  "\n" +
  "## Categories\n" +
  "\n" +
  "- **All Notes**: This section contains all notes.\n" +
  "- **Favorites**: This section contains all notes you've favorited.\n" +
  "- **Notebooks**: This section contains all notes tagged with the special `Notebooks/*` tag.\n" +
  "- **Tags**: This section contains all notes tagged with any tag except the special ones: `Notebooks/*` and `Templates/*`.\n" +
  "- **Templates**: This section contains all notes tagged with the special `Templates/*` tag. These notes won't be displayed in any other category.\n" +
  "- **Untagged**: This section contains all notes that have no tags.\n" +
  "- **Trash**: This section contains all notes that have been deleted. These notes won't be displayed in any other category.\n" +
  "\n" +
  "You can create sub-categories in the following sections: Notebooks, Tags and Templates by using nested tags.\n";
class Editor extends React.Component<propTypes, stateTypes> {
  private ref;
  private editor;
  constructor(props: propTypes) {
    super(props);
    this.state = {
      content: _.cloneDeep(content),
      theme: 'Light',
      language: 'markdown',
    }
  }

  componentDidMount(): void {
    this.initMonaco (this.props);
  }

  componentWillReceiveProps(nextProps: Readonly<propTypes>, nextContext: any): void {
    if (nextProps.theme !== this.state.theme || nextProps.language !== this.state.language ) {
      if (this.editor) {
        this.ref.removeChild(this.ref.firstChild);
        this.initMonaco(nextProps);
      }
      this.setState({ theme: nextProps.theme, language: nextProps.language });
    }
  }

  initMonaco = (props: propTypes) => {
    const { theme, language } = props;
    console.log(language);
    this.editor = monaco.editor.create ( this.ref,
      {
        lineNumbers: 'off',
        language: language,
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
        <div className="editor-content" >
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
