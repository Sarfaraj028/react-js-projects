import React, { useState } from 'react'
import './style.css';
function WordCharCounter() {
    const [text, setText] = useState("")

    const handleChange = (e) =>{
        setText(e.target.value)
    }
  return (
    <div>
        <h2>Enter your text here........</h2>
        <textarea rows={10} placeholder='type your message here....' cols={70} value={text} onChange={handleChange}/>
        <p>
          {text.split(" ").filter(Boolean).length}  words  {text.length} characters 
        </p>

        <h2>Preview: </h2>
        <p>{text}</p>
    </div>
  )
}

export default WordCharCounter