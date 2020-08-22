import React from 'react';
import { debounce } from "lodash";
import RichMarkdownEditor, { theme } from "rich-markdown-editor";
import BridgeManager from "../BridgeManager";
import light from '../theme';


class YoutubeEmbed extends React.Component {
  render() {
    const { attrs } = this.props;
    const videoId = attrs.matches[1];

    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
      />
    );
  }
}

export default class LocalEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    BridgeManager.get().addUpdateObserver(() => {
      const note = BridgeManager.get().getNote();
      const refresh = !this.state.note
        || (this.state.note && this.state.note.uuid != note.uuid);
      this.setState({
        note: BridgeManager.get().getNote(),
      });
      if (refresh) {
        this.updateMarkdown();
      }
    });
  }

  updateMarkdown() {
    let markdown = this.state.note.content.text
      .replace(/(\n{2})(\n+)/g, (m, p, q) => p + q.replace(/(\n)/g, '\\$1'));
    if (markdown == "") {
      markdown = "\n";
    }
    this.setState({ markdown });
  }

  onChange = debounce((value) => {
    const text = value();
    let note = this.state.note;
    note.content.text = text;
    this.setState({ note: note });
    BridgeManager.get().save();
  })

  getNoteContents() {
    if (this.state.note) {
      return this.state.note.content.text;
    }
    return '';
  }

  render() {
    return (
      <div>
        <RichMarkdownEditor
          value={ this.state.markdown }
          placeholder=""
          autoFocus
          onChange={ this.onChange.bind(this) }
          theme={light}
          embeds={[
            {
              title: "YouTube",
              keywords: "youtube video tube google",
              icon: () => (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
                  width={24}
                  height={24}
                />
              ),
              matcher: url => {
                return url.match(
                  /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i
                );
              },
              component: YoutubeEmbed,
            },
          ]}
        />
      </div>
    );
  }
}