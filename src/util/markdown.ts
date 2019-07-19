import * as showdown from 'showdown';
const Markdown = {
  converter: new showdown.Converter(),
  re: /_.*?_|\*.*?\*|~.*?~|`.*?`|<.*?>|:\w+?:|^\s*>|^\s*#|\[.*?\]|--|==|```|~~~|^\s*\d+\.|^\s*[*+-]\s|\n\s*\n/m,

  is: ( str: string ): boolean => { // Checks if `str` _could_ be using some Markdown features, it doesn't tell reliably when it actually is, only when it isn't. Useful for skipping unnecessary renderings

    return Markdown.re.test ( str );

  },

  render: ( str: string, limit?: number ): string => {

    if ( !str || !Markdown.is ( str ) ) return `<p>${str}</p>`;

    return Markdown.converter.makeHtml(str);

  },
};

export default Markdown;

