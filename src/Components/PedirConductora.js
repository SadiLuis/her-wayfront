import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { pedirConductora,detalleConductora } from '../actions/conductora';
import TarjetaConductora from '../Screens/TarjetaConductora';
import styles from "./PedirConductora.module.css"
import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Container, Row, Col} from "react-bootstrap"
 





export default function PedirConductora() {
    const dispatch= useDispatch();
    const conductoras= useSelector((state) =>state.pedirConductoraReducer.conductoras);
    // const detalle= useSelector((state)=>state.pedirConductoraReducer.detalle);
    console.log(conductoras)
  
      
  useEffect(()=>{
    dispatch(pedirConductora())
  }, [dispatch])
  
  // useEffect(()=>{
  //   dispatch(detalleConductora())
  // }, [id, dispatch])
  
  function handleClickPedirConductora(e){
    e.preventDefault();
  dispatch(pedirConductora())
  
 }
  // function handleClickDetalleConductora(e){
  //   e.preventDefault();
  //   dispatch(detalleConductora(e))
  // }
  
    return (
       
          <><h2 style={{justifyContent:"center"}}>Elija su conductora</h2>
          <div className={styles.contenedor}>
        {/* <button className={styles.botonPedirConductora}
      onClick={(e)=>{handleClickPedirConductora(e)}}
      >Pedir Conductora</button> */}
        
          {conductoras?.map(elem => {
            return (
  
              <TarjetaConductora
                key={elem.id}
                nombre={elem.nombre}
                localidad={elem.localidad}
                automovil={elem.automovil}
                patente={elem.patente}
                habilitacion={elem.habilitacion}
                conectada={elem.conectada} />
  
            );
          })}
  
       </div></>
  
  
  
          
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