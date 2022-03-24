import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import Landing from './Components/Landing/Landing'
import Home from './Screens/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';
import PerfilConductora from './Components/Perfiles/PerfilConductora';
import PerfilPasajera from './Components/Perfiles/PerfilPasajera';

import RegConductora from './Components/RegConductora/RegConductora'
import LoginConductora from './Components/LoginConductora'

import FiltrosConductoras from './Components/Pedidos/FiltrosConductoras';


import ResetPassword from './Components/ResetPassword';
import PedirConductora from './Components/PedirConductora';
import TarjetaConductora from './Screens/TarjetaConductora';

import LoginAdmin from './Components/Admin/LoginAdmin/LoginAdmin';
import UsuariosAdmin from './Components/Admin/UsuariosAdmin/UsuariosAdmin'
import DetalleConductora from './Components/Admin/DetalleConductora/DetalleConductora';
import VerPasajerasAdmin from './Components/Admin/VerPasajerasAdmin/VerPasajerasAdmin';
import VerificarConductora from './Components/Admin/VerificarUsuario/VerificarUsuario';
import DarBajaConductora from './Components/Admin/DarBajaConductora/DarBajaConductora';
import AltaAdmins from './Components/Admin/AltaAdmins/AltaAdmins';

function App() {



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
            <Route path="/perfilPasajera" element={<PerfilPasajera />} />
            <Route path="/conductoras" element={<FiltrosConductoras />} />
            <Route path='/resetPassword' element={<ResetPassword />} />

            <Route path="/loginConductora" element={<LoginConductora />} />
            <Route path='/conductora/register' element={<RegConductora />}/>
          <Route path="/pedirconductora" element={<PedirConductora/>} />
          <Route path="/tarjetaconductora" element={<TarjetaConductora/>} />

          <Route path="/admin" element={<LoginAdmin/>}/>
          <Route path="/admin/usuarios" element={<UsuariosAdmin/>}/>
          <Route path="/admin/pasajeras" element={<VerPasajerasAdmin/>}/>
          <Route path='/admin/:id' element={<DetalleConductora/>}/>
          <Route path='/admin/verificar/:id' element={<VerificarConductora/>}/>
          <Route path='/admin/darBajaConductora/:id' element={<DarBajaConductora/>}/>
          <Route path='/admin/altaAdmins' element={<AltaAdmins/>}/>

          </Routes>


        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
