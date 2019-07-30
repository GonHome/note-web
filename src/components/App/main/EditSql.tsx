import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';
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
import 'monaco-editor/esm/vs/editor/contrib/suggest/suggestController.js';
import 'monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js';
import 'monaco-editor/esm/vs/editor/contrib/hover/hover.js';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
import { language as mysqlLanguage } from 'monaco-editor/esm/vs/basic-languages/mysql/mysql.js';
const { Parser } = require('node-sql-parser');
const parser = new Parser();

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
const content = "";
class EditSql extends React.Component<propTypes, stateTypes> {


  editorDidMount(editor, monaco) {
    const suggestion = [{
      label: '测试1',
      insertText: '测试1', // 不写的时候不展示。。
      detail: '提示的文字'
    },
      {
        label: '测试2',
        insertText: '测试22',
        detail: '提示的文字'
      },
      {
        label: '测试3',
        insertText: '测试3',
        detail: '提示的文字'
      }];
    monaco.languages.registerCompletionItemProvider('sql',
    { provideCompletionItems: function(model, position) {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column
      });
      const match1 = textUntilPosition.match(/(\S+)$/);
      if (!match1) return [];
      const match = match1[0].toUpperCase();
      var suggestions: any[] = [];
      mysqlLanguage.keywords.forEach(item => {
        if (item.indexOf(match) !== -1) {
          suggestions.push({
            label: item,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: item
          });
        }
      });
      mysqlLanguage.operators.forEach(item => {
        if (item.indexOf(match) !== -1) {
          suggestions.push({
            label: item,
            kind: monaco.languages.CompletionItemKind.Operator,
            insertText: item
          });
        }
      });
      mysqlLanguage.builtinFunctions.forEach(item => {
        if (item.indexOf(match) !== -1) {
          suggestions.push({
            label: item,
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: item
          });
        }
      });
      suggestion.forEach(item => {
        suggestions.push({
          label: item.label,
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: item.insertText,
        });
      });
      return {
        suggestions
      };
    },
    triggerCharacters: [':'],
    });
  }

  onChange(newValue: string) {
    try {
      const ast = parser.astify(newValue);
      console.log(ast);
    }catch (e) {
      console.error(e);
    }
  }


  render() {
    const { language, theme, height, width } = this.props;
    console.log(height, width);
    const options = {
      selectOnLineNumbers: true,
      lineHeight: 21,
      minimap: { enabled: false },
    };
    options['lineNumbers'] = 'off';
    options['wordWrap'] = 'on';
    return (
      <div className="layout-content editor">
        <div className="editor-content" >
          <MonacoEditor
            width={width}
            height={height - 38}
            language={language}
            theme={theme === 'Light' ? 'vs' : 'vs-dark'}
            value={content}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
            />
        </div>
      </div>
    );
  }
}

export default EditSql;
