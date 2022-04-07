import React, { useEffect, useState } from 'react';
import { getPerfilConductora } from '../../actions/conductora';
import {getViajeRequerido} from "../../actions/viajes"
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';
import Swal from "sweetalert2";
import CardPasajera from './CardPasajera/CardPasajera';
import Navbar from '../Landing/Navbar';
import { useParams } from 'react-router-dom';

function ViajeConductora() {

    let idConductora = useParams()
    const dispatch = useDispatch()

    console.log("idConductora es", idConductora.id)
    let conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    let viajeRequerido = useSelector((state) => state.viajesReducer.viajeRequeridoConductora)
    

    useEffect(() => {
        dispatch(getPerfilConductora(idConductora.id))
        dispatch(getViajeRequerido(idConductora.id))
    }, [])

    
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getViajeRequerido(idConductora.id));
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    //   useEffect(() => {
    //     console.log("se dispara useEffect getViajeRequerido")
    //     dispatch(getViajeRequerido(idConductora));
        
    //   }, [viajeRequerido]);

  
  
  return (
      <div>
            <Navbar />
            <br />
            <br />
            <br />
            {typeof(viajeRequerido) === 'object' ?
            
            <div class='container d-flex align-items-center justify-content-center vh-100'>
                 <div class='row'> 
                        {/* Columna principal izquierda */}
                        <div class="col-12 col-xl-6 ">
                                    <CardPasajera 
                                        fotoPerfil={"https://www.preferente.com/wp-content/uploads/2019/10/jovenmalaga_opt.jpg"}
                                        nombrePasajera={viajeRequerido[0]?.nombrePasajera}
                                        precio={viajeRequerido[0]?.precio}
                                        distancia={viajeRequerido[0]?.distanciaMetros}
                                        origen={viajeRequerido[0]?.direcOrigen }
                                        destino={viajeRequerido[0]?.direcDestino }
                                        idViaje={viajeRequerido[1]?.idViaje }

                                    />
                        </div>    

                         {/* Columna principal derecha */}
                        <div class="col-12 col-xl-6 ">
                            <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                        </div>   

                 </div>

            </div>



            : (<div>
                <h1>Buscando un viaje para vos...</h1>
                <Loader />
                </div>) }
    </div>
  )
}  


export default ViajeConductora