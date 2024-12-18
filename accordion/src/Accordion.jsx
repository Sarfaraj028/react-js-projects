import React, { useRef, useState } from "react";
import data from "./accordionData.jsx";
import "./accordion.css";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);


  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // hide all 
    } else {
      setActiveIndex(index); // display one 
    }

  };

  // const handleToggle = () =>{

  // }
    
  return (
    <div className="container">
      {data.map((item, index) => (
        <div className={activeIndex === index ? 'content show' : 'content'} key={index}>
          <h1 onClick={() => handleToggle(index)}>{item.question} <span>{activeIndex === index ? '-' : '+'}</span> </h1>
          <p>{item.answer}</p>  {/* 0 and null both falsy value */}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
