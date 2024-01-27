import React, { useState } from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // whether the dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(25, 0, 66)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
    

<BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<TextForm mode={mode} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    </>


  );
}

export default App;
