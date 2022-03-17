import axios from "axios";
import {PEDIR_CONDUCTORA} from "./index"


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
