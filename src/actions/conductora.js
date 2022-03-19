import axios from "axios";
import {FILTRAR_CONDUCTORA_SEGUN_AUTO, PEDIR_CONDUCTORA} from "./actionsTypes"

const SERVER = 'http://localhost:3001';

export const pedirConductora =()=> async (dispatch)=> {
    try {
        const respuesta= await axios.get(`${SERVER}/conductoras`) 
        console.log('respuesta', respuesta.data)
        return dispatch({
            type: PEDIR_CONDUCTORA,
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No se encontraron conductoras")
    }
}


export const filtrarConductora = (payload) => {
    return ({
        type: FILTRAR_CONDUCTORA_SEGUN_AUTO,
        payload
    });
};

