import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2"
import { useDispatch, useSelector } from 'react-redux';
import { getuserDetails } from '../actions/Usuarios';
import { useNavigate } from 'react-router-dom';
import Mapa from '../Components/GoogleMap/Map';
import OrigenDestino from '../Components/GoogleMap/Origen_Destino'

import Navbar from '../Components/Landing/Navbar';


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
    <div>
            <Navbar />
            <br />
            <br />
            <br />
            
            
            <div class='container d-flex align-items-center justify-content-center vh-100'>
                 <div class='row'> 
                        {/* Columna principal izquierda */}
                        <div class="col-12 col-xl-6 ">
                              <OrigenDestino />
                        </div>    

                         {/* Columna principal derecha */}
                        <div class="col-12 col-xl-6 ">
                                <Mapa 
                                    setCoordinates={setCoordinates}
                                    setBounds={setBounds}
                                    coordinates={coordinates}
                                    
                                />
                        </div>   

                 </div>

            </div>
      </div>
    )

  
  // return (
  //     <>
            
  //     {ingresaDatos()}
  //  <div >
  //     <div className='col-md-12'>
  //           <Mapa 
  //             setCoordinates={setCoordinates}
  //             setBounds={setBounds}
  //             coordinates={coordinates}
              
  //          />
  //         </div>
  //     </div>
  
  //   </>
  // )
}

export default VistaMap;