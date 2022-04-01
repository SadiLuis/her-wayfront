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



<<<<<<< HEAD
=======

function Mapa({setCoordinates, setBounds, coordinates}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDo2MYthjrW4eDTScPNK8BYGBNa8DF0zBc',
    libraries:['places'],
=======
import Swal from "sweetalert2"
function Mapa({setCoordinates, setBounds, coordinates}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDo2MYthjrW4eDTScPNK8BYGBNa8DF0zBc',
    libraries: ['places'],
>>>>>>> rating-reviews-conductoras
  })
>>>>>>> rating-reviews-conductoras



function Mapa({setCoordinates, setBounds, coordinates}) {
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyB6A5sRCY60lwXdp5txFqBNx-_mBOWcAu0',
      libraries: ['places'],
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
      function ambos(){
        handleClickNavegar()
        handleSweetConfirmarViaje()
      }


  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      marginTop='20px'
      h='100vh'
      w='100vw'
    >
      <Box position='relative' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack spacing={2} justifyContent='space-between'>
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

          <ButtonGroup>
            <Button 
                  colorScheme='blue' 
                  type='submit' 
                  onClick={calculateRoute}>
              Trazar Ruta
            </Button>
            <IconButton
                  aria-label='center back'
                  icon={<FaTimes />}
                  onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
       {distance && <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distancia: {distance} </Text>
          <Text>Duracion: {duration} </Text>
          <IconButton
              aria-label='center back'
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                map.panTo(coordinates)
                map.setZoom(15)
              }}
          />
       
        </HStack>
      }
      {distance && 
      <button onClick={()=>{
        handleClickNavegar();
        handleSweetConfirmarViaje()
      }

      }
         >Confirmar viaje</button>
} 
     
      </Box>
        <GoogleMap
          center={coordinates}
          zoom={15}
          mapContainerStyle={{ width: '70%', height: '100%' }}
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
      </Box>
      
    </Flex>
  )
}

export default Mapa;