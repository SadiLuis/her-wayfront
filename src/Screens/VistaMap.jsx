import React, { useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import Mapa from '../Components/GoogleMap/Map';
import { pedirConductora } from '../actions/conductora';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import styles from "./VistaMap.module.css"


function VistaMap() {
    const [coordinates, setCoordinates] = useState({lat: 0, lng:0});
    const [bounds, setBounds] = useState(null);
    const dispatch =useDispatch();
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
         setCoordinates({ lat: latitude, lng: longitude}) 
      })
    }, [])

    function handleClickPedirConductora(e){
      e.preventDefault();
      dispatch(pedirConductora)
    }
  return (
      <>
   <div className='row conteiner p-4' >
      <div className='col-md-8'>
          <Grid item xs={12} md={8}>
            <Mapa 
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

export default VistaMap;