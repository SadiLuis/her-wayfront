import {
    GET_ALL_CONDUCTORAS,
    OBTENER_TODAS_LAS_PASAJERAS,
    OBTENER_CONDUCTORA_POR_ID,
    OBTENER_PASAJERA_POR_ID,
    LIMPIAR_DETALLE,
    LOGIN_USER_SUCCESS,
    CERRAR_SESION,
} from "../actions";

const initialState = {
    conductoras: [],
    pasajeras: [],
    //todasLasConductoras:[],
    detalle: {},
    token: localStorage.getItem("token"),
    isAuth: null,
    userInfo: []
}

export default function adminReducer(state = initialState, { type, payload }) {

    switch (type) {
        case LOGIN_USER_SUCCESS:
            localStorage.setItem("token", payload.stsTokenManager.accessToken)

            return {
                ...state,
                isAuth: true,
                token: payload.stsTokenManager.accessToken,
                userInfo: payload
            }
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
        
        case CERRAR_SESION:
            return {
                ...state,
                isAuth: null
            }

        default:
            return {
                ...state
            }

    }
}