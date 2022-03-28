import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./TarjetaConductora.module.css";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
import { useState , useEffect } from 'react';
import {getPasajeras} from '../actions/Usuarios'
import {getPerfilConductora} from '../actions/conductora'
import {crearViaje} from '../actions/recorrido'
import {useDispatch, useSelector} from 'react-redux'
// import Swal from "sweetalert2"




export default function TarjetaConductoras({nombre,localidad, automovil, patente, habilitacion, conectada, id}) {
    console.log(nombre)
    const viaje = useSelector(state => state.recorridoReducer.datosMapa)
    const pasajera = useSelector(state => state.LoginRegisReducer.pasajera)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
   
  dispatch(getPasajeras())
    },[dispatch])
       console.log(pasajera)
     const data = {
      direcOrigen: viaje?.direcOrigen,
      direcDestino: viaje?.direcDestino,
      coordDestino: viaje?.coordDestino,
      coordOrigen: viaje?.coordOrigen,
      descripDestino: viaje?.results.routes[0].summary,
      descripOrigen: "",
      estadoViaje: "requerido",
      idChat:"023545",
      idConductora: id,
      nombreConductora: nombre,
      idPasajera: pasajera[0]?.id,
      nombrePasajera: pasajera[0]?.nombre,
      precio: viaje?.results.routes[0].legs[0].distance.value * 0.04
    } 

    const handleButton =(payload)=>{
      dispatch(getPerfilConductora(payload.idConductora))
        //dispatch(crearViaje(payload))
        navigate('/viajeAceptado')
    } 

  return (
    <div className={styles.tarjetaConductora}>
    <div className={styles.tarjetaTop}><FaTaxi></FaTaxi></div>
    <div key={id}></div>
    <h5>Nombre de la conductora: {nombre}</h5>
    <p>Localidad: {localidad}</p>
    <p>Vehículo: {automovil}</p>
    <p> Patente: {patente}</p>
    <p>Habilitación: {habilitacion}</p>
   
    <div className={styles.icono}>
     
    <HiOutlineChatAlt2 style={{fontSize:25}} ></HiOutlineChatAlt2> 
    
    </div>
   <div className={styles.ubicacionBoton}>
   
     
     <button  className={styles.botonPedirConductora}   
     >
    
    {/* quiero que cuando la pasajera haga click acá, vaya al componente recorrido.js que hizo Lore */}
     <button onClick={()=>handleButton(data)}>Solicitar viaje</button> 
     
    </button>
    
     
    
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
