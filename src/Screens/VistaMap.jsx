import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2"
import { useDispatch, useSelector } from 'react-redux';
import { getuserDetails } from '../actions/Usuarios';
import { useNavigate } from 'react-router-dom';
import Mapa from '../Components/GoogleMap/Map';

function ingresaDatos(){
Swal.fire("Ingresá origen y destino de tu viaje")
}


function VistaMap() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
          dispatch(getuserDetails(usuariaLogueada[0]?.id))
      }
    },[])

  return (
      <>
            
      {ingresaDatos()}
   <div >
      <div className='col-md-12'>
            <Mapa 
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              
           />
          </div>
      </div>
  
    </>
  )
}

export default VistaMap;