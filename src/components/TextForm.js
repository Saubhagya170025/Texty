import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleupclick = ()=>{ 
    // console.log('Uppercase was clicked');
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted into upper case","success");
    
  }

  const handledownclick = ()=>{ 
    // console.log('Uppercase was clicked');
    let newtext = text.toLowerCase()  ;
    setText(newtext);
    props.showAlert("Converted into Lower case","success");
  }
  
  const handleonchange = (event)=>{
    // console.log('On change');
    setText(event.target.value);
  }

  const handleclearnclick =()=> {
    let newtext =""
    setText(newtext);
    props.showAlert("Text Cleared","success");
  }

  const handletitleclick = () => {
    let newText = text.toLowerCase().replace(/(?:^|\s|-|\/)\w/g, function(match) {
      return match.toUpperCase();
    });
    setText(newText);
    props.showAlert("Converted into Title case","success");
  }
  
  
  const [text,setText] = useState('Enter Something...');

  return (
    <>
      <div className='container my-3' style={{color: props.mode === "light"?"black":"white"}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange} style ={{color: props.mode === "light"?"black":"white", backgroundColor: props.mode === "dark"?'black':'white'}}></textarea>
          <button className='btn btn-primary my-3' onClick={handleupclick }>Convert to Uppercase </button>
          <button className='btn btn-primary my-3 mx-2' onClick={handledownclick }>Convert to lowercase </button>
          <button className='btn btn-primary my-3' onClick={handleclearnclick }>Clear Text </button>
          <button className='btn btn-primary my-3 mx-2' onClick={handletitleclick }>Convert to Titlecase </button>
        </div>
      </div>

    <div className="container" style={{color: props.mode === "light"?"black":"white"}}>
      <h3>Text Summary</h3>
      <p >Your text has  {text.length} charecters and {text.split(" ").length} words.</p>
      <p>Aapko isko padhne me {0.008*text.split(" ").length} minutes ka time lagega</p>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
  )
}
// ------------------------------------------------------------

// Hooks are used to use the features of class  without actually making the class 