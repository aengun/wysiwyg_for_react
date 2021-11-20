import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const ComEditor = () => {
  const editorRef: any = useRef(null);
  const current: any = editorRef.current.getInstance();
  const markdown = current.getMarkdown();
  const HTML = current.getHTML();

  const onClickButton = () => {
    // const current: any = editorRef.current.getInstance();
    // const markdown = current.getMarkdown();
    console.log(markdown);
    // const HTML = current.getHTML();
    console.log(HTML);
  };

  return (
    <>
      <Editor
        placeholder=""
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        usageStatistics={false}
        ref={editorRef}
      />
      <button onClick={onClickButton}>CLICK!!</button>
    </>
  );
};

export default ComEditor;
