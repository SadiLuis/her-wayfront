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
import CheckViaje from './checkViaje/CheckViaje'




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
        }, 10000);
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
        title:"Avisaste que estás esperando en el punto de partida",
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
        title:"El viaje ha finalizado con éxito. Buscá tu próximo viaje",
        icon: 'success',
      })
      navigate("/homeconductora")
    
      

  }

  if(viaje.estadoViaje) {
    return (
        <div>
        <NavbarConductora />
        <br />
        <br />
        <br />
        {viaje.estadoViaje === "aceptado" ?   (
            <div class='container d-flex align-items-center justify-content-center vh-100'>
            <div class='row'> 
                   {/* Columna principal izquierda */}
                   <div class="col-12 col-xl-6 ">
                               <CheckViaje
                                   estado={viaje.estadoViaje}
                                   idViaje={idViaje}

                               />
                   </div>    

                    {/* Columna principal derecha */}
                   <div class="col-12 col-xl-6 ">
                       <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                   </div>   

            </div>

       </div>
        ) 
        : viaje.estadoViaje === "enPuntoPartida" ? 
        <div class='container d-flex align-items-center justify-content-center vh-100'>
            <div class='row'> 
                   {/* Columna principal izquierda */}
                   <div class="col-12 col-xl-6 ">
                               <CheckViaje
                                   estado={viaje.estadoViaje}
                                   idViaje={idViaje}

                               />
                   </div>    

                    {/* Columna principal derecha */}
                   <div class="col-12 col-xl-6 ">
                       <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                   </div>   

            </div>

       </div>
        : viaje.estadoViaje === "enCurso" ?
        <div class='container d-flex align-items-center justify-content-center vh-100'>
            <div class='row'> 
                   {/* Columna principal izquierda */}
                   <div class="col-12 col-xl-6 ">
                               <CheckViaje
                                   estado={viaje.estadoViaje}
                                   idViaje={idViaje}

                               />
                   </div>    

                    {/* Columna principal derecha */}
                   <div class="col-12 col-xl-6 ">
                       <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                   </div>   

            </div>

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