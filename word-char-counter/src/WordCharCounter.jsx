import React, { useRef, useState } from "react";
import "./style.css";
function WordCharCounter() {
  const [text, setText] = useState("message");
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // handle clear text
  const handleClear = () => {
    setText("");
  };

  //  handle upperCase
  const toUpper = () => {
    setText(text.toUpperCase());
  };

  // copy text
  const handleCopy = () => {
    // let text = document.querySelector("textarea");
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
  };

  // Remove Extra space from the text
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <div className="container">
      <div className="center">
        <h2>Enter your text here........</h2>
        <textarea
          ref={textAreaRef}
          rows={10}
          cols={70}
          value={text}
          onChange={handleChange}
        />
        <div className="btns">
          <span onClick={toUpper}>to UppeCase</span>
          <span onClick={handleClear}>Clear Text</span>
          <span onClick={handleCopy}>Copy Text</span>
          <span onClick={handleExtraSpace}>Remove Extra Space</span>
        </div>
        <p>{text.split(" ").filter(Boolean).length} words {text.length}{" "}
        characters</p>

        <h2>Preview: </h2>
        <p style={{ fontSize: "15px" }}>{text}</p>
      </div>
    </div>
  );
}

export default WordCharCounter;
