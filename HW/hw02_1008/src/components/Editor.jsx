import { useState } from "react";
import "../css/Editor.css";

function Editor({ onCreate }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedContent = content.trim();
    if (trimmedContent === "") return;

    onCreate(trimmedContent);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Editor">
        <input
          type="text"
          placeholder="새로운 todo"
          aria-label="새 할 일"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">추가</button>
      </div>
    </form>
  );
}

export default Editor;
