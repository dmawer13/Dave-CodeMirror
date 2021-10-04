import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"
import doc from "./doc.js"
import commenterTheme from "./theme.js"
import "./style/main.css"

let state = EditorState.create({
  doc: doc, 
  extensions: [
    basicSetup, 
    javascript()
  ]
})

const loadEditor = function(el) {
  let view = new EditorView({
    state: state,
    parent: el,
    extensions: [
      commenterTheme
    ]
  })
}

export default loadEditor
