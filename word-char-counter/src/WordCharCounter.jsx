import React, { useState } from 'react'
import './style.css';
function WordCharCounter() {
    const [text, setText] = useState("message");

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

  return (
    <div className='center'>
        <h2>Enter your text here........</h2>
        <textarea rows={10}  cols={70} value={text} onChange={handleChange}/>
        <p>
          {text.split(" ").filter(Boolean).length}  words  {text.length} characters 
          <span onClick={toUpper} >to UppeCase</span>
          <span onClick={handleClear} >Clear Text</span>
          
        </p>

        <h2>Preview: </h2>
        <p style={{fontSize: "15px"}}>{text}</p>
    </div>
  )
}

export default WordCharCounter