import {DESTINO, ORIGEN, TIEMPO_DE_VIAJE ,VIAJE_CREADO,VIAJE_RECHAZADO ,DATOS_MAPA, CANCELAR_VIAJE} from "./index"
import axios from 'axios'
import {SERVER} from './VariableGlobal'

// export const destino=(payload)=>{
//     return ({
//         type:DESTINO,
//         payload,
//     })
//}
export const origen= (payload) => {
    return({
        type: ORIGEN,
        payload,
    })
}

export const datosMapa =(payload) =>{
    return({
        type: DATOS_MAPA,
        payload,
    })
}

export const tiempoDeViaje= (payload) => {
    return({
        type: TIEMPO_DE_VIAJE,
        payload,

    })
}

export function crearViaje({
    direcOrigen,
   direcDestino,
   coordDestino,
   coordOrigen,
   descripDestino,
   descripOrigen,
   estadoViaje,
   idChat,
   idConductora,
   nombreConductora,
   idPasajera,
   nombrePasajera,
   precio
   }) {
   
       return async function (dispatch) {
           try {
             const body = {
               direcOrigen,
               direcDestino,
               coordDestino,
               coordOrigen,
               descripDestino,
               descripOrigen,
               estadoViaje,
               idChat,
               idConductora,
               nombreConductora,
               idPasajera,
               nombrePasajera,
               precio
               }
   
               const { data } = await axios.post(`${SERVER}/viajes/crear`, body)
               dispatch({
                   type: VIAJE_CREADO,
                   payload: data
               })
        }catch(error){
           dispatch({
               type: VIAJE_RECHAZADO,
               payload: error
           })
        }
   } 
}  

export const cancelarViaje = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`${SERVER}/viajes/cancelar/${id}`)
            dispatch({
                type: CANCELAR_VIAJE,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}