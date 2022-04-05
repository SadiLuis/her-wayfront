// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
// // import Directions from 'react-maps-direction'
// import {FaRegDotCircle,FaMapMarkerAlt, FaDirections} from 'react-icons/fa';
// import styles from './OrigenDestino.module.css';

//  import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { Details } from '@material-ui/icons';
// import { useDispatch, useSelector } from 'react-redux';

// import { Marker } from '@react-google-maps/api';
// import { origen, destino } from '../../actions/recorrido';
// // import PlacesAutocomplete from 'react-places-autocomplete';
 



// export default function OrigenDestino() {
//     const dispatch=useDispatch()
//     const origen=useSelector((state)=>state.recorridoReducer.origen);
//     const destino=useSelector((state)=>state.recorridoReducer.destino)
//     const [value, setValue]=useState(null)
//     const [direccion, setDireccion]=useState("")

//     const handleChange=(value)=>{
//         setDireccion(value);
//     }
//     const handleSelect=(value)=>{
//         setDireccion(value)
//     }

//   return (
//     <div className={styles.contenedor}>
        
//         <div className='container-fluid'>
//             <h1>Calcula la distancia entre dos lugares</h1>
//             <p>Ingresá los datos del viaje</p>
            
//             <form className='form-horizontal'>
//                 <div className='form-group'>
//                     <label for="desde" className='col-xs-2 control label'  > <FaRegDotCircle></FaRegDotCircle>Desde</label>
//                     <div className='col-xs-4'>
//                         {/* <input 
//                         type="text" id="desde" placeholder='Origen' 
//                         className='form-control'>
//                         </input> */}
//                         <GooglePlacesAutocomplete
//                              nearbyPlacesApi="GooglePlacesSearch"
                             
//                              debounce={400}
//                           minLengthAutocomplete={2}
//                               placeholder="Desde"
//                            style={{
//                                 container:{ 
//                                       flex:0,
//                                 },
//                                 textInput:{
//                                   fontSize:18,
//                                 }
                                
                               
                                

//                              }}
//                              onChange={(data, details=null)=>{ 
//                                   dispatch(origen({ 
//                                       location:details.geometry.location,
//                                      description:data.description
//                                  }))
//                                  dispatch(destino(null))

//                              }}
//                              Details={true}
//                              returnKeyType={"buscar"}
//                              ></GooglePlacesAutocomplete>
//                              </div>

//                 </div>

//                 <div className='form-group'>
//                     <label for="hacia" className='col-xs-2 control label'><FaMapMarkerAlt></FaMapMarkerAlt>Hacia</label>
//                     <div className='col-xs-4'>
//                         {/* <input 
//                         type="text" id="hacia" placeholder='Destino' 
//                         className='form-control' >
//                         </input> */}
//                                <GooglePlacesAutocomplete
//                                 selectProps={{
//                                     value,
//                                     onChange:setValue
//                                 }}
//                                ></GooglePlacesAutocomplete>   

//                     </div>

//                 </div>

//             </form>
//             <div className='col-xs-offset-2 col-xs-10'>
//                 <button className={styles.botonDireccion} 
            
//                 ><FaDirections></FaDirections></button>

//             </div>

//         </div>
//         <div className='container-fluid'>
//             <div id="googleMap"> 

//              </div>
//             <div id="output">

//             </div>
//     </div>
    
    
//     </div>
//   )
// }
