import React, { useRef } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css";

const NewEditor = () => {
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const onClickSave = () => {
    // console.log(editor);
    alert(editor.current?.getContents(false));
  };

  const editorOptions = {
    height: "300",
    buttonList: [
      ["undo", "redo"],
      [
        // ":p-More Paragraph-default.more_paragraph",
        "font",
        "fontSize",
        "formatBlock",
        "paragraphStyle",
        "blockquote",
      ],
      ["bold", "underline", "italic", "strike"],
      ["fontColor", "hiliteColor", "textStyle"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["align", "horizontalRule", "list", "lineHeight"],
      [
        "-right",
        "fullScreen",
        "showBlocks",
        "codeView",
        "preview",
        // "print",
        // "save",
        // "template",
      ],
      ["-right", "link"],
    ],
  };

  return (
    <div style={{ margin: 50, height: "500px", border: "solid black 1px" }}>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        lang="ko"
        setOptions={editorOptions}
      />
      <button onClick={onClickSave}>Save!!</button>
    </div>
  );
};

export default NewEditor;
