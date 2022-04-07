import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./CardPasajera.module.css";
import {HiOutlineChatAlt2} from "react-icons/hi";
import {FaTaxi } from "react-icons/fa";
 import Swal from "sweetalert2"
import { useDispatch } from 'react-redux';
import { cambiaEstadoViaje } from '../../../actions/viajes';



//Esta card se muestra en la pantalla viaje CONDUCTORA al momento que le requieren un viaje
export default function CardPasajera({nombrePasajera, precio, fotoPerfil, distancia, origen, destino, idViaje}) {

  console.log("id viaje es", idViaje)  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()
    let payload = {
      id: idViaje,
      decision: e.target.name
    }
    if(e.target.name === "aceptar") {
      dispatch(cambiaEstadoViaje(payload))
      Swal.fire({
        title:"Has aceptado el viaje",
        icon: 'success',
      })
      navigate("/viajeconductora/" + idViaje)
      
    }else {
      dispatch(cambiaEstadoViaje(payload))
      Swal.fire({
        title:"Has denegado el viaje",
        icon: 'success',
      })
      navigate("/homeconductora")
    }
  }  
    return (
  <div class="card mb-3 mw-100" >
      <div class="row g-0">
        <div class="col-md-5">
          <img src={fotoPerfil} class="img-fluid rounded-start h-100" alt="foto perfil pasajera"></img>
        </div>
          <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title fs-5 fw-bold text-center">Te han solicitado un viaje 🚗</h5>
                <br />
                <p class="card-text fw-bolder">🙋‍♀️<b> Pasajera</b> {nombrePasajera}</p>
                <p class="card-text fw-bolder">💰<b> Precio</b> ${precio}</p>
                <p class="card-text fw-bolder">🚩<b> Desde</b> {origen}</p>
                <p class="card-text fw-bolder">🏁<b> Hasta</b> {destino}</p>
                <br />
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-success" type="button" name = "aceptar" onClick={(e)=> handleClick(e)}>Aceptar el viaje</button>
                    <button class="btn btn-outline-danger" type="button" name = "rechazar" onClick={(e)=> handleClick(e)}>Prefiero tomar otro viaje</button>
                </div>
              </div>
            </div>
      </div>
</div>

    )    
}

// return (
    
//   <div className={styles.tarjetaConductora}>
//           <div className={styles.tarjetaTop}><FaTaxi></FaTaxi></div>

  
//           <h5>Tienes un viaje!!</h5>
//           <p>Pasajera: {nombrePasajera}</p>
//           <p>Precio: ${precio}</p>
//           <p>Distancia: {distancia} mts</p>
//           <p>Origen: {origen}</p>
//           <p>Destino: {destino}</p>

          
          
  
//       <div className={styles.ubicacionBoton}>
//       <button className="btn btn-primary" type="button" name = "aceptar" onClick={(e)=> handleClick(e)}>Aceptar</button>
//       <button className="btn btn-primary" type="button" name = "rechazar" onClick={(e)=> handleClick(e)}>Rechazar</button>
//       </div>    
  
//   </div>

  
// )
