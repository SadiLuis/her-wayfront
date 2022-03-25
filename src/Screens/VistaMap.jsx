import React, { useEffect, useState } from 'react';
import Map from '../Components/GoogleMap/Map';
import { CssBaseline, Grid} from '@material-ui/core';
import OrigenDestino from '../Components/OrigenDestino/OrigenDestino';


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
      <div>
      <OrigenDestino/>
    </div>
   <div className='row conteiner p-4' >
      <div className='col-md-8'>


          <Grid item xs={12} md={8}>
          <Map 
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
          />
          </Grid>
    
   </div>
   </div>
    
    </>
  )
}

export default VistaMap