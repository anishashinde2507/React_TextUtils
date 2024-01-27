import React, {useState} from 'react'

export default function About() {

 const [myStyle,setMyStyle] = useState( {
  color:'white',
  backgroundColor :'black',
   
})

const[btntext, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle =()=>{
    if(myStyle.color==='white'){
      setMyStyle({
        
        color:'black',
        backgroundColor : 'white',
        border: '1px solid white'
      })
      setBtnText("Enable Dark Mode")
    }
    else{
      setMyStyle(
        {
          color:'white',
          backgroundColor : 'black' 
        }
    
        )
        setBtnText("Enable White Mode");

      }

  }
  return (
    
    <div className='container rounded' style ={myStyle} >
        <h1 className='my-2'>About TextUtils</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style ={myStyle} >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"  style ={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Key Features
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={myStyle}>
     <strong>1. Text Manipulation</strong> 
Text Util offers a wide range of text manipulation features, including:
Search and Replace: Easily find and replace specific words or phrases in your text.
Substring Extraction: Extract specific substrings based on patterns or positions within the text.
Case Conversion: Convert text to uppercase, lowercase, or capitalize specific words.<br/>
<strong>2. Formatting Options</strong>
Make your text visually appealing and well-organized with TextUtil's formatting options:
 Line Wrapping: Wrap long lines to improve readability. Indentation Control: Adjust the indentation of your text for better structure.<br/>
<strong>3. Sorting and Filtering Effortlessly organize your text data with sorting and filtering capabilities:</strong> Sort Lines: Arrange lines alphabetically or numerically .Filter Lines: Include or exclude lines based on specified criteria.<br/>
<strong>4. Text Statistics Gain insights into your text with TextUtil's statistical features: Word Count:</strong> Count the number of words, characters, and lines in your text.
Frequency Analysis: Analyze the frequency of words or characters.
      </div>
    </div>
  </div>
  <div className="accordion-item"  style ={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style ={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        New Features
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={myStyle}> <strong>Uppercase:</strong> Convert the entire text to uppercase with a single click.<br/>
 <strong> Lowercase:</strong>  Transform the entire text to lowercase effortlessly.<br/>
 <strong>Clear:</strong> Clear the current text, providing a clean slate for your next task.<br/>
 <strong>Copy:</strong> Copy the current text to the clipboard, making it easy to paste into other applications.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style ={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Who Should Use TextUtil?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={myStyle}>
  <strong> Writers and Editors:</strong>    Streamline your editing process and ensure consistent formatting.<br/>

 <strong>Programmers:</strong> Quickly manipulate and format text strings in your code.<br/>

 <strong>Students and Researchers:</strong> Analyze and process text data for research projects and academic work.<br/>

 <strong>Data Analysts:</strong> Extract valuable information from large text datasets.
      </div>
    </div>
  </div>
  </div>
  <div className='container my-3 p-2'>
  <button onClick={toggleStyle} type=" button" class="btn btn-primary">{btntext}</button>
</div>
        
    </div>
  )
}
