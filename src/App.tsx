import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Editor } from "@toast-ui/react-editor";
import ComEditor from "./editor/ComEditor";

function App() {
  return (
    <div>
      <ComEditor />
    </div>
  );
}

export default App;
