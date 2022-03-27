import React, { useEffect, useState } from 'react';
import { getuserDetailsPRUEBA } from '../../actions/Usuarios';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';
import Swal from "sweetalert2";

function ViajePasajera() {
   //Harcode, esto hay que reemplazarlo por el id de la conductora logueada cuando funcion login
   let idPasajera = "y3Aq5F0FRDh6zJboLi3d" //el id de su doc de la coleccion conductorar en firebase
   const dispatch = useDispatch()

   //let pasajera = useSelector((state) => state.LoginRegisReducer.detalleUsuario)

//    useEffect(() => {
//        dispatch(getuserDetailsPRUEBA(idPasajera))
//    }, [])


 return (
     <div>
           <div>Viaje Pasajera</div>
           <div>Viajes de .nombre</div>
   </div>
 )
}

export default ViajePasajera