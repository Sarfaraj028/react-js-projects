import React, { useRef, useState } from 'react'
import './style.css';
function WordCharCounter() {
    const [text, setText] = useState("message");
    const textAreaRef = useRef(null);

    const handleChange = (e) =>{
        setText(e.target.value)
    }

    // handle clear text
    const handleClear = () =>{
      setText("")
    }

    //  handle upperCase
    const toUpper = () =>{
      setText(text.toUpperCase())
    }

    // copy text 
    const handleCopy = () =>{
      // let text = document.querySelector("textarea");
      textAreaRef.current.select();
      navigator.clipboard.writeText(textAreaRef.current.value);
    }

  return (
    <div className='center'>
        <h2>Enter your text here........</h2>
        <textarea ref={textAreaRef} rows={10}  cols={70} value={text} onChange={handleChange}/>
        <p>
          {text.split(" ").filter(Boolean).length}  words  {text.length} characters 
          <span onClick={toUpper} >to UppeCase</span>
          <span onClick={handleClear} >Clear Text</span>
          <span onClick={handleCopy} >Copy Text</span>
          
        </p>

        <h2>Preview: </h2>
        <p style={{fontSize: "15px"}}>{text}</p>
    </div>
  )
}

export default WordCharCounter