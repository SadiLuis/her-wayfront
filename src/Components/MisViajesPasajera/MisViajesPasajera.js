import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {misViajesPasajera, viajesPorPasajera} from '../../actions/misViajesPasajera';
import {useNavigate} from 'react-router-dom';
//import {getPasajeras} from '../../actions/Usuarios'

function MisViajesPasajera() {
 const dispatch =useDispatch();
 const navigate = useNavigate()
 const viajes= useSelector(state => state.misViajesPasajeraReducer.misViajesPasajera);
 const pasajera = useSelector(state => state.LoginRegisReducer.pasajera);
    console.log(pasajera)
    console.log(viajes)

    

  useEffect(()=>{
       if(viajes){
      dispatch(misViajesPasajera(viajes.idPasajera))
      } else{
           navigate("/home")
    }
    }, [ viajes.idPasajera, dispatch])

  
//     useEffect(()=>{
//         if(pasajera){
//        dispatch(viajesPorPasajera(pasajera.id));
//        }
//    }, [ dispatch, pasajera ]);
  
  return (
      <div className="container-center">
          <div className='container-fluid'>
              <div className='misViajes'>
          <h2>Todos los viajes</h2>
          {
              viajes.length ?(
                  <div> 
                      <table className='table align-middle table-bordered table-striped'>
                          <thead>
                              <tr>
                              {/* <td className='h4'>Fecha</td> */}
                              <td className='h4'>Pasajera</td>
                              <td className='h4'>Conductora</td>
                              <td className='h4'>Origen</td>
                              <td className='h4'>Destino</td>
                              <td className='h4'>Precio</td>
                              </tr>
                          </thead>
                          <tbody>
                              {viajes.length ? (
                                  viajes.map((viaje)=>(
                                      <tr key={viaje.id}>
                                         {/* <td>{viaje.fecha}</td>  */}
                                         <td>{viaje.nombrePasajera}</td>
                                         <td>{viaje.nombreConductora}</td>
                                         <td>{viaje.origen}</td>
                                         <td>{viaje.destino}</td>
                                         <td>{viaje.precio}</td>
                                      </tr>
                                  ))
                              ): (
                                  <tr>
                              <td colSpan={"5"}>"No hay registro de viajes aún"</td>
                              </tr>
                              )}
                            </tbody>
                            </table>
                            
                    </div>
                      ): (
                    <div className='spinner-border' role="status">
                        <span className='visually-hidden'>Cargando...</span>
                        </div>
                )
            } 
              
              
            </div>
            </div>
            </div>
  );
};


export default MisViajesPasajera;