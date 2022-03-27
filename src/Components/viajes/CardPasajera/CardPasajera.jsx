import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./CardPasajera.module.css";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
 import Swal from "sweetalert2"
import { useDispatch } from 'react-redux';
import { aceptaRechazaViaje } from '../../../actions/viajes';



//Esta card se muestra en la pantalla viaje CONDUCTORA al momento que le requieren un viaje
export default function CardPasajera({nombrePasajera, precio,  distancia, origen, destino, idViaje}) {

  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()
    let payload = {
      id: idViaje,
      decision: e.target.name
    }
    if(e.target.name === "aceptar") {
      dispatch(aceptaRechazaViaje(payload))
      Swal.fire({
        title:"Has aceptado el viaje",
        icon: 'success',
      })
      
    }else {
      dispatch(aceptaRechazaViaje(payload))
      Swal.fire({
        title:"Has denegado el viaje",
        icon: 'success',
      })
      navigate("/viajeconductora")
    }
  }  
    
  return (
    
    <div className={styles.tarjetaConductora}>
            <div className={styles.tarjetaTop}><FaTaxi></FaTaxi></div>

    
            <h5>Tienes un viaje!!</h5>
            <p>Pasajera: {nombrePasajera}</p>
            <p>Precio: ${precio}</p>
            <p>Distancia: {distancia} mts</p>
            <p>Origen: {origen}</p>
            <p>Destino: {destino}</p>

            
            
    
        <div className={styles.ubicacionBoton}>
        <button className="btn btn-primary" type="button" name = "aceptar" onClick={(e)=> handleClick(e)}>Aceptar</button>
        <button className="btn btn-primary" type="button" name = "rechazar" onClick={(e)=> handleClick(e)}>Rechazar</button>
        </div>    
    
    </div>

    
  )  
}
