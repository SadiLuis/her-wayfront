import React, {useEffect, useState} from 'react'
import { Loader } from '../Loader/Loader';
import NavbarConductora from '../NavbarConductora/NavbarConductora'
import Swal from "sweetalert2"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cambiaEstadoViaje, getViaje, getViajeRequeridoPasajera } from '../../actions/viajes';
import { useParams } from 'react-router';
import BotonPago from '../BotonPago/BotonPago';
import CheckViajePasajera from './checkViaje/CheckViajePasajera'








function EstadoViajePasajera() {
  
    const { idPasajera } = useParams()
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const viajeRequerido = useSelector((state) => state.viajesReducer.viajeReqPasajera)
    const viaje = useSelector((state) => state.viajesReducer.viajePorId)

    

     useEffect(() => {
        dispatch(getViajeRequeridoPasajera(idPasajera))
     }, [idPasajera])

     

     useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getViaje(viajeRequerido[1].idViaje[0]));
            
        }, 5000);
        return () => clearInterval(interval);
      }, [viajeRequerido]);
  

  // function handleClick(e){
  //   e.preventDefault()
  //   let payload = {
  //     id: viaje.idViaje,
  //     decision: e.target.name
  //   }
  //   console.log("payload", payload)
  //   if(e.target.name === "verDatosConductora") {
      
  //     Swal.fire({
  //       title:"Proximamente aquí te mostraremos un pop-up con los datos de tu conductora",
  //       icon: 'success',
  //     })
      
  //   }if (e.taget.name === "rechazar") {
  //     dispatch(cambiaEstadoViaje(payload))
  //     Swal.fire({
  //       title:"Has cancelado el viaje",
  //       icon: 'success',
  //     })
  //     navigate("/viajeconductora")
  //   }
    // }if (e.target.name === "finalizado"){
    //     console.log("entre a finalizado")
    //      dispatch(cambiaEstadoViaje(payload))
    //     Swal.fire({
    //     title:"El viaje ha finalizado. Ya podes ver el importe acreditado en tu cuenta",
    //     icon: 'success',
    //   })
    //   navigate("/viajeconductora")
    // }
  //}
  
  console.log(viaje)
  if(viaje.estadoViaje) {
    return (
        <div>
        <NavbarConductora />
        <br />
        <br />
        <br />
        {viaje.estadoViaje === "aceptado" ?   (
            <div class='container d-flex align-items-center justify-content-center vh-100'>
            <div class='row'> 
                   {/* Columna principal izquierda */}
                   <div class="col-12 col-xl-6 ">
                               <CheckViajePasajera
                                   estado={viaje.estadoViaje}
                                   idViaje={viajeRequerido[1].idViaje[0]}

                               />
                   </div>    

                    {/* Columna principal derecha */}
                   <div class="col-12 col-xl-6 ">
                       <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                   </div>   

            </div>

       </div>
        )
        : viaje.estadoViaje === "requerido" ?
        <div class='container d-flex align-items-center justify-content-center vh-100'>
            <div class='row'> 
                   {/* Columna principal izquierda */}
                   <div class="col-12 col-xl-6 ">
                               <CheckViajePasajera
                                   estado={viaje.estadoViaje}
                                   idViaje={viajeRequerido[1].idViaje[0]}

                               />
                   </div>    

                    {/* Columna principal derecha */}
                   <div class="col-12 col-xl-6 ">
                       <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                   </div>   

            </div>

       </div> 
        : viaje.estadoViaje === "enPuntoPartida" ? 
        <div class='container d-flex align-items-center justify-content-center vh-100'>
            <div class='row'> 
                   {/* Columna principal izquierda */}
                   <div class="col-12 col-xl-6 ">
                               <CheckViajePasajera
                                   estado={viaje.estadoViaje}
                                   idViaje={viajeRequerido[1].idViaje[0]}

                               />
                   </div>    

                    {/* Columna principal derecha */}
                   <div class="col-12 col-xl-6 ">
                       <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                   </div>   

            </div>

       </div>
        : viaje.estadoViaje === "enCurso" ?
        <div class='container d-flex align-items-center justify-content-center vh-100'>
            <div class='row'> 
                   {/* Columna principal izquierda */}
                   <div class="col-12 col-xl-6 ">
                               <CheckViajePasajera
                                   estado={viaje.estadoViaje}
                                   idViaje={viajeRequerido[1].idViaje[0]}

                               />
                   </div>    

                    {/* Columna principal derecha */}
                   <div class="col-12 col-xl-6 ">
                       <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                   </div>   

            </div>

       </div>
       : viaje.estadoViaje === "finalizado" ?
       <div class='container d-flex align-items-center justify-content-center vh-100'>
           <div class='row'> 
                  {/* Columna principal izquierda */}
                  <div class="col-12 col-xl-6 ">
                              <CheckViajePasajera
                                  estado={viaje.estadoViaje}
                                  idViaje={viajeRequerido[1].idViaje[0]}
                                  precio={viaje.precio}
                                  idPasajera={viaje.idPasajera}
                                  idConductora={viaje.idConductora}

                              />
                  </div>    

                   {/* Columna principal derecha */}
                  <div class="col-12 col-xl-6 ">
                      <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                  </div>   

           </div>

      </div>
        : <Loader />
        } 
        {/* // : viaje.estadoViaje === "enCurso" ? 
        // <div>Viaje En curso</div> 
        // : <div>Viaje Finalizado</div>} */}
        
        
    </div>

    )
  }else {
      return (
          <Loader />
      )
  }

  
}
  
  // if(viaje.length > 0) {
  //   return (
  //       <div>
  //       <NavbarConductora />
  //       <br />
  //       <br />
  //       <br />
  //       {viaje[0].estadoViaje === "aceptado" ?   (
  //           <div class='container d-flex align-items-center justify-content-center vh-100'>
  //           <div class='row'> 
  //                  {/* Columna principal izquierda */}
  //                  <div class="col-12 col-xl-6 ">
  //                              <CheckViajePasajera
  //                                  estado={viaje[0].estadoViaje}
  //                                  idViaje={viaje[1].idViaje[0]}

  //                              />
  //                  </div>    

  //                   {/* Columna principal derecha */}
  //                  <div class="col-12 col-xl-6 ">
  //                      <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
  //                  </div>   

  //           </div>

  //         </div>
  //       )
  //       : viaje[0].estadoViaje ==="requerido" ?
  //       <div class='container d-flex align-items-center justify-content-center vh-100'>
  //       <div class='row'> 
  //              {/* Columna principal izquierda */}
  //              <div class="col-12 col-xl-6 ">
  //                          <CheckViajePasajera
  //                              estado={viaje[0].estadoViaje}
  //                              idViaje={viaje[1].idViaje[0]}
  //                          />
  //              </div>    

  //               {/* Columna principal derecha */}
  //              <div class="col-12 col-xl-6 ">
  //                  <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
  //              </div>   

  //       </div>

  //     </div>
  //       : viaje.estadoViaje === "enPuntoPartida" ? 
  //       <div>
  //       <br />
  //       <br />
  //           <h2>Tu conductora ya está esperando en el punto de partida</h2>
  //           <button className="btn btn-primary" type="button" name = "verDatosConductora" onClick={(e)=> handleClick(e)}>Ver Datos Conductora</button>
            
  //       </div>
  //       : viaje.estadoViaje === "finalizado" ?
  //       <div>
  //       <br />
  //       <br />
  //           <h2>Tu Conductora nos informó que el viaje terminó con éxito, ahora solo resta abonar el viaje</h2>
  //           <button className="btn btn-primary" type="button" name = "verDatosConductora" onClick={(e)=> handleClick(e)}>Ver Datos Conductora</button>
            
  //           < BotonPago 
  //             precio={viaje.precio}
  //           />            
  //       </div>   
  //        : <div>
  //             {/* <h1>Esperando la respuesta de su conductora</h1> */}
  //             <Loader />
  //           </div>
  //       }
        
  //   </div>

  //   )
  // }else {
  //     return (
  //         <div>
  //           {/* <h1>Esperando la respuesta de su conductora</h1> */}
  //         <Loader />
  //         </div>
  //     )
  // }

  
//}

export default EstadoViajePasajera
