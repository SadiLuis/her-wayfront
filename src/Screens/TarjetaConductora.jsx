import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import styles from "./TarjetaConductora.module.css";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
import { useState , useEffect } from 'react';
//import {getPasajeras} from '../actions/Usuarios'

import {getPerfilConductora,pedirConductora} from '../actions/conductora';
import {crearViaje} from '../actions/recorrido'
import {useDispatch, useSelector} from 'react-redux';
 import Swal from "sweetalert2"





export default function TarjetaConductoras({nombre,localidad, automovil, patente, fotoPerfil, id, telefono}) {

  const viaje = useSelector(state => state.recorridoReducer.datosMapa)
  const pasajera = useSelector(state => state.LoginRegisReducer.usuariaLogueada[0])
  const valoración= useSelector(state=>state.reviewsReducer.reviewsConductora)
 const conductora= useSelector((state) => state.pedirConductoraReducer.todasLasConductoras)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(conductora)

 
    //console.log(id,'id')
  //   useEffect(()=>{
   
  // dispatch(getPasajeras())
  //   },[dispatch])
  //      //console.log(pasajera)


    
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
      idPasajera: pasajera?.id,
      nombrePasajera: pasajera?.nombre,
       precio: viaje?.results.routes[0].legs[0].distance.value * 0.04,
    
    } 
    
   
    const handleButton =(payload)=>{
      // dispatch(getPerfilConductora(payload.idConductora))
        dispatch(crearViaje(payload))
        Swal.fire({
          title: "Has solicitado a tu conductora",
          icon: "success"
        })
        navigate('/checkpasajera/' + pasajera.id)
    } 
   

  return (
    <div className='card mb-3 mw-100'>
    <div className='row '>
        <div className='col-md-4 '>
        <img src={fotoPerfil } class="img-fluid rounded-start h-100" alt="foto perfil conductora"></img>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
          
            <p className='card-text fw-bolder'>🙋‍♀️<b>Conductora</b> {nombre}</p>
            <p className='card-text fw-bolder'>🏙<b>Localidad</b> Córdoba</p>
            <p className='card-text fw-bolder'>🚖<b>Automóvil</b> {automovil}</p>
            <p className='card-text fw-bolder'>🆔<b>Patente</b> {patente}</p>
            <p className='card-text fw-bolder'>🗣<b>Comunicate con ella</b>{telefono}</p>
              
            
            
            <div class="d-grid gap-2">
            <button class="btn btn-outline-success" type="button" name = "aceptar" onClick={()=> handleButton(data)}>Solicitar viaje</button>
            </div>
                  </div>  
            </div>
            </div>
            </div>
    
     
  )

}