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
} from '@chakra-ui/react'


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
import OrigenDestino from './Origen_Destino'
import Navbar from '../Landing/Navbar'


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

      


  return (
    <div>
        <Navbar /> 
          <div class='container d-flex align-items-center justify-content-center vh-100'>
        <Flex
          position='relative'
          justifyContent='normal'
          marginTop='9%'
          h='85vh'
          w='50vw'
          >
            <OrigenDestino />
            {/* Google Map Box */}
           
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
        </Flex>
        </div>
              </div>
        
      
      )
    }

export default Mapa;