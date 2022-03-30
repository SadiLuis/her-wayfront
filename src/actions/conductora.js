import {  FILTRAR_CONDUCTORA_SEGUN_AUTO, 
    PEDIR_CONDUCTORA,
    GET_ALL_CONDUCTORAS, 
    GET_PERFILC,
     } from "./index"

import tokenConductora from "../Helpers/TokenConductora";
import axios from "axios";
import {SERVER} from './VariableGlobal'



export const pedirConductora = () => async (dispatch) => {
    try {

          const respuesta= await axios.get(`${SERVER}/conductora`)
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
    return async function (dispatch) {
    try{
            //const request = await axios.get(`http://localhost:3001/conductora/${id}`);
            const request = await axios.get(`${SERVER}/conductora/${id}`, tokenConductora())
            console.log(request)
            return dispatch({ 
                type: GET_PERFILC, 
                payload: request.data
            })
        
    }catch(err){
        console.log(err)
    }
}}


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
                payload: conductoras
            })
           
        }catch(err){
            console.log(err)
        }
    }
};

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



