import React, { useRef, useState } from "react";
// import styles from "./input.module.scss";

export default function Input({ addText }) {
  const [text, setText] = useState("");
  const textTypes = useRef();

  function handletoDoAdded() {
    addText(text);
    textTypes.current.value = "";
    setText("");
  }

  return (
    <div className="header">
      <h1>My To Do List</h1>
      <input
        type="text"
        placeholder="Title..."
        ref={textTypes}
        onChange={() => setText(textTypes.current.value)}
      ></input>
      <button onClick={handletoDoAdded} className="addBtn">
        Add
      </button>
    </div>
  );
}
