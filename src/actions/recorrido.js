import { DESTINO, ORIGEN, TIEMPO_DE_VIAJE } from "./actionsTypes"

export const origen= (payload) => {
    return({
        type: ORIGEN,
        payload,
    })
}

export const destino =(payload) =>{
    return({
        type: DESTINO,
        payload,
    })
}

export const tiempoDeViaje= (payload) => {
    return({
        type: TIEMPO_DE_VIAJE,
        payload,

    })
}