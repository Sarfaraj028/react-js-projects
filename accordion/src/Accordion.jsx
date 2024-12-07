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

    
  return (
    <div className="container">
      {data.map((item, index) => (
        <div className="content" key={index}>
          <h1>{item.question} <span  onClick={() => handleToggle(index)}>+</span> </h1>
          {activeIndex === index && <p>{item.answer}</p> } {/* 0 and null both falsy value */}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
