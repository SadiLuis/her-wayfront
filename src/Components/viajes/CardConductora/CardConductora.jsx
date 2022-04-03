import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TarjetaConductora.module.css";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
import { useState } from 'react';
// import Swal from "sweetalert2"




export default function TarjetaConductoras({nombre,localidad, automovil, patente, habilitacion, conectada, id}) {
   // console.log(nombre)

    
    
  return (
    <div className={styles.tarjetaConductora}>
    <div className={styles.tarjetaTop}><FaTaxi></FaTaxi></div>

    <Link to={'/conductoras' + id} style={{color:"#646464"}} >
    <div key={id}></div>
    <h5>Nombre de la conductora: {nombre}</h5>
    </Link>
    <p>Localidad: {localidad}</p>
    <p>Vehículo: {automovil}</p>
    <p> Patente: {patente}</p>
    <p>Habilitación: {habilitacion}</p>
    <p>Conectada: {conectada? <p>Sí</p> : <p>No </p> } </p>
    <div className={styles.icono}>
     
    <HiOutlineChatAlt2 style={{fontSize:25}} ></HiOutlineChatAlt2> 
    
    </div>
   <div className={styles.ubicacionBoton}>
   
     { conectada? 
     <button  className={styles.botonPedirConductora}   
     >
    <Link to="/solicitarViaje" style={{color:"#fff"}}> 
    {/* quiero que cuando la pasajera haga click acá, vaya al componente recorrido.js que hizo Lore */}
      Solicitar viaje
      </Link>
    </button>
     : <button className={styles.botonDisabled} disabled 
      > Solicitar viaje
       </button> 
     }
    
    </div>

    </div>
  )  
}
