// import {INFO_PASAJERA_FAIL, INFO_PASAJERA_REQUEST, INFO_PASAJERA_SUCCESS } from "./index";
// import axios from 'axios';
// import tokenUser from "../Helpers/TokenUser";

// export const perfilPasajera = (pasajeraId) => async (dispatch) =>{
//         dispatch({
//             type: INFO_PASAJERA_REQUEST,  
//         })
//         try {
//             const {pasajera} = await axios.get(`ruta pasajera ${pasajeraId}`,tokenUser())
//             return dispatch({
//                 type: INFO_PASAJERA_SUCCESS,
//                 payload: pasajera
//             })
//         } catch (error) {
//             dispatch({
//                 type: INFO_PASAJERA_FAIL,
//                 payload: error.response && error.response.data.messsge 
//                 ? error.response.data.messsge
//                 : error.messsge
//             })       
//         }
//     }


// export const modificarPerfilPasajera = (pasajeraId) => async (dispatch) => {

// }