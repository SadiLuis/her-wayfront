import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerConductoras } from '../../../actions/administrador';
import VerConductorasAdmin from '../VerConductorasAdmin/VerConductorasAdmin';
import { pedirConductora } from '../../../actions/conductora';
//import styles from "../PedirConductora.module.css"
import { Link } from 'react-router-dom';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Container, Row, Col} from "react-bootstrap"
 





export default function UsuariosAdmin() {
    const dispatch= useDispatch();
    
  useEffect(()=>{
    dispatch(pedirConductora())
  }, [dispatch])

  const conductoras = useSelector(state => state.pedirConductoraReducer.conductoras);
  
  // useEffect(()=>{
  //   dispatch(detalleConductora())
  // }, [id, dispatch])
  
  
  // function handleClickDetalleConductora(e){
  //   e.preventDefault();
  //   dispatch(detalleConductora(e))
  // }
  
    return (
    <>
      <NavbarAdmin/>
      <VerConductorasAdmin conductoras={conductoras}/>
     
    </>
    )
       
         
  
  
  
          
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
  
      
    
  }