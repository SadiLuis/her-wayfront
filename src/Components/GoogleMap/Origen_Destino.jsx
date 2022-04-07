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

         <div className='card mb-3 mw-100'>
            <div className='row '>
              <div class="d-grid gap-2">
                <Autocomplete>
                <input 
                    type='text' 
                    placeholder='Origen' 
                    ref={originRef} 
                />
                </Autocomplete>
               <br/>
                <Autocomplete>
                    <input
                        type='text'
                        placeholder='Destino'
                        ref={destiantionRef}
                        />
                </Autocomplete>
                <br/>

              <div className="d-grid gap-2">
                    <button
                            className='btn btn-outline-success' 
                            type='submit' 
                            onClick={
                              calculateRoute 
                              }>
                        Trazar Ruta
                    </button>

                    <button
                            className='btn btn-outline-danger' 
                            type='submit' 
                            onClick={clearRoute}
                            >Borrar Ruta
                    </button>
                </div>

            {distance &&       
                <div>            
                    <label htmlFor="distancia">
                            Distancia: {distance} 
                    </label>             
                    <label htmlFor="duracion">  
                            Duracion:{duration} 
                    </label>
  
                
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
            
            >Confirmar viaje</button>
            } 
        </div>
      </div>    
    </div>
  )
}
  
export default OrigenDestino

