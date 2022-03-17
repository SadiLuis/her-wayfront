import React , { useState }  from 'react';
import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import './App.css';
import Home from './Screens/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';


function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div className='app' >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home usuario={usuario} />} />
          <Route path="/login" element={<Login setUsuario={setUsuario} />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
