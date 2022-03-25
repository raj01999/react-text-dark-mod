import { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  function changeToUpper() {
    setText(text.toUpperCase());
    props.showAleart("UpperCase Convert Sucess", "success")
      setTimeout(()=>{
        props.setAleart(null)
      }, 1500)
  }

  let changeToLower = () => {
    setText(text.toLowerCase());
    props.showAleart("LowerCase Convert Sucess", "success")
      setTimeout(()=>{
        props.setAleart(null)
      }, 1500)
  };

  function changeTheText(event) {
    setText(event.target.value);
  }
  const clearText = ()=>{
    setText("")
    props.showAleart("Text has been clear", "success")
    setTimeout(()=>{
      props.setAleart(null)
    }, 1500)
  }
  
  return (
    <>
      <div className="container" style={props.myStyle}>
        <label htmlFor="exampleFormControlTextarea1">
          <h1>{props.hedding}</h1>
        </label>
        <div className="my-1">
          <textarea
            style={props.myStyle}
            className="form-control"
            onChange={changeTheText}
            id="exampleFormControlTextarea1"
            value={text}
            placeholder="Enter yout text here"
            rows="8"
          ></textarea>
        </div>
        <button className= "btn btn-primary" onClick={changeToUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-5" onClick={changeToLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-5" onClick={props.darkMoreFun}>
          {props.darkMode}
        </button>
      </div>
      <div className="container my-2" style={props.myStyle}>
        <h2>Your Text Summary</h2>
        <p>Total word: {text.split(" ").length} and total charecter: {text.length} and It will take average reading time is {text.split(" ").length * 0.01} minute as per 100 word per minute</p>
        <h2>Your Text: </h2>
        <p style={{wordBreak: "break-word"}}>{text.length? text : "Please give some text on textArea"}</p>
      </div>
    </>
  );
}