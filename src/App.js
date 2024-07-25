import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled Dark Mode Successfully", 'success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode Successfully", 'success')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the  text to analyze" mode={mode} showAlert={showAlert} />
        {/* <Routes>
            <Route path='/' element={<TextForm heading="Enter the  text to analyze" mode={mode}
            showAlert={showAlert} />} />
            <Route path='/about' element={<About mode={mode} />} />
          </Routes> */}
      </div>
      {/* </Router > */}
    </>
  );
}