// import logo from './logo.svg';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// -------------------------------------------------------------------------------------------

function App() {
  const [mode, setMode] = useState('light');
  const [btntext, setbtntext] = useState("Enable Dark mode")
  const [alert, setAlert] = useState(null);

  // ---------------------------------------------------------------------------------

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  //Here the above settimeout is written to dismiss the alert message after 1 sec


  const toggleonClick = () => {
    if (mode === "light") {
      setMode("dark");
      setbtntext("Enable Light mode");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text_Utils Dark Mode";
    }

    else {

      setMode("light");
      setbtntext("Enable Dark mode");
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled", "success");
      document.title = "Text_Utils Light Mode";


    }
  }
  // ------------------------------------------------------------------------------------------

  return (
    <>
      {/*<Router>*/}
        <Navbar title="Texty" new="Extra" mode={mode} toggleonClick={toggleonClick} btntext={btntext} />
        <Alert alert={alert} />
  
        {/* <Routes> */}
          {/* About Route */}
        {/*  <Route exact path="/About" element={<About />} />
  
        {/* TextForm Route (assuming you want it at the root path) */}
         {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text hereeeee" mode={mode} />} /> */}
         <TextForm showAlert={showAlert} heading="Enter your text here..." mode={mode} />
        {/* </Routes> */}
      {/* </Router>     */}
    </>
  );
  
}

export default App;
