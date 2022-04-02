import { MIS_VIAJES_PASAJERA, VIAJES_POR_PASAJERA } from "./index";
import axios from "axios";
import {SERVER} from './VariableGlobal'



export const misViajesPasajera = () => async (dispatch) => {
    try {
         // const respuesta= await axios.get("http://localhost:3001/conductora")
        const respuesta = await axios.get(`${SERVER}/viajes`)
        return dispatch({
            type: MIS_VIAJES_PASAJERA,
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No hay viajes registrados")
    }
}

export const viajesPorPasajera=(idPasajera) =>async dispatch=>{
    try{
        const {data} = await axios.get(`${SERVER}/usuario/${idPasajera}`);
        return dispatch({
            type: VIAJES_POR_PASAJERA,
            payload: data
        })
    } catch(error){
        console.log(error)
    }
}

