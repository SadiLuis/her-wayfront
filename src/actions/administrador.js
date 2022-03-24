import { GET_ALL_CONDUCTORAS, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_ERROR, 
    OBTENER_TODAS_LAS_PASAJERAS,
    OBTENER_CONDUCTORA_POR_ID,
    OBTENER_PASAJERA_POR_ID,
    LIMPIAR_DETALLE,
    VERIFICAR_CONDUCTORA,
    DAR_BAJA_CONDUCTORA,
    DAR_ALTA} from "./index";

import axios from 'axios';

const SERVER = 'http://localhost:3001/';
export function login({ email, contrasena }) {
    return async (dispatch) => {
        
        try {

            // const config = {
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // }

            const body = { email, contrasena }
           
            const { data } = await axios.post(`${SERVER}admin/login`, body)

            const infoUser = data.user
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: infoUser
            })
            
        } catch (error) {
            console.log(error)
            return dispatch({
                type: LOGIN_USER_ERROR,
            })
        }
    }    
    
}

export const obtenerPasajeras = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${SERVER}admin/pasajeras`);
            console.log(res)
            return dispatch ({type: OBTENER_TODAS_LAS_PASAJERAS, payload: res.data});
        } catch (error) {
            console.log(error)
        }
    }
}

export const obtenerConductoras = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${SERVER}admin/`);
            
            return dispatch ({type: GET_ALL_CONDUCTORAS, payload: res.data});
        } catch (error) {
            console.log(error)
        }
    }
}



export const obtenerConductora = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${SERVER}admin/admin/${id}`);
            dispatch ({type: OBTENER_CONDUCTORA_POR_ID, payload: res.data});
        } catch (error) {
            console.log(error)
        }
    }
}

export const obtenerPasajera = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${SERVER}admin/${id}`);
            dispatch ({type: OBTENER_PASAJERA_POR_ID, payload: res.data});
        } catch (error) {
            console.log(error)
        }
    }
}

export const darBajaPasajeras = (id) => {

}

export const darBajaConductoras = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${SERVER}admin/darBaja/${id}`);
            dispatch ({type: DAR_BAJA_CONDUCTORA, payload:res.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const verificarConductora = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${SERVER}admin/verificar/${id}`);
            dispatch ({type: VERIFICAR_CONDUCTORA, payload: res.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const limpiarDetalle = () => {
    return {
        type: LIMPIAR_DETALLE
    }
}

export const darAltaAdmin = (admin) => {
    console.log(admin)
    return async (dispatch) => {
        
        try {
            const res = await axios.post((`${SERVER}admin/darAlta`, admin));
            dispatch({type: DAR_ALTA, payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }
}