import React, { useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import Mapa from '../Components/GoogleMap/Map';
import Swal from "sweetalert2"
import { useDispatch, useSelector } from 'react-redux';
import { getuserDetails } from '../actions/Usuarios';

function ingresaDatos(){
Swal.fire("Ingresá origen y destino de tu viaje")
}


function VistaMap() {
    const dispatch = useDispatch()
    const usuariaLogueada = useSelector((state) => state.LoginRegisReducer.usuariaLogueada)
    const [coordinates, setCoordinates] = useState({lat: 0, lng:0});
    const [bounds, setBounds] = useState(null);

  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
         setCoordinates({ lat: latitude, lng: longitude}) 
      })
    }, [])

    useEffect(()=>{
      if(usuariaLogueada ){
        //dispatch(obtenerConductora(conductora.idConductora))
          dispatch(getuserDetails(usuariaLogueada[0].id))
      }
    },[])

  return (
      <>
      {ingresaDatos()}
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