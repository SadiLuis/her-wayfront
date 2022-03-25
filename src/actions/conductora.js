import {  FILTRAR_CONDUCTORA_SEGUN_AUTO, 
    PEDIR_CONDUCTORA,
    DETALLE_CONDUCTORA, 
    GET_ALL_CONDUCTORAS,
    GET_CONDUNCTORAS_NAME,
    CONDUCTORAS_DETAIL,
    POST_CONDUCTORAS,
    LOGIN_COND_SUCCESS, 
    LOGIN_COND_ERROR,
    GET_PERFILC } from "./index"
import tokenUser from '../Helpers/TokenUser'
import tokenConductora from "../Helpers/TokenConductora";
import axios from "axios";
import Server from './VariableGlobal'
      


const SERVER = Server.SERVER;


export const pedirConductora = () => async (dispatch) => {
    try {
        const respuesta = await axios.get(`${SERVER}/conductora`)
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


export function postConductoras(payload){
    return async function (dispatch){
        try{
            const create = await axios.post(`${SERVER}conductora/register`, payload);
            return dispatch({
                 create
            //     type: POST_CONDUCTORAS,
            //     payload: create,
             })
        //return create;
        }catch(error){
            console.log(error)
   
        }
    }  
}


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
    return async (dispach) => {
        console.log('action')
        try {

            // const config = {
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // }

            const body = { email, contrasena }

            const { data } = await axios.post(`http://localhost:3001/conductora/login`, body)

            const conductoras = data.user
            dispach({
                type: LOGIN_COND_SUCCESS,
                payload: conductoras
            })
            console.log(data)
        } catch (error) {
            console.log(error)
            return dispach({
                type: LOGIN_COND_ERROR,
            })
        }
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
