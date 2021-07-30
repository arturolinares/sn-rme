## Rich Markdown Editor for Standard Notes

[Outline](https://getoutline.com) created an awesome and [open source editor](https://github.com/outline/rich-markdown-editor) that fits great with Standard Notes. It makes very easy to write documents with common formatting features, and everything is persisted as Markdown.

### Features

* Editor shortcuts
* Lists
* Check lists
* List item sorting with `alt+up` and `alt+down`
* Tables with multiline table cells
* Code sections with syntax highlighting
* Text highlights

Other features implemented for the Standard Notes editor:

* Youtube embeds: Paste a youtube URL to show a preview in the document.
* Twitter embeds: Paste a twitt url to show a preview.
* Same-document links: It is possible to create links to headers in the same document with an autocomplete menu that shows up when creating a link.

**Note:** This editor does not work with FileSafe yet.

**Installation**

Copy the URL below and paste it in the *Import Extension* text field:

```
https://listed.to/p/K6AXOLFLF6
```

### Development

1. Install the dependencies with `npm install`.
2. Use `npm run start` to start the development editor.
3. In Standard Notes, install the extension at `http://localhost:3000/ext.json`. The name of this extension will be *Rich Markdown Editor (DEV)*.
4. To use it on a note, activate it normally using the *Editor* menu.
5. To build a new version, run `npm run build`.
