import axios from "axios";
import {SERVER} from './VariableGlobal'
      


// const SERVER = Server.SERVER;


export const getViajeRequerido = (idConductora) => async (dispatch) => {
    try {
        const respuesta = await axios.get(`${SERVER}/viajes/requerido/${idConductora}`)
        return dispatch({
            type: "VIAJE_REQUERIDO",
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No se encontraron conductoras")
    }
}


export function aceptaRechazaViaje(payload){
    let {id, decision} = payload
    
    
    return async function (dispatch){
        try{
            if(decision === "aceptar" ) {
            const aceptar = await axios.put(`${SERVER}/viajes/acepta/${id}`);
            return dispatch({
                type: "ACEPTA_VIAJE",
                payload: "acepta viaje"
            })
        } else if (decision === "rechazar") {
            const rechazar = await axios.put(`${SERVER}/viajes/rechaza/${id}`);
            return dispatch({
                type: "RECHAZA_VIAJE",
                payload: "rechaza viaje"
            })
        }
        }catch(error){
            console.log(error)
   
        }
    }  

}