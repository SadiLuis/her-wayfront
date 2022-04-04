import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pedirConductora,detalleConductora, conductorasConectadas  } from '../actions/conductora';
import TarjetaConductora from '../Screens/TarjetaConductora';
import {Loader} from './Loader/Loader'
import {getPasajeras} from '../actions/Usuarios'
import styles from "./PedirConductora.module.css"
import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Container, Row, Col} from "react-bootstrap"
import Swal from "sweetalert2"
 
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
       
          <>
          <span>{handleSubmitPedirConductora}</span> 
          
          { conectadas.length ? (<div className={styles.contenedor}>
        {/* <button className={styles.botonPedirConductora}
      onClick={(e)=>{handleClickPedirConductora(e)}}
      >Pedir Conductora</button> */}
        
          { conectadas?.map(elem => {
            return (
  
              <TarjetaConductora
                key={elem.id}
                id= {elem.id}
                nombre={elem.nombre}
                localidad={elem.localidad}
                automovil={elem.automovil}
                patente={elem.patente}
                habilitacion={elem.habilitacion}

                 //conectada={elem.conectada}
                 />

  
            );
          })}
        
       </div>)
          : <Loader />
      }
       </>
  
  
  
          
        // <div className='container'> 
        //    <h2 style={{textAlign:"center"}}>Elija su conductora</h2>
           
        //       <div className='row'> 
            //    </div><button className={styles.botonPedirConductora}
            //  //onClick={(e)=>{handleClickDetalleConductora(e)}}
            //   // >Ver Conductora</button> 
            //  </div> 
  //                <div className='col-md-6'> 
  //           {conductoras?.map(elem => {
  //             return (
  
  //       <TarjetaConductoras
  //       key={elem.id}
  //       nombre={elem.nombre}
  //       localidad={elem.localidad}
  //       automovil={elem.automovil}
  //       patente={elem.patente}
  //       habilitacion={elem.habilitacion}
  //       conectada={elem.conectada} />
        
  //       );
  //     })}
  //     </div> 
  //  </div>  
    
  // </div>
  
      
    )
  }
