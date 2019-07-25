import * as React from 'react';
import Markdown from '../../../util/markdown';

type propTypes = {
  height: number;
};
class Content extends React.Component<propTypes> {

  render() {
    const { height } = this.props;
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
    const html = Markdown.render ( content );
    return (
      <div className="content preview" dangerouslySetInnerHTML={{ __html: html }} style={{ height: height - 38 }}/>
    );
  }
}

export default Content;
