import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./TarjetaConductora.module.css";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
import { useState , useEffect } from 'react';
//import {getPasajeras} from '../actions/Usuarios'

import {getPerfilConductora,pedirConductora} from '../actions/conductora'
import {crearViaje} from '../actions/recorrido'
import {useDispatch, useSelector} from 'react-redux'
// import Swal from "sweetalert2"




export default function TarjetaConductoras({nombre,localidad, automovil, patente, habilitacion, conectada, id}) {

  const viaje = useSelector(state => state.recorridoReducer.datosMapa)
  const pasajera = useSelector(state => state.LoginRegisReducer.pasajera)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(nombre,localidad)

  

    //console.log(id,'id')
  //   useEffect(()=>{
   
  // dispatch(getPasajeras())
  //   },[dispatch])
  //      //console.log(pasajera)


    
       //console.log(pasajera)

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
    console.log(data.idConductora)
   
    const handleButton =(payload)=>{
      dispatch(getPerfilConductora(payload.idConductora))
        //dispatch(crearViaje(payload))

        navigate('/viajeAceptado')
    } 
    const handleClick =()=>{
      //dispatch()
        navigate('/reviews')
    }

  return (
    <div className={styles.tarjetaConductora}>
    <div className={styles.tarjetaTop}><FaTaxi></FaTaxi></div>
        <div className={styles.tarjetaConductoraBody}>
    <div key={id}></div>
    <h4> {nombre}</h4>
    <p>Localidad: {localidad}</p>
    <p>Vehículo: {automovil}</p>
    <p> Patente: {patente}</p>
    <p>Habilitación: {habilitacion}</p>
    <p>Conectada:{conectada ? <p>Si</p> : <p>No disponible</p>}</p>
   
    <div className={styles.icono}>
     
    <HiOutlineChatAlt2 style={{fontSize:25}} ></HiOutlineChatAlt2> 
    
    </div>
    </div>
   <div className={styles.ubicacionBoton}>
   
    {/* quiero que cuando la pasajera haga click acá, vaya al componente recorrido.js que hizo Lore */}
     <button className={styles.botonSolicitarViaje}onClick={()=>handleButton(data)}>Solicitar viaje</button> 
      </div>
    <button disabled='' onClick={()=>handleClick()}>Calificar Conductora</button>
    </div>
  )

}