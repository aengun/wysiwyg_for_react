import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import TuiEditor from "./TuiEditor/TuiEditor";
import DraftEditor from "./DraftEditor/DraftEditor";
import QuillEditor from "./QuillEditor/QuillEditor";
import NewEditor from "./NewEditor/NewEditor";
import PostNo from "./postNo/PostNo";

function App() {
  return (
    <Routes>
      <Route path="/tui" element={<TuiEditor />} />
      <Route path="/draft" element={<DraftEditor />} />
      <Route path="/quill" element={<QuillEditor />} />
      <Route path="/new" element={<NewEditor />} />
      <Route path="/post" element={<PostNo />} />
    </Routes>
  );
}

export default App;
