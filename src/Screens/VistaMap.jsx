import React, { useEffect, useState } from 'react';
import Map from '../Components/GoogleMap/Map';
import { CssBaseline, Grid} from '@material-ui/core';


function VistaMap() {
    const [coordinates, setCoordinates] = useState({lat: 0, lng:0});
    const [bounds, setBounds] = useState(null);
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
         setCoordinates({ lat: latitude, lng: longitude}) 
      })
    }, [])
  return (
      <>
    <CssBaseline />
      
          <Grid item xs={12} md={8}>
          <Map 
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
          />
          </Grid>
    </>
  )
}

export default VistaMap