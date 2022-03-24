import axios from "axios";
import {FILTRAR_CONDUCTORA_SEGUN_AUTO, PEDIR_CONDUCTORA,DETALLE_CONDUCTORA, GET_ALL_CONDUCTORAS,
    GET_CONDUNCTORAS_NAME,
    CONDUCTORAS_DETAIL,
    POST_CONDUCTORAS } from "./index"
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

export function postConductoras(payload){
    try{
        return async function (dispatch){
            const create = await axios.post('http://localhost:3001/conductora/register' + payload, tokenUser());
            return dispatch({
                type: POST_CONDUCTORAS,
                create,
            })
        }
    }catch(err){
        console.log(err)
    }  
}


export function getAllConductoras(){
    return async function(dispatch){
        try{
            const conductoras = await axios.get('http://localhost:3001/conductora')
            return dispatch({
                type: GET_ALL_CONDUCTORAS,
                payload: conductoras.data
            })

        }catch(err){
            console.log(err)
        }
    }
};