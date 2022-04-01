import React, {useEffect, useState} from 'react'
import { Loader } from '../Loader/Loader';
import NavbarConductora from '../NavbarConductora/NavbarConductora'
import checkViajeAceptado from '../../image/checkViajeAceptado.png'
import checkPuntoDePartida from '../../image/checkPuntoDePartida.png'
import Swal from "sweetalert2"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cambiaEstadoViaje, getViaje } from '../../actions/viajes';
import { useParams } from 'react-router';







function EstadoViajeConductora() {
  
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
    if(e.target.name === "enPuntoPartida") {
      dispatch(cambiaEstadoViaje(payload))
      Swal.fire({
        title:"Avisaste que estas esperando en el punto de partida",
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

  
  function handleFinalizar (e) {
      e.preventDefault()
      let payload = {
        id: idViaje,
        decision: "finalizado"
      }
        dispatch(cambiaEstadoViaje(payload))
        
        Swal.fire({
        title:"El viaje ha finalizado. Ya podes ver el importe acreditado en tu cuenta",
        icon: 'success',
      })
      navigate("/viajeconductora")
    
      

  }

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
            <button className="btn btn-primary" type="button" name = "enPuntoPartida" onClick={(e)=> handleClick(e)}>Avisar que llegue!</button>
            <button className="btn btn-primary" type="button" name = "rechazar" onClick={(e)=> handleClick(e)}>Cancelar Viaje</button>
            </div>
        ) 
        : viaje.estadoViaje === "enPuntoPartida" ? 
        <div>
        <img width={300} height={450} src={checkPuntoDePartida} alt="check punto de partida"  />
        <br />
        <br />
        <button className="btn btn-primary" type="button" name = "finalizado" onClick={(e)=> handleFinalizar(e)}>En destino: viaje completado!</button>
        </div>
        : <Loader />
        } 
        {/* // : viaje.estadoViaje === "enCurso" ? 
        // <div>Viaje En curso</div> 
        // : <div>Viaje Finalizado</div>} */}
        
        
    </div>

    )
  }else {
      return (
          <Loader />
      )
  }

  
}

export default EstadoViajeConductora