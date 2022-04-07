import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

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
import Swal from "sweetalert2"
import Navbar from '../NavbarConductora/NavbarConductora'
import OrigenDestino from './Origen_Destino'


const libraries = ['places'];

function Mapa({setCoordinates, setBounds, coordinates}) {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyDo2MYthjrW4eDTScPNK8BYGBNa8DF0zBc',
      libraries,
    })

    const [map, setMap] = useState((null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
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
      //function ambos(){
      //  handleClickNavegar()
      //  handleSweetConfirmarViaje()
      //}


      


    return (
      <div>
        
            <div class='container d-flex align-items-center justify-content-center vh-100'>
          
            
              {/* Google Map Box */}
              <div className='card mb-3 mw-100'>
              <div className='row '>
                

              <h5 class="card-title fs-3 fw-bold text-center">Ingresa los datos de tu viaje ✏</h5>
                <br />
                <p class="card-text fw-bolder text-center">📍<b> Puntos de inicia y fin del recorrido:</b> </p>
                <div class="d-grid gap-2">
                  
              <VStack spacing={2} justifyContent='space-between'>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input 
                    type='text' 
                    placeholder='Origen' 
                    ref={originRef} />
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input
                    type='text'
                    placeholder='Destino'
                    ref={destiantionRef}
                />
              </Autocomplete>
            </Box>

            <p class="card-text fw-bolder">🔎<b> Busca la mejor ruta para el recorrido:</b> </p>

            <ButtonGroup>
            <div className="d-grid gap-2">
              <button 
                    className='btn btn-outline-success' 
                    type='submit' 
                    onClick={calculateRoute}>
                      Trazar Ruta
              </button>
              <button
                    className='btn btn-outline-danger' 
                    type='submit' 
                    onClick={clearRoute}>
                      Borrar Ruta 
                </button>
              </div>
            </ButtonGroup>
          </VStack>
          
        {distance && 
           <div>
           <p class="card-text fw-bolder text-center">📏 Distancia <b> {distance}</b> </p>
           {console.log("distance", {distance})}
           <p class="card-text fw-bolder text-center">🕓 Duracion estimada <b> {duration}</b> </p>
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
              >Confirmar viaje</button>
          } 
        </div>
      </div>
    </div> 
              <GoogleMap
              center={coordinates}
              zoom={15}
              mapContainerStyle={{ width: '75%', height: '97%' }}
              options={{
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: true,
                fullscreenControl: true,
              }}
              onChange={(e) => {
                setCoordinates({lat: e.center.lat, lng: e.center.lng });
                setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
              }}
              onLoad={map => setMap(map)}
            >
              <Marker position={coordinates} />
                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>   
        
        </div>
              </div>
        
      
      )
    }

export default Mapa;