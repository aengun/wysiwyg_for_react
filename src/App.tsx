import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import TuiEditor from "./TuiEditor/TuiEditor";
import DraftEditor from "./DraftEditor/DraftEditor";
import QuillEditor from "./QuillEditor/QuillEditor";

function App() {
  return (
    <Routes>
      <Route path="/tui" element={<TuiEditor />} />
      <Route path="/draft" element={<DraftEditor />} />
      <Route path="/quill" element={<QuillEditor />} />
    </Routes>
  );
}

export default App;
