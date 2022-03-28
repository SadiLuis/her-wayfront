import React, { useEffect, useState } from 'react';
import { getPerfilConductora } from '../../actions/conductora';
import {getViajeRequerido} from "../../actions/viajes"
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';
import Swal from "sweetalert2";
import CardPasajera from './CardPasajera/CardPasajera';

function ViajeConductora() {

    //Harcode, esto hay que reemplazarlo por el id de la conductora logueada cuando funcion login
    let idConductora = "OOSg1YJ93xwIXqmviPg5" //el id de su doc de la coleccion conductorar en firebase
    const dispatch = useDispatch()

    let conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    let viajeRequerido = useSelector((state) => state.viajesReducer.viajeRequeridoConductora)
    console.log(viajeRequerido)

    useEffect(() => {
        dispatch(getPerfilConductora(idConductora))
    }, [])

    // useEffect(() => {
    //     dispatch(getViajeRequerido(idConductora))
    // }, [])

    
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getViajeRequerido(idConductora));
        }, 6000);
        return () => clearInterval(interval);
      }, []);

  
  
  return (
      <div>
            <div>ViajeConductora</div>
            <div>Viajes de {conductora.nombre}</div>
            {typeof(viajeRequerido) === 'object' ? 
            <CardPasajera 
                nombrePasajera={viajeRequerido[0]?.nombrePasajera || "conectando..." }
                precio={viajeRequerido[0]?.precio || "conectando..."}
                distancia={viajeRequerido[0]?.distanciaMetros || "conectando..."}
                origen={viajeRequerido[0]?.direcOrigen || "conectando..."}
                destino={viajeRequerido[0]?.direcDestino || "conectando..."}
                idViaje={viajeRequerido[1]?.idViaje || "conectando..."}

            />
            : (<div>
                <h1>Buscando un viaje para vos...</h1>
                <Loader />
                </div>) }
    </div>
  )
}  


export default ViajeConductora