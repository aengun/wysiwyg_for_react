import {
  ContentState,
  convertFromHTML,
  EditorState,
  RawDraftContentState,
} from "draft-js";
import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// 참고
// https://codesandbox.io/s/vbv5y
// https://m.blog.naver.com/futureds/221798770865
// https://medium.com/bgpworks/draft-js-%EC%82%AC%EC%9A%A9%EA%B8%B0-%EC%97%90%EB%94%94%ED%84%B0-%EB%A7%8C%EB%93%A4%EA%B8%B0-afad9b308a40
// https://github.com/sumn2u/react-wysiwyg-typescript/blob/master/index.tsx
// https://so99ynoodles.com/ko/blog/make-wysiwyg-editor-with-draft-js
// https://blog.naver.com/PostView.naver?blogId=rlawjdgus051&logNo=222521767894    >>>>
// https://haranglog.tistory.com/12

const DraftEditor = () => {
  const wrapperStyle = {
    border: "1px solid #969696",
  };
  const editorStyle = {
    height: "500px",
  };

  const testValue = `<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a <strong>type specimen book</strong>. It has <del>survived</del> not only five <em>centuries</em>, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><ul><li><p>number 1</p></li><li><p>number 2</p></li></ul><p><br class="ProseMirror-trailingBreak"></p><ol><li><p>number1</p></li><li><p>number2</p></li></ol><p><br class="ProseMirror-trailingBreak"></p>`;

  // const [editorState, setEditorState] = useState(() =>
  //   // EditorState.createEmpty()
  //   EditorState.createWithContent(
  //     ContentState.createFromBlockArray(
  //       convertFromHTML("<p>My initial content.</p>")
  //     )
  //   )
  // );

  // const onEditorStateChange = (editorState: any) => {
  //   // editorState에 값 설정
  //   setEditorState(editorState);
  // };

  //======================================================================================

  // const defaultValue: any = "<u>this is my text</u>";

  // const contentDataState = ContentState.createFromBlockArray(
  //   convertFromHTML(overview)
  // );
  // const editorDataState = EditorState.createWithContent(contentDataState);

  // const [editorState, setEditorState] = useState(editorDataState);

  //======================================================================================

  // const textToConvert = "<p>A paragraph</p>";
  const blocksFromHTML = convertFromHTML(testValue);

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromBlockArray(blocksFromHTML.contentBlocks)
    )
  );

  //======================================================================================

  const onEditorStateChange = (editorStateData: any) => {
    setEditorState(editorStateData);
  };

  return (
    <div style={{ margin: 50 }}>
      <div style={{ width: "100%", border: "solid 1px black" }}>
        <Editor
          wrapperClassName="wrapper-class"
          wrapperStyle={wrapperStyle}
          // editorClassName="editor-class"
          editorStyle={editorStyle}
          toolbarClassName="toolbar-class"
          toolbar={{
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          placeholder="내용을 작성해주세요."
          // 한국어 설정
          localization={{
            locale: "ko",
          }}
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};

export default DraftEditor;
