import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./TarjetaConductora.module.css";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
import { useState } from 'react';
// import Swal from "sweetalert2"




export default function TarjetaConductoras({nombre,localidad, automovil, patente, habilitacion, conectada, id}) {
    console.log(nombre)

    
    
  return (
    <div className={styles.tarjetaConductora}>
    <div className={styles.tarjetaTop}><FaTaxi></FaTaxi></div>
    <div className={styles.tarjetaConductoraBody}>

    <Link to={'/conductoras' + id} style={{color:"#646464"}} >
    <div key={id}></div>
    <h4> Nombre: {nombre}</h4>
    </Link>
    <p>Localidad: {localidad}</p>
    <p>Vehículo: {automovil}</p>
    <p> Patente: {patente}</p>
    <p>Habilitación: {habilitacion}</p>
    <p>Conectada: {conectada? <p>Sí</p> : <p>No </p> } </p>
    <div className={styles.icono}>
     
    <HiOutlineChatAlt2 style={{fontSize:25}} ></HiOutlineChatAlt2> 
    
    </div>
    </div>
   <div className={styles.ubicacionBoton}>  
   
     { conectada? 
     <button  className={styles.botonSolicitarViaje}
     >
      <Link to="/viajeAceptado" style={{color:"#fff"}}>  
    {/* quiero que cuando la pasajera haga click acá, vaya al componente recorrido.js que hizo Lore o Emi -no lo se!! */}
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
//  <div className='container '>
//   <div className='row my-5 align-items-center justify-content-center'>
//     <div className='col-8 col-lg-4 col-xl-3 '>
//       <div className={styles.tarjetaConductoras}>
//     <div className={styles.tarjetaTop}><FaTaxi></FaTaxi></div>

//     <Link to={'/conductoras' + id} style={{color:"#646464"}} >
//     <div key={id}></div>
//     <h5>Nombre de la conductora: {nombre}</h5>
//     </Link>
//     <p>Localidad: {localidad}</p>
//     <p>Vehículo: {automovil}</p>
//     <p> Patente: {patente}</p>
//     <p>Habilitación: {habilitacion}</p>
//     <p>Conectada: {conectada? <p>Sí</p>: <p>No se encontraron datos</p> } </p>
//     <div className={styles.icono}>
     
//     <HiOutlineChatAlt2 style={{fontSize:25}} ></HiOutlineChatAlt2> 
    
//     </div>
//    <div className={styles.ubicacionBoton}>
//    <button className={styles.botonPedirConductora}>
//     <Link to="/pedirconductora" style={{color:"#fff"}}>Solicitar viaje</Link>
//     </button>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div> 
//   )
    
  
    
  
}
