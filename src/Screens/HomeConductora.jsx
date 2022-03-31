import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import VistaMap from '../Screens/VistaMap';
import {getPerfilConductora, cambiaEstadoConductora} from "../actions/conductora"
import { useDispatch, useSelector } from 'react-redux';
import {Loader} from '../Components/Loader/Loader';
import Swal from "sweetalert2";
import NavbarConductora from '../Components/NavbarConductora/NavbarConductora'
import { useNavigate } from 'react-router-dom';


const HomeConductora = () => {
  
    //Harcode, esto hay que reemplazarlo por el id de la conductora logueada cuando funcion login
    const idConductora = "OOSg1YJ93xwIXqmviPg5" //el id de su doc de la coleccion conductorar en firebase
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    let aux = useSelector((state) => state.perfilConductoraReducer.aux)

   const [coordinate, setCoordinates]=useState({lat: 0, lng:0});

    useEffect(() => {
      console.log("se dispara el useEffect de getPerfilConductora")
        dispatch(getPerfilConductora(idConductora))
    }, [idConductora, aux])
    
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
         setCoordinates({ lat: latitude, lng: longitude}) 
      })
    }, [] )

    function handleConnect(e){  
        e.preventDefault()
        let payload = {
            id: idConductora,
            estado: "conectar"
        }
        dispatch(cambiaEstadoConductora(payload))
        
        setTimeout(function () {
            navigate("/viajeconductora");
          }, 3000);
        
          Swal.fire({
            title:"Te has conectado correctamente!",
            icon: 'success',
          })
        
    }

    function handleDisconnect(e){  
        e.preventDefault()
        let payload = {
            id: idConductora,
            estado: "desconectar"
        }
        dispatch(cambiaEstadoConductora(payload))
        Swal.fire({
            title:"Te has desconectado correctamente!",
            icon: 'success',
          })
        
    }

    
    if (conductora.nombre) {
        return (
            < >
            <NavbarConductora idConductora={idConductora} /> 
            <br />
            <br />
            <br />
            <h1>Bienvenida Conductora {conductora.nombre} </h1>
            
          {conductora.conectada === false? <button className="btn btn-primary" type="button" onClick={(e)=> handleConnect(e)}>CONECTARME</button> :
          <button className="btn btn-primary" type="button" onClick={(e)=> handleDisconnect(e)}>DESCONECTARME</button>}
            <VistaMap/>
          </>
        )
    }else {
        return (
            <Loader />
        )
    }
  
  
}

export default HomeConductora
