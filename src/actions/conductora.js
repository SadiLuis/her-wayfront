import {  FILTRAR_CONDUCTORA_SEGUN_AUTO, 
    PEDIR_CONDUCTORA,
    GET_ALL_CONDUCTORAS,
    POST_CONDUCTORAS, 
    GET_PERFILC,
    LOGIN_CONDUCTORA_SUCCESS,
    LOGIN_CONDUCTORA_ERROR,
    REGISTER_CONDUCTORA_SUCCESS,
    REGISTER_CONDUCTORA_ERROR } from "./index"

import tokenUser from '../Helpers/TokenUser'
import tokenConductora from "../Helpers/TokenConductora";
import axios from "axios";
import {SERVER} from './VariableGlobal'
      


export const pedirConductora = () => async (dispatch) => {
    try {

          const respuesta= await axios.get("http://localhost:3001/conductora")
        //const respuesta = await axios.get(`${SERVER}/conductora`)
        return dispatch({
            type: PEDIR_CONDUCTORA,
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No se encontraron conductoras")
    }
}


export function getPerfilConductora(id) {
    return async dispatch => {
        const request = await axios.get(`${SERVER}/conductora/${id}`)
        console.log(request)
        dispatch({ 
            type: GET_PERFILC, 
            payload: request.data 
        })
    }
}


export const filtrarConductora = (payload) => {
    return ({
        type: FILTRAR_CONDUCTORA_SEGUN_AUTO,
        payload
    });
};







export function getAllConductoras(){
    return async function(dispatch){
        try{
            const conductoras = await axios.get(`${SERVER}/conductora`)
            return dispatch({
                type: GET_ALL_CONDUCTORAS,
                payload: conductoras.data
            })
           
        }catch(err){
            console.log(err)
        }
    }
};

export function loginConductora({ email, contrasena }) {
    return async (dispatch) => {
        console.log('action')
        try {


            const body = { email, contrasena }

            const { data } = await axios.post(`http://localhost:3001/conductora/login`, body)


            const conductora = data.user
            dispatch({
                type: LOGIN_CONDUCTORA_SUCCESS,
                payload: conductora

            })
            console.log(data)
        } catch (error) {
            console.log(error)
            return dispatch({

                type: LOGIN_CONDUCTORA_ERROR,

            })
        }
    }    
    

}




// export function postConductora ({
//         nombre,
//         apellido,
//         usuario,
//         contrasena,
//         email,
//         pais,
//         provincia,
//         fotoPerfil,
//         fotoDni,
//         direccion,
//         telefono,
//         localidad,
//         automovil,
//         patente,
//         seguro,
//         habilitacion,
// }) {

//     return async function (dispatch) {
//         try {

//             const config = {
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             }
//             const body = {
//                 nombre,
//                 apellido,
//                 usuario,
//                 contrasena,
//                 email,
//                 pais,
//                 provincia,
//                 direccion,
//                 telefono,
//                 localidad,
//                 fotoDni,
//                 fotoPerfil,
//                 automovil,
//                 patente,
//                 seguro,
//                 habilitacion
//             }

//             const { data } = await axios.post('http://localhost:3001/conductora/register', body, config)

//             const conductora = data.user
//             dispatch({
//                 type: REGISTER_CONDUCTORA_SUCCESS,
//                 payload: conductora
//             })
//         } catch (error) {
//             console.log(error)
//             return dispatch({
//                 type: REGISTER_CONDUCTORA_ERROR,
//             })
//         }
//     }
// }

export function postConductora(payload){
    try{
        return async function (dispatch){
            const create = await axios.post('http://localhost:3001/conductora/register', payload);
            // return dispatch({
            //     type: POST_CONDUCTORAS,
            //     create,
            // })
            return create;
        }
    }catch(err){
        console.log(err)
    }  
}

export function conectaConductora(payload){
    let {id, estado} = payload
    
    return async function (dispatch){
        try{
            if(estado === "conectar" ) {
            const conectar = await axios.put(`${SERVER}/conductora/conectar/${id}`);
            return dispatch({
                type: "CONECTA_CONDUCTORA",
                payload: "conectar"
            })
        } else if (estado === "desconectar") {
            const desconectar = await axios.put(`${SERVER}/conductora/desconectar/${id}`);
            return dispatch({
                type: "DESCONECTA_CONDUCTORA",
                payload: "desconectar"
            })
        }
        }catch(error){
            console.log(error)
   
        }
    }  
}



