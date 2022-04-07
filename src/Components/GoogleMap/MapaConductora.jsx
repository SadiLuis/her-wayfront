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

function MapaConductora({setCoordinates, setBounds, coordinates}) {
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

      // async function calculateRoute() {
      //   if (originRef.current.value === '' || destiantionRef.current.value === '') {
      //     return
      //   }
      //     // eslint-disable-next-line no-undef
      //     const directionsService = new google.maps.DirectionsService()
      //     const results = await directionsService.route({
      //       origin: originRef.current.value,
      //       destination: destiantionRef.current.value,
      //       // eslint-disable-next-line no-undef
      //       travelMode: google.maps.TravelMode.DRIVING,
      //     })
      //   setDirectionsResponse(results)
      //   setDistance(results.routes[0].legs[0].distance.text)
      //   setDuration(results.routes[0].legs[0].duration.text)
      //   const data ={
      //       direcOrigen:results.routes[0].legs[0].start_address,
      //       direcDestino:results.routes[0].legs[0].end_address,
      //       coordDestino:results.routes[0].legs[0].end_location,
      //       coordOrigen:results.routes[0].legs[0].start_location,
      //       results
      //   }
      //   //console.log(data)
      //   dispatch(datosMapa(data))
      // }

      // function clearRoute() {
      //   setDirectionsResponse(null)
      //   setDistance('')
      //   setDuration('')
      //   originRef.current.value = ''
      //   destiantionRef.current.value = ''
      // }

      // function handleSweetConfirmarViaje(e){
      //   Swal.fire({
      //     icon:"success",
      //     title:"Has solicitado el viaje correctamente",
      //     text:"A continuación podrás elegir la conductora que realizará el viaje"
      //   })
      // }
      // function handleClickNavegar(){
      //   navigate('/pedirconductora')
      // }
      // //function ambos(){
      //  handleClickNavegar()
      //  handleSweetConfirmarViaje()
      //}


      


    return (
      <div>
        
            <div class='container d-flex align-items-center justify-content-center vh-100'>
          
            
              
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

export default MapaConductora;