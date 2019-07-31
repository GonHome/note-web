import * as React from 'react';
import Markdown from '../../../util/markdown';

type propTypes = {
  height: number;
  content: string;
};
class Content extends React.Component<propTypes> {

  render() {
    const { height, content } = this.props;
    const html = Markdown.render ( content );
    return (
      <div className="content preview" dangerouslySetInnerHTML={{ __html: html }} style={{ height: height - 38 }}/>
    );
  }
}

export default Content;
