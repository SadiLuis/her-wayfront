import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./CardConductora.module.css";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
import { useState } from 'react';
import Swal from "sweetalert2"
import { cambiaEstadoViaje } from '../../../actions/viajes';
import { useDispatch } from 'react-redux';




export default function CardConductora({nombre, automovil, patente, fotoPerfil, precio, origen, destino, idPasajera, idConductora, idViaje}) {
    

  console.log("id viaje es", idViaje)  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()
    let payload = {
      id: idViaje,
      decision: e.target.name
    }
    if(e.target.name === "pantallaViaje") {
      //dispatch(cambiaEstadoViaje(payload))
      Swal.fire({
        title:"Redirigiendote para que puedas ver el estado en el que se encuentra tu viaje",
        icon: 'success',
      })
      navigate("/viajepasajera/" + idViaje)
      
    }else {
      dispatch(cambiaEstadoViaje(payload))
      Swal.fire({
        title:"Has cancelado el viaje!",
        icon: 'success',
      })
      navigate("/mapa")
    }
  }  
    
    
  return (
        
    <div className={styles.tarjetaConductora}>
    <div className={styles.tarjetaTop}><FaTaxi></FaTaxi></div>


    <h5>La conductora está en camino</h5>
    <img width="100px" height="100px" src={fotoPerfil} alt="fotoConductora"></img>
    <p>Conductora: {nombre}</p>
    <p>Automovil: {automovil} </p>
    <p>Patente: {patente}</p>
    <p>Estrellas: </p>
    
    
    

<div className={styles.ubicacionBoton}>
<button className="btn btn-primary" type="button" name = "pantallaViaje" onClick={(e)=> handleClick(e)}>Ver estado de mi viaje</button>
<br />
<button className="btn btn-primary" type="button" name = "rechazar" onClick={(e)=> handleClick(e)}>Cancelar Viaje</button>
</div>     

</div>    
  )
}
