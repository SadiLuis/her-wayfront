import React, { useEffect, useState } from 'react';
import { getPerfilConductora } from '../../actions/conductora';
import {getViajeRequerido} from "../../actions/viajes"
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';
import Swal from "sweetalert2";
import CardConductora from './CardConductora/CardConductora';

function PantallaViajePasajera() {

    //Harcode, esto hay que reemplazarlo por el id de la conductora logueada cuando funcion login
    let idConductora = "OOSg1YJ93xwIXqmviPg5" //el id de su doc de la coleccion conductorar en firebase
    let idPasajera = "y3Aq5F0FRDh6zJboLi3d"
    const dispatch = useDispatch()

    let conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    let viajeRequerido = useSelector((state) => state.viajesReducer.viajeRequeridoConductora)

    useEffect(() => {
        dispatch(getPerfilConductora(idConductora))
    }, [])

    

    
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getViajeRequerido(idConductora));
        }, 6000);
        return () => clearInterval(interval);
      }, []);

  
  
  return (
      <div>
            <div>Pantalla Viaje Pasajera</div>
            <div>Pasajera {viajeRequerido[0]?.nombrePasajera}</div>
            {typeof(viajeRequerido) === 'object' ? 
            <CardConductora
                nombre={conductora?.nombre }
                fotoPerfil={conductora?.fotoPerfil}
                precio={viajeRequerido[0]?.precio}
                automovil={conductora?.automovil}
                patente={conductora?.patente}
                origen={viajeRequerido[0]?.direcOrigen }
                destino={viajeRequerido[0]?.direcDestino }
                idViaje={viajeRequerido[1]?.idViaje}


            />
            : (<div>
                <h1>Esperando la respuesta de la conductora...</h1>
                <Loader />
                </div>) }
    </div>
  )
}  


export default PantallaViajePasajera