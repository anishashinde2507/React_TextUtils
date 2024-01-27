import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleloClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleclearClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText =  " ";
        setText(newText)
    }
    const handleCopy =()=>{
        // console.log("Uppercase was clicked" + text);
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace =()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
    }

    const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const[text, setText]=useState(' ');
    const textClass = props.mode === 'dark' ? 'text-light' : 'text-dark'
        return (
            <>
        <div className='container' >
            <h1 className= {textClass}>{props.heading} </h1>
            <div className="mb-3">
          
                <label htmlFor="myBox" className={`form-label ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} ><b>Enter the text to analyze below</b></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'light' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick} >Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick} >Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>


        </div>
        <div className='container' my-3>
            <h1 className= {textClass}>Your text Summary</h1>
            <p className= {textClass}>{text.split(" ").length} words and {text.length} characters</p>
            <p className= {textClass}>{0.008 * text.split(" ").length} Minutes read</p>
            <h2 className= {textClass}>Preview</h2>
            <p className= {textClass}>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
        </div>
        </>
    )
}
