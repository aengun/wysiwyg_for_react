import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
// import "@toast-ui/react-editor/dist/i18n/ko-kr.js";

// https://github.com/nhn/tui.file-uploader

const TuiEditor = () => {
  const editorRef: any = useRef(null);

  const testValue = `<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a <strong>type specimen book</strong>. It has <del>survived</del> not only five <em>centuries</em>, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><ul><li><p>number 1</p></li><li><p>number 2</p></li></ul><p><br class="ProseMirror-trailingBreak"></p><ol><li><p>number1</p></li><li><p>number2</p></li></ol><p><br class="ProseMirror-trailingBreak"></p>`;

  const onClickButton = () => {
    const current: any = editorRef.current?.getInstance();
    const markdown = current?.getMarkdown();
    const HTML = current?.getHTML();
    console.log(markdown);
    console.log(HTML);
  };

  const uploadImage = (blob: Blob) => {
    console.log(blob);

    return "a";
  };

  return (
    <>
      <Editor
        placeholder=""
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        usageStatistics={false}
        ref={editorRef}
        initialValue={testValue}
        language={"ko-Kr"}
        hooks={{
          addImageBlobHook: (blob, callback) => {
            const uploadedImageURL = uploadImage(blob);
            callback(uploadedImageURL, "alt text");
            return false;
          },
        }}
      />
      <button onClick={onClickButton}>CLICK!!</button>
    </>
  );
};

export default TuiEditor;
