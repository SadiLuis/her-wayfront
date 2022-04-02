import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';
import VistaMapConductora from '../Screens/VistaMapConductora';
import {getPerfilConductora, cambiaEstadoConductora} from "../actions/conductora"
import { useDispatch, useSelector } from 'react-redux';
import {Loader} from '../Components/Loader/Loader';
import Swal from "sweetalert2";
import NavbarConductora from '../Components/NavbarConductora/NavbarConductora'
import { useNavigate } from 'react-router-dom';


const HomeConductora = () => {
  
    //Harcode, esto hay que reemplazarlo por el id de la conductora logueada cuando funcion login
    //const idConductora = "OOSg1YJ93xwIXqmviPg5" //el id de su doc de la coleccion conductorar en firebase
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let conductora = useSelector((state) => state.perfilConductoraReducer.perfilConductora)
    const conductoraLogueada = useSelector((state) => state.registroConductoraReducer.conducLogueada)
    console.log('conductoraLogueada', conductoraLogueada)
    let aux = useSelector((state) => state.perfilConductoraReducer.aux)

   const [coordinate, setCoordinates]=useState({lat: 0, lng:0});

    useEffect(() => {
      dispatch(getPerfilConductora(conductoraLogueada[0].id))
    }, [])
    
    console.log("se dispara el useEffect de getPerfilConductora",conductora)
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
         setCoordinates({ lat: latitude, lng: longitude}) 
      })
    }, [] )

    function handleConnect(e){  
        e.preventDefault()
        let payload = {
            id: conductoraLogueada[0].id,
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
            id: conductoraLogueada[0].id,
            estado: "desconectar"
        }
        dispatch(cambiaEstadoConductora(payload))
        Swal.fire({
            title:"Te has desconectado correctamente!",
            icon: 'success',
          })

    }
    return (
      <>
      {conductoraLogueada[0].nombre ?(
        < >
        <NavbarConductora idConductora={conductoraLogueada[0].id} /> 
        <br />
        <br />
        <br />
        <h1>Bienvenida Conductora {conductoraLogueada[0].nombre} </h1>
        
      {conductoraLogueada[0].conectada === false? <button className="btn btn-primary" type="button" onClick={(e)=> handleConnect(e)}>CONECTARME</button> :
      <button className="btn btn-primary" type="button" onClick={(e)=> handleDisconnect(e)}>DESCONECTARME</button>}
        <VistaMapConductora/>
      </>
      ):( <Loader />)
      
    }
      </>
    )
}

export default HomeConductora
