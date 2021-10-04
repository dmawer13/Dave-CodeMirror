/*
import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"

const loadEditor = function(el) {
    let state = EditorState.create({
        extensions: [basicSetup, javascript()]
    }),
    let editor = new EditorView({
        state: 
        parent: el
    })
}
*/

const testFunction = function() {
  console.log("OK");
}

//export { testFunction }
export default testFunction
