import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pedirConductora,detalleConductora, conductorasConectadas  } from '../actions/conductora';
import TarjetaConductora from '../Screens/TarjetaConductora';
import {Loader} from './Loader/Loader'
import {getPasajeras} from '../actions/Usuarios'
 import styles from "./PedirConductora.module.css"
import { Link } from 'react-router-dom';

import Swal from "sweetalert2";
import NavBar from "../Components/Landing/Navbar"

 
export default function PedirConductora() {
    const dispatch= useDispatch();
    const conductoras= useSelector((state) =>state.pedirConductoraReducer.conductoras);
    const conectadas=useSelector((state)=>state.pedirConductoraReducer.conductorasConectadas)
    // const detalle= useSelector((state)=>state.pedirConductoraReducer.detalle);
   // const pasajera = useSelector(state => state.LoginRegisReducer.pasajera)
    
    console.log(conectadas)
  //const conductorasFilter = conductoras?.filter(cond => cond.localidad === pasajera[0].localidad)
    // console.log(conductorasFilter)

    

  useEffect(()=>{
    dispatch(conductorasConectadas())
    
  }, [dispatch])
  
   function handleSubmitPedirConductora(e){
     e.preventDefault();
     Swal.fire({
       Title: "Ahora puedes elegir la conductora",
       text: "Cuando la hayas elegido, haz click en Solicitar Conductora",
       icon: "success"

     })
   }
    return (
       
         <div className='container '>
            <NavBar/>
            <br />
            <br />
            <br />
           <span>{handleSubmitPedirConductora}</span>  
          <div className='container d-flex   align-items-center justify-content-center vh-50'>
            <div className='row'> 
            <div class="col-sm-6 col-xl-8 ">
          { conectadas.length ? (
          <><div
                >


                  {conectadas?.map(elem => {
                    return (

                      <TarjetaConductora
                        key={elem.id}
                        id={elem.id}
                        fotoPerfil={elem.fotoPerfil}
                        nombre={elem.nombre}
                        localidad={elem.localidad}
                        automovil={elem.automovil}
                        patente={elem.patente}
                         />
                    );
                  })}
                </div>
                
                 {/* <div className="col-sm-6 col-xl-4 ">
                    <img src="https://i.stack.imgur.com/ddX9U.png" alt="imagen mapa" className='h-100 w-100'  />
                  </div>  */}
                 </>
                     
       ) : <Loader />
      }
      </div>
      </div>
       </div>
       
     </div>

  
      
    )
  }
