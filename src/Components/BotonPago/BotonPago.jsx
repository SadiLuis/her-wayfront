import React, { useEffect } from 'react'
import "./BotonPago.css"
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';
import {ACCESS_TOKEN, urlMercadoPago}  from "../../utilsPago"



const BotonPago = (props) => {

  let precio = props.precio
  let idConductora = props.idConductora
  
     const  body = {
  payer_email: "test_user_71811293@testuser.com",
  items: [
    {
      title: "Viaje en Her Way",
      description: "Viaje en Her Way",
      picture_url: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-girl-taking-a-taxi-out-taxitrunktravel-png-image_4032278.jpg",
      category_id: "category123",
      quantity: 1,
      unit_price: parseFloat(precio)
    }
  ],
  back_urls: {
    failure: "/failure",
    pending: "/pending",
    success: "http://localhost:3000/reviews/" + idConductora
  },
  payment_methods: {
      excluded_payment_types: [
          {
              id: "ticket"
          }
      ],
        installments: 1
    }
}

  
   
    async function handlePago(e) {
        e.preventDefault()
        
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
            title:"Estás por ser redirigido al sitio de mercadoPago para concretar el pago",
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