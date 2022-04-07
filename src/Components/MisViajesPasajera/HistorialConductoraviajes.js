import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {misViajesPasajera, viajesPorConductora} from '../../actions/misViajesPasajera';
import {useNavigate} from 'react-router-dom';
//import {getPasajeras} from '../../actions/Usuarios'
// import NavbarAdmin from '../Admin/NavbarAdmin/NavbarAdmin';
import {Link} from 'react-router-dom'
import styles from './MisViajes.module.css'
import { useParams } from 'react-router'; 

function HistorialConductoraViajes() {
    
const { id} = useParams();

const dispatch =useDispatch();
 const navigate = useNavigate()
 const viajes= useSelector(state => state.misViajesPasajeraReducer.misViajesPasajera);
 const viajesPorId = useSelector(state => state.misViajesPasajeraReducer.viajesPorConductora);
 const conductora = useSelector(state => state.registroConductoraReducer.registroCond);
    
    console.log(viajes)

    

//   useEffect(()=>{
//        if(viajes){
//       dispatch(misViajesPasajera(viajes.idPasajera))
//       } else{
//            navigate("/home")
//     }
//     }, [  dispatch])

  
    useEffect(()=>{
        if(conductora){
       dispatch(viajesPorConductora(id));
       }
   }, []);
  
  return (
      
      
    <div className='container-center'>
        <div className={styles.navbar}>
        <h4>Viajes Realizados</h4>
            <ul className={styles.navbarList}>
         <li>   <Link to="/home" className={styles.navbarLink}>Home</Link></li>
         <li>   <Link to="/perfilConductora" className={styles.navbarLink}>Volver</Link></li>
           
            </ul>

          </div>
        
          <div className='container-fluid'>
              <div className='misViajes'>
                  
                  {viajesPorId.length ? (
                      <div>
                                  {console.log("nombre conductora", viajesPorId[0].nombreConductora)}

                          <table className='table align-middle table-bordered table-striped'>
                              <thead>
                                  <tr>
                                      {/* <td className='h4'>Fecha</td> */}
                                      <td className='h4'>Conductora</td>
                                      <td className='h4'>Pasajera</td>
                                      <td className='h4'>Origen</td>
                                      <td className='h4'>Destino</td>
                                      <td className='h4'>Precio</td>
                                  </tr>
                              </thead>
                              <tbody>
                                  {viajesPorId.length ? (
                                      viajesPorId.map((viaje) => (
                                          <tr key={viaje.id}>
                                              {/* <td>{viaje.fecha}</td>  */}
                                              <td>{viaje.nombreConductora}</td>
                                              <td>{viaje.nombrePasajera}</td>
                                              <td>{viaje.direcOrigen}</td>
                                              <td>{viaje.direcDestino}</td>
                                              <td>{viaje.precio}</td>
                                          </tr>
                                      ))
                                  ) : (
                                      <tr>
                                          <td colSpan={"5"}>"No hay registro de viajes aún"</td>
                                      </tr>
                                  )}
                              </tbody>
                          </table>

                      </div>
                  ) : (
                      <div className='spinner-border' role="status">
                          <span className='visually-hidden'>Cargando...</span>
                      </div>
                  )}


              </div>
          </div>
      </div>
      
      
     
    
  )};


export default  HistorialConductoraViajes;