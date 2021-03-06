import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Landing from './Components/Landing/Landing'
import Home from './Screens/Home';
import Login from './Components/Login';
import Registro from './Components/Registro';
import ResetPassword from './Components/ResetPassword';
import PerfilPasajera from './Components/Perfiles/PerfilPasajera';
import HomeConductora from './Screens/HomeConductora';
import RegConductora from './Components/RegConductora/RegConductora'
import LoginConductora from './Components/LoginConductora'
import PerfilConductora from './Components/Perfiles/PerfilConductora';
import TarjetaConductora from './Screens/TarjetaConductora';
import FiltrosConductoras from './Components/Pedidos/FiltrosConductoras'
import PedirConductora from './Components/PedirConductora';
import VistaMap from './Screens/VistaMap.jsx'
//import Reviews from './Components/Reviews/ReviewsConductora';
import BotonPago from './Components/BotonPago/BotonPago';

import ContactForm from './Components/ContactForm/ContactForm'

import UsuariosAdmin from './Components/Admin/UsuariosAdmin/UsuariosAdmin';
import LoginAdmin from './Components/Admin/LoginAdmin/LoginAdmin';
import VerPasajerasAdmin from './Components/Admin/VerPasajerasAdmin/VerPasajerasAdmin';
import DetalleConductora from './Components/Admin/DetalleConductora/DetalleConductora';
import VerificarConductora from './Components/Admin/VerificarUsuario/VerificarUsuario';
import DarBajaConductora from './Components/Admin/DarBajaConductora/DarBajaConductora';
import AltaAdmins from './Components/Admin/AltaAdmins/AltaAdmins';
import OrigenDestino from './Components/OrigenDestino/OrigenDestino';

import ViajeConductora from './Components/viajes/ViajeConductora'
import LoginConGooglePasajera from './Components/LoginConGooglePasajera';
import CrearReview from './Components/Reviews/CrearReview';
import RecorridoPasajera from './Components/RecorridoPasajera/RecorridoPasajera';
import ViajePasajera from './Components/ViajePasajera/ViajePasajera.jsx'
import MisViajesPasajera from './Components/MisViajesPasajera/MisViajesPasajera';
import EstadoViajeConductora from './Components/viajes/EstadoViajeConductora';
import PantallaViajePasajera from './Components/viajes/PantallaViajePasajera'
import EstadoViajePasajera from './Components/viajes/EstadoViajePasajera';

import EditarPerfilPas from './Components/Perfiles/EditarPerfilPas'

import HistorialViajes from './Components/MisViajesPasajera/HistorialViajes';

import HistorialConductoraViajes from './Components/MisViajesPasajera/HistorialConductoraviajes';


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
            <Route path='/conductora/register' element={<RegConductora />} />
            <Route path="/pedirconductora" element={<PedirConductora />} />
            <Route path="/tarjetaconductora" element={<TarjetaConductora />} />
            <Route path="/mapa" element={<VistaMap />} />
            <Route path="/botonpago" element={<BotonPago />} />
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="/admin/usuarios" element={<UsuariosAdmin />} />
            <Route path="/admin/pasajeras" element={<VerPasajerasAdmin />} />
            <Route path='/admin/:id' element={<DetalleConductora />} />
            <Route path='/admin/verificar/:id' element={<VerificarConductora />} />
            <Route path='/admin/darBajaConductora/:id' element={<DarBajaConductora />} />
            <Route path='/admin/altaAdmins' element={<AltaAdmins />} />
            <Route path="/homeConductora" element={<HomeConductora />} />
            <Route path="/contacto" element={<ContactForm />} />
            <Route path="/aceptaviajeconductora/:id" element={<ViajeConductora />} />
            <Route path="/viajepasajera" element={<ViajePasajera />} />
            <Route path="/viajeAceptado" element={<RecorridoPasajera />} />
            <Route path="/loginPasajeraConGoogle" element={<LoginConGooglePasajera />} />
            <Route path="/viajeAceptado" element={<ViajePasajera/>} />
            <Route path="/reviews/:idViaje" element={<CrearReview />} />
            <Route path="/reviews" element={<CrearReview />} />
            <Route path="/misViajesPasajera" element={<MisViajesPasajera />} />
            <Route path="/viajeconductora/:idViaje" element={<EstadoViajeConductora />} />
            <Route path="/pantallaviajepasajera" element={<PantallaViajePasajera />} />
            <Route path="/checkpasajera/:idPasajera" element={<EstadoViajePasajera />} />
            <Route path="/editPasajera" element={<EditarPerfilPas />} />
            <Route path="/historialviajes/:id" element={<HistorialViajes />} />
            <Route path="/historialConductoraViajes/:id" element={<HistorialConductoraViajes />} />
          
            
 







          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
