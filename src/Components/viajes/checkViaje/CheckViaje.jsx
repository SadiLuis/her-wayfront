import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
 import Swal from "sweetalert2"
import { useDispatch } from 'react-redux';
import { cambiaEstadoViaje } from '../../../actions/viajes';



//Esta card se muestra en la pantalla viaje CONDUCTORA para informar del estado de un viaje en curso
export default function CheckViaje(props) {

  let estado = props.estado
  let idViaje = props.idViaje
 

  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  function handleClick(e){
    e.preventDefault()
    let payload = {
      id: idViaje,
      decision: e.target.name
    }
    
    if(e.target.name === "enPuntoPartida") {
      dispatch(cambiaEstadoViaje(payload))
      Swal.fire({
        title:"Avisaste que estas esperando en el punto de partida",
        icon: 'success',
      })
    }  
    if(e.target.name === "enCurso") {
      dispatch(cambiaEstadoViaje(payload))
      Swal.fire({
          title:"Inicia el recorrido",
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
    if(e.target.name === "verDatosPasajera") {
      
      Swal.fire({
        title:"Proximamente aquí te mostraremos un pop-up con los datos de tu pasajera",
        icon: 'success',
      })
  }
}
  
  function handleFinalizar (e) {
      e.preventDefault()
      let payload = {
        id: idViaje,
        decision: "finalizado"
      }
        dispatch(cambiaEstadoViaje(payload))
        
        Swal.fire({
        title:"El viaje ha finalizado correctamente!",
        icon: 'success',
      })
      navigate("/viajeconductora")
  }  



    if (estado === "aceptado") {
    return (
  <div class="card mb-3 mw-100" >
      <div class="row g-0">
        
          <div class="col-md-12">
              <div class="card-body">
                <h5 class="card-title text-center fs-5 fw-bold">Estado de tu viaje en curso 🚗</h5>
                <br />
                <p class="card-text fw-bolder">✔<b> La pasajera te ha requerido un viaje 🙋‍♀️</b> </p>
                <p class="card-text fw-bolder">✔<b> Aceptaste el viaje ✍</b> </p>
                <p class="card-text fw-bolder">⚪ LLegaste al punto de partida 📍</p>
                <p class="card-text fw-bolder">⚪ Inicia el recorrido ⚡</p>
                <p class="card-text fw-bolder">⚪ El viaje ha finalizado 🏁</p>
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-success" type="button" name = "enPuntoPartida" onClick={(e)=> handleClick(e)}>Avisar a la pasajera que estoy en el punto de partida</button>
                    <button class="btn btn-outline-danger" type="button" name = "rechazar" onClick={(e)=> handleClick(e)}>Cancelar viaje</button>
                    <button className="btn btn-secondary" type="button" name = "verDatosPasajera" onClick={(e)=> handleClick(e)}>Ver Datos Pasajera</button>
                </div>
              </div>
            </div>
      </div>
</div>

    )
  }    
    if (estado === "enPuntoPartida") {
    return (
  <div class="card mb-3 mw-100" >
      <div class="row g-0">
        
          <div class="col-md-12">
              <div class="card-body">
                <h5 class="card-title text-center fs-3 fw-bold">Estado de tu viaje en curso 🚗</h5>
                <br />
                <p class="card-text fw-bolder">✔<b> La pasajera te ha requerido un viaje 🙋‍♀️</b> </p>
                <p class="card-text fw-bolder">✔<b> Aceptaste el viaje ✍</b> </p>
                <p class="card-text fw-bolder">✔ <b>LLegaste al punto de partida</b> 📍</p>
                <p class="card-text fw-bolder">⚪ Inicia el recorrido ⚡</p>
                <p class="card-text fw-bolder">⚪ El viaje ha finalizado 🏁</p>
                <br />
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-success" type="button" name = "enCurso" onClick={(e)=> handleClick(e)}>Iniciar el recorrido</button>
                    <button class="btn btn-outline-danger" type="button" name = "rechazar" onClick={(e)=> handleClick(e)}>Cancelar viaje</button>
                    <button className="btn btn-secondary" type="button" name = "verDatosPasajera" onClick={(e)=> handleClick(e)}>Ver Datos Pasajera</button>
                </div>
              </div>
            </div>
      </div>
</div>

    )
  }
  if (estado === "enCurso") {
    return (
  <div class="card mb-3 mw-100" >
      <div class="row g-0">
        
          <div class="col-md-12">
              <div class="card-body">
                <h5 class="card-title text-center fs-3 fw-bold">Estado de tu viaje en curso 🚗</h5>
                <br />
                <p class="card-text fw-bolder">✔<b> La pasajera te ha requerido un viaje 🙋‍♀️</b> </p>
                <p class="card-text fw-bolder">✔<b> Aceptaste el viaje ✍</b> </p>
                <p class="card-text fw-bolder">✔ <b>LLegaste al punto de partida</b> 📍</p>
                <p class="card-text fw-bolder">✔ <b>Inicia el recorrido</b> ⚡</p>
                <p class="card-text fw-bolder">⚪ Finalizar el recorrido 🏁</p>
                <br />
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-success" type="button" name = "enCurso" onClick={(e)=> handleFinalizar(e)}>Finalizar el viaje</button>
                    <button class="btn btn-outline-danger" type="button" name = "rechazar" onClick={(e)=> handleClick(e)}>Cancelar viaje</button>
                    <button className="btn btn-secondary" type="button" name = "verDatosPasajera" onClick={(e)=> handleClick(e)}>Ver Datos Pasajera</button>
                </div>
              </div>
            </div>
      </div>
</div>

    )
  }

}
