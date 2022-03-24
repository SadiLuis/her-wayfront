import React from 'react'
import "./BotonPago.css"
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';
import {ACCESS_TOKEN, urlMercadoPago, body}  from "./utilsPago"



const BotonPago = () => {
//let precioViaje = 800
   
    async function handlePago(e) {
        e.preventDefault()
        console.log("acces toek", ACCESS_TOKEN)
        console.log("URL", urlMercadoPago)
        console.log("body", body)
        const respuesta = await axios.post(urlMercadoPago, body, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ` + ACCESS_TOKEN
            }
         })
         setTimeout(function () {
            window.location.href = respuesta.data["init_point"];
          }, 3000);
          
          Swal.fire({
            title:"Estas por ser redirigido al sitio de mercadoPago para concretar el pago",
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Acepto!'

          })
       
        
}
        
    return (
            <button className="btn btn-primary" type="button" onClick={(e)=> handlePago(e)}>PAGAR VIAJE</button>
  )
}

export default BotonPago