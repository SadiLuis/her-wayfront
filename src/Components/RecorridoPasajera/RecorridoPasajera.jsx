import React from 'react';

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
  import { useRef, useState,useEffect } from 'react'
  import {useNavigate} from 'react-router-dom'
  import {useDispatch, useSelector} from 'react-redux'
import DetalleRecorrido from '../DetalleRecorrido/DetalleRecorrido';
import styles from './RecorridoPasajera.module.css'
import { datosMapa } from '../../actions/recorrido';

  

const RecorridoPasajera = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDo2MYthjrW4eDTScPNK8BYGBNa8DF0zBc',
        libraries: ['places'],
      })

    const [map, setMap] = useState((null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const viaje = useSelector(state=> state.recorridoReducer.datosMapa)
  const conductora = useSelector(state => state.pedirConductoraReducer.detalle)
  //console.log(viaje)
  const originRef = useRef()
 
  const [coordinates, setCoordinates] = useState({lat: 0, lng:0});
    const [bounds, setBounds] = useState(null);

    // const latitudOrigen = viaje?.coordOrigen.lat;
    // const longitudOrigen = viaje?.coordOrigen.lng;
    // console.log(viaje.coordDestino.lat)
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
         setCoordinates({ lat: latitude, lng: longitude}) 
      })
    }, [])
  const destiantionRef = useRef()

  
  if (!isLoaded) {
    return <SkeletonText />
  }
  return (
    <div className={styles.viaje__container}>
        <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      marginTop='0'
      h='70vh'
      w='100vw'
    >
        <Box position='relative' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={coordinates}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
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
    <DetalleRecorrido conductora={conductora}/>
    </div>
  )
}

export default RecorridoPasajera