import axios from "axios";
import {FILTRAR_CONDUCTORA_SEGUN_AUTO, PEDIR_CONDUCTORA,DETALLE_CONDUCTORA } from "./index"
import tokenUser from '../Helpers/TokenUser'
import tokenConductora from "../Helpers/TokenConductora";
      


 export const GET_PERFILC = 'GET_PERFILC'

const SERVER = 'http://localhost:3001';

export const pedirConductora = () => async dispatch => {
    try {
        const respuesta = await axios.get(`${SERVER}/conductora`)
        console.log(respuesta.data)
        return dispatch({
            type: PEDIR_CONDUCTORA,
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No se encontraron conductoras")
    }
}

// export  function pedirConductora () {
//     return async function(dispatch){
//     try {
//         const respuesta= await axios.get("http://localhost:3001/conductora")
        
//         return dispatch({
//             type:PEDIR_CONDUCTORA,
//             payload:respuesta.data
//         })
//     } catch (error) {
//         console.log("No se encontraron conductoras")
//     }
// }
// }


export function getPerfilConductora(id) {
    return async dispatch => {
        const request = await axios.get(`${SERVER}/conductora/${id}`, tokenUser())
        console.log(request)
        dispatch({ type: GET_PERFILC, payload: request.data })
    }
}


export const filtrarConductora = (payload) => {
    return ({
        type: FILTRAR_CONDUCTORA_SEGUN_AUTO,
        payload
    });
};