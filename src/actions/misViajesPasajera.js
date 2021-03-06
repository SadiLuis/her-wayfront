import { MIS_VIAJES_PASAJERA, VIAJES_POR_PASAJERA, VIAJES_POR_CONDUCTORA } from "./index";
import axios from "axios";
import {SERVER} from './VariableGlobal'



export const misViajesPasajera = () => async (dispatch) => {
    try {
         // const respuesta= await axios.get("http://localhost:3001/viajes")
        const respuesta = await axios.get(`${SERVER}/viajes`)
        return dispatch({
            type: MIS_VIAJES_PASAJERA,
            payload: respuesta.data
        })
    } catch (error) {
        return console.log("No hay viajes registrados")
    }
}

export const viajesPorPasajera=(idPasajera) =>async (dispatch)=>{
    try{
        const respuesta2 = await axios.get(`${SERVER}/viajes/${idPasajera}`);

       // const respuestaViajes= respuesta2.data.filter(elem=>elem.idPasajera)
        return dispatch({
            type: VIAJES_POR_PASAJERA,
            payload: respuesta2.data
        })
    } catch(error){
        return console.log("No se encontraron registros de viajes para esa pasajera")
    }
}

export const viajesPorConductora=(idConductora) =>async (dispatch)=>{
    try{
        const respuesta3 = await axios.get(`${SERVER}/viajes/${idConductora}`);

       // const respuestaViajes= respuesta2.data.filter(elem=>elem.idPasajera)
        return dispatch({
            type: VIAJES_POR_CONDUCTORA,
            payload: respuesta3.data
        })
    } catch(error){
        return console.log("No se encontraron registros de viajes para esa conductora")
    }
}

