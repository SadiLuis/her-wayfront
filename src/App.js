import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";


import './App.css';

import Landing from './Components/Landing/Landing'
import Home from './Screens/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';
import PerfilConductora from './Components/Perfiles/PerfilConductora';
// import PerfilPasajera from './Components/Perfiles/PerfilPasajera';

import Pedido from './Components/Pedidos/SeleccionMovil';
import FiltrosConductoras from './Components/Pedidos/FiltrosConductoras';

import ResetPassword from './Components/ResetPassword';

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
          <Route path="/pedidos" element={<Pedido />} />
          <Route path="/conductoras" element={<FiltrosConductoras />} />
          <Route path='/resetPassword' element={<ResetPassword />} />

        </Routes>


        </BrowserRouter>
      </div>
    </div>
    </div>
  );
}

export default App;
