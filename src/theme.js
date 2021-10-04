import {EditorView} from "@codemirror/basic-setup"

const commenterTheme = EditorView.theme({
  ".cm-gutters": {
    backgroundColor: "blue",
    color: "#ddd",
    border: "none"
  }
})

export default commenterTheme
