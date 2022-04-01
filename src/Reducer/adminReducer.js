import {
    GET_ALL_CONDUCTORAS,
    OBTENER_TODAS_LAS_PASAJERAS,
    OBTENER_CONDUCTORA_POR_ID,
    OBTENER_PASAJERA_POR_ID,
    LIMPIAR_DETALLE,
} from "../actions";

const initialState = {
    conductoras: [],
    pasajeras: [],
    //todasLasConductoras:[],
    detalle: {}
}

export default function adminReducer(state = initialState, { type, payload }) {

    switch (type) {
        case GET_ALL_CONDUCTORAS:
            return {
                ...state,
                conductoras: payload
            }

        case OBTENER_TODAS_LAS_PASAJERAS:
            return {
                ...state,
                pasajeras: payload
            }
        case OBTENER_CONDUCTORA_POR_ID:
            return {
                ...state,
                detalle: payload
            }

        case OBTENER_PASAJERA_POR_ID:
            return {
                ...state,
                detalle: payload
            }

        case LIMPIAR_DETALLE:
            return {
                ...state,
                detalle: {}
            }

        default:
            return {
                ...state
            }

    }
}