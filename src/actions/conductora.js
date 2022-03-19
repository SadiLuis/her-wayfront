import axios from "axios";
import {FILTRAR_CONDUCTORA_SEGUN_AUTO, PEDIR_CONDUCTORA} from "./actionsTypes"


export const pedirConductora =()=> async dispatch=> {
    try {
        const respuesta= await axios('aca va la url')
        const data=await respuesta.json();
        return dispatch({
            type:PEDIR_CONDUCTORA,
            payload:data
        })
    } catch (error) {
        return console.log("No se encontraron conductoras")
    }
}

export const filtrarConductora = (payload) => {
    return ({
        type: FILTRAR_CONDUCTORA_SEGUN_AUTO,
        payload
    });
};

