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


export function cambiaEstadoViaje(payload){
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
        } else if (decision === "enPuntoPartida") {
            const llegue =  await axios.put(`${SERVER}/viajes/puntopartida/${id}`);
            return dispatch({
                type: "PUNTO_PARTIDA",
                payload: "en punto partida"
            })
        }else if (decision === "enCurso") {
            const enCuso =  await axios.put(`${SERVER}/viajes/enCurso/${id}`);
            return dispatch({
                type: "INICIA_EL_RECORRIDO",
                payload: "INICIA_EL_RECORRIDO"
            })
        }else if( decision === "finalizado") {
            const final =  await axios.put(`${SERVER}/viajes/finalizado/${id}`);
            return dispatch({
                type: "FINALIZA_VIAJE",
                payload: "FINZALIZA VIAJE"
            })
        }
        }catch(error){
            console.log(error)
   
        }
    }  
}

export const getViaje = (idViaje) => async (dispatch) => {
    try {
        const respuesta = await axios.get(`${SERVER}/viajes/${idViaje}`)
        return dispatch({
            type: "VIAJE_POR_IDVIAJE",
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No se encontro viaje con ese id ")
    }
}

export const getViajes = () => async (dispatch) => {
    try {
        const respuesta = await axios.get(`${SERVER}/viajes`)
        return dispatch({
            type: "VIAJES",
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No se encontraron viajes ")
    }
}

export const getViajeRequeridoPasajera = (idPasajera) => async (dispatch) => {
    try {
        const respuesta = await axios.get(`${SERVER}/viajes/requeridoPasajera/${idPasajera}`)
        return dispatch({
            type: "VIAJE_REQUERIDO_PASAJERA",
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No se encontraron conductoras")
    }
}
