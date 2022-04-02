import React, {useEffect, useState} from 'react'
import { Loader } from '../Loader/Loader';
import NavbarConductora from '../NavbarConductora/NavbarConductora'
import checkViajeAceptado from '../../image/checkViajeAceptado.png'
import checkPuntoDePartida from '../../image/checkPuntoDePartida.png'
import checkViajeFinalizado from '../../image/checkViajeFinalizado.png'
import Swal from "sweetalert2"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cambiaEstadoViaje, getViaje } from '../../actions/viajes';
import { useParams } from 'react-router';
import BotonPago from '../BotonPago/BotonPago';







function EstadoViajePasajera() {
  
    const { idViaje } = useParams()
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const viaje = useSelector((state) => state.viajesReducer.viajePorId)

    //  useEffect(() => {
    //      console.log("se dispara useEffect getViaje")
    //     dispatch(getViaje(idViaje))
    //  }, [idViaje, dispatch])

     useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getViaje(idViaje));
        }, 3000);
        return () => clearInterval(interval);
      }, []);

  function handleClick(e){
    e.preventDefault()
    let payload = {
      id: idViaje,
      decision: e.target.name
    }
    console.log("payload", payload)
    if(e.target.name === "verDatosConductora") {
      
      Swal.fire({
        title:"Proximamente aquí te mostraremos un pop-up con los datos de tu conductora",
        icon: 'success',
      })
      
    }if (e.taget.name === "rechazar") {
      dispatch(cambiaEstadoViaje(payload))
      Swal.fire({
        title:"Has cancelado el viaje",
        icon: 'success',
      })
      navigate("/viajeconductora")
    }
    // }if (e.target.name === "finalizado"){
    //     console.log("entre a finalizado")
    //      dispatch(cambiaEstadoViaje(payload))
    //     Swal.fire({
    //     title:"El viaje ha finalizado. Ya podes ver el importe acreditado en tu cuenta",
    //     icon: 'success',
    //   })
    //   navigate("/viajeconductora")
    // }
  }

  
  console.log("viaje", viaje)      
  if(viaje.estadoViaje) {
    return (
        <div>
        <NavbarConductora />
        <br />
        <br />
        <br />
        {viaje.estadoViaje === "aceptado" ?   (
            <div>
            <img width={300} height={450} src={checkViajeAceptado} alt="check viaje aceptado"  />
            <br />
            <br />
            <h2>Tu conductora aceptó el viaje. Pronto te avisará cuando llegue al punto de encuentro</h2>
            <button className="btn btn-primary" type="button" name = "verDatosConductora" onClick={(e)=> handleClick(e)}>Ver Datos Conductora</button>
            
            </div>
        ) 
        : viaje.estadoViaje === "enPuntoPartida" ? 
        <div>
        <img width={300} height={450} src={checkPuntoDePartida} alt="check punto de partida"  />
        <br />
        <br />
            <h2>Tu conductora ya está esperando en el punto de partida</h2>
            <button className="btn btn-primary" type="button" name = "verDatosConductora" onClick={(e)=> handleClick(e)}>Ver Datos Conductora</button>
            
        </div>
        : viaje.estadoViaje === "finalizado" ?
        <div>
        <img width={300} height={450} src={checkViajeFinalizado} alt="check viaje finalizado"  />
        <br />
        <br />
            <h2>Tu Conductora nos informó que el viaje terminó con éxito, ahora solo resta abonar el viaje</h2>
            <button className="btn btn-primary" type="button" name = "verDatosConductora" onClick={(e)=> handleClick(e)}>Ver Datos Conductora</button>
            
            < BotonPago 
              precio={viaje.precio}
            />            
        </div>   
         : <div>
              <h1>Esperando la respuesta de su conductora</h1>
              <Loader />
            </div>
        }
        
    </div>

    )
  }else {
      return (
          <div>
            <h1>Esperando la respuesta de su conductora</h1>
          <Loader />
          </div>
      )
  }

  
}

export default EstadoViajePasajera