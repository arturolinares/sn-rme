import React from 'react';
import { debounce } from "lodash";
import RichMarkdownEditor from "rich-markdown-editor";
import BridgeManager from "../BridgeManager";

export default class LocalEditor extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
    BridgeManager.get().addUpdateObserver(() => {
      let note = BridgeManager.get().getNote();
      this.setState({
        note: BridgeManager.get().getNote(),
      });
      this.updateMarkdown();
    });
  }

  updateMarkdown() {
    if (!this.state.markdown) {
      let markdown = this.state.note.content.text;
      this.setState({ markdown });
    }
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
        />
      </div>
    );
  }
}