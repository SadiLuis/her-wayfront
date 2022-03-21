import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import './App.css';

import Landing from './Components/Landing/Landing'
import Home from './Screens/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';
import PerfilConductora from './Components/Perfiles/PerfilConductora';
// import PerfilPasajera from './Components/Perfiles/PerfilPasajera';

function App() {
  // const [usuario, setUsuario] = useState(null);

  return (
    <div className="App">
      <div >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/" element={<Landing />} />
            <Route path="/perfilConductora" element={<PerfilConductora />} />
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
