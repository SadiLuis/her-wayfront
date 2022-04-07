import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api' 

  import { useRef, useState } from 'react'
  import {useNavigate} from 'react-router-dom'
  import {useDispatch} from 'react-redux'
  import {datosMapa} from '../../actions/recorrido'

import Swal from 'sweetalert2'
import { IconButton, SkeletonText } from '@chakra-ui/react'
import { FaLocationArrow } from 'react-icons/fa'


const libraries = ['places'];


function OrigenDestino(){
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDo2MYthjrW4eDTScPNK8BYGBNa8DF0zBc',
    libraries,
  })

      const [directionsResponse, setDirectionsResponse] = useState(null)
      const [map, setMap] = useState((null))
      const [coordinates, setCoordinates] = useState({lat: 0, lng:0});
      const [distance, setDistance] = useState('')
      const [duration, setDuration] = useState('')
      const [distanceValue, setDistanceValue] = useState('')
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const originRef = useRef()
    
      const destiantionRef = useRef()

      if (!isLoaded) {
        return <SkeletonText />
      }



        async function calculateRoute() {
          if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
          }
            // eslint-disable-next-line no-undef
            const directionsService = new google.maps.DirectionsService()
            const results = await directionsService.route({
              origin: originRef.current.value,
              destination: destiantionRef.current.value,
              // eslint-disable-next-line no-undef
              travelMode: google.maps.TravelMode.DRIVING,
            })
              setDirectionsResponse(results)
              setDistance(results.routes[0].legs[0].distance.text)
              setDuration(results.routes[0].legs[0].duration.text)
              setDistanceValue(results.routes[0].legs[0].distance.value)
              
            const data ={
              direcOrigen:results.routes[0].legs[0].start_address,
              direcDestino:results.routes[0].legs[0].end_address,
              coordDestino:results.routes[0].legs[0].end_location,
              coordOrigen:results.routes[0].legs[0].start_location,
              results
          }
          //console.log(data)
          dispatch(datosMapa(data))
        }
  
        function clearRoute() {
            setDirectionsResponse(null)
            setDistance('')
            setDuration('')
            originRef.current.value = ''
            destiantionRef.current.value = ''
        }

        function handleSweetConfirmarViaje(e){
            Swal.fire({
              icon:"success",
              title:"Has solicitado el viaje correctamente",
              text:"A continuación podrás elegir la conductora que realizará el viaje"
            })
          }
          function handleClickNavegar(){
            navigate('/pedirconductora')
          }


return (
          <div class="card mb-3 mw-100" >
      {/* <div class="row g-0"> */}
        {/* <div class="col-md-5"> */}
          {/* <h1>Imagen Perfil iba aca</h1> */}
          {/* <img src={fotoPerfil} class="img-fluid rounded-start h-100" alt="foto perfil pasajera"></img> */}
        {/* </div> */}  
          <div class="col-md-12">
              <div class="card-body">
                <h5 class="card-title fs-1 fw-bold text-left">Ingresa los datos de tu viaje ✏</h5>
                <br />
                <p class="card-text fw-bolder">📍<b> Puntos de inicia y fin del recorrido:</b> </p>
                
                <div class="d-grid gap-2">
                <Autocomplete>
                 <input 
                     type='text' 
                     placeholder='Origen' 
                     ref={originRef} 
                 />
                 </Autocomplete>
                
                 <Autocomplete>
                     <input
                         type='text'
                         placeholder='Destino'
                         ref={destiantionRef}
                         />
                 </Autocomplete>

                 <p class="card-text fw-bolder">🔎<b> Busca la mejor ruta:</b> </p>

                            
                            <button
                             className='btn btn-outline-success' 
                             type='submit' 
                             onClick={
                               calculateRoute 
                               }>
                         Trazar ruta
                     </button>
                                      <button
                             className='btn btn-outline-danger' 
                             type='submit' 
                             onClick={clearRoute}
                             >Borrar Ruta
                     </button>
                          {distance &&       
                          
                <div>
                  <p class="card-text fw-bolder">📏 Distancia <b> {distance}</b> </p>
                  {console.log("distance", {distance})}
                  <p class="card-text fw-bolder">🕓 Duracion estimada <b> {duration}</b> </p>
                  {/* <p class="card-text fw-bolder">💸<b> Precio {(distanceValue * 0.04)}</b> </p>   */}
                
                </div>
            }
            {distance && 
            <button 
              className='btn btn-outline-success' 
              onClick={()=>{
                  handleClickNavegar();
                  handleSweetConfirmarViaje()
              }      
            }
            
            >Ir a elegir mi conductora</button>
            } 
             
                </div>
              </div>
            </div>
      {/* </div> */}
</div>
)
  //   return (

  //        <div className='card mb-3 mw-100'>
  //           <div className='row '>
  //             <div class="d-grid gap-2">
  //               <Autocomplete>
  //               <input 
  //                   type='text' 
  //                   placeholder='Origen' 
  //                   ref={originRef} 
  //               />
  //               </Autocomplete>
  //              <br/>
  //               <Autocomplete>
  //                   <input
  //                       type='text'
  //                       placeholder='Destino'
  //                       ref={destiantionRef}
  //                       />
  //               </Autocomplete>
  //               <br/>

  //             <div className="d-grid gap-2">
  //                   <button
  //                           className='btn btn-outline-success' 
  //                           type='submit' 
  //                           onClick={
  //                             calculateRoute 
  //                             }>
  //                       Trazar Ruta
  //                   </button>

  //                   <button
  //                           className='btn btn-outline-danger' 
  //                           type='submit' 
  //                           onClick={clearRoute}
  //                           >Borrar Ruta
  //                   </button>
  //               </div>

  //           {distance &&       
  //               <div>            
  //                   <label htmlFor="distancia">
  //                           Distancia: {distance} 
  //                   </label>             
  //                   <label htmlFor="duracion">  
  //                           Duracion:{duration} 
  //                   </label>
  
                
  //               </div>
  //           }
  //           {distance && 
  //           <button 
  //             className='btn btn-outline-success' 
  //             onClick={()=>{
  //                 handleClickNavegar();
  //                 handleSweetConfirmarViaje()
  //             }      
  //           }
            
  //           >Confirmar viaje</button>
  //           } 
  //       </div>
  //     </div>    
  //   </div>
  // )
}
  
export default OrigenDestino

