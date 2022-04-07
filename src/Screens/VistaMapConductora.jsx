import React, { useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import MapaConductora from '../Components/GoogleMap/MapaConductora';
import Swal from "sweetalert2"


function VistaMapConductora() {
    const [coordinates, setCoordinates] = useState({lat: 0, lng:0});
    const [bounds, setBounds] = useState(null);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
         setCoordinates({ lat: latitude, lng: longitude}) 
      })
    }, [])
    
  return (
      
      
      <div className='col-md-12'>
          
            <MapaConductora
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
           />
          
      </div>
    
    
  )
}
export default VistaMapConductora
