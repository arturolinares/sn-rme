import React, { useState } from 'react';
import { debounce } from "lodash";
import RichMarkdownEditor from "rich-markdown-editor";
import BridgeManager from "../BridgeManager";
import light from '../theme';

const YoutubeEmbed = function ({ attrs = {} }) {
  const videoId = attrs.matches[1];
  return <iframe
    src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
  />;
}

export default function LocalEditor() {
  const [note, setNote] = useState({});
  const [markdown, setMarkdown] = useState("");

  const  onChange = debounce((value) => {
    const text = value();
    const newNote = JSON.parse(JSON.stringify(note));
    newNote.content = text;
    setNote(newNote);
    BridgeManager.get().save();
  }, 666);

  const updateMarkdown = (newNote) => {
    let newMarkdown = newNote.content.text
      .replace(/(\n{2})(\n+)/g, (m, p, q) => p + q.replace(/(\n)/g, '\\$1'));

    if (newMarkdown == "") {
      newMarkdown = "\n";
    }

    setMarkdown(newMarkdown);
  };

  BridgeManager.get().addUpdateObserver(() => {
    const newNote = BridgeManager.get().getNote();
    const refresh = !note
      || (note && note.uuid != newNote.uuid);
    setNote(newNote);

    if (refresh) {
      updateMarkdown(newNote);
    }
  });

  return (
    <>
      <RichMarkdownEditor
        value={ markdown }
        placeholder=""
        autoFocus
        onChange={ onChange }
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
    </>
  );
}
