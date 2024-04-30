// import logo from './logo.svg';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const [btntext, setbtntext] = useState("Enable Dark mode")

  const toggleonClick =()=>{
    if (mode ==="light")
    {
      setMode("dark");
      setbtntext("Enable Light mode");
      document.body.style.backgroundColor="#042743"
    }

    else{
      setMode("light");
      setbtntext("Enable Dark mode");
      document.body.style.backgroundColor="white"

    }
  }

  return (   
   <>
   <Navbar title="MediSathi" new="Extra"  mode={mode} toggleonClick = {toggleonClick} btntext={btntext}/>
   <TextForm heading="Enter your text hereeeee" mode={mode}/>
   <About/>
   </>
  );
}

export default App;
