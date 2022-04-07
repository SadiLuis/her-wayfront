import {FILTRAR_CONDUCTORA_SEGUN_AUTO, 
        PEDIR_CONDUCTORA,
        GET_PERFILC,
        DETALLE_CONDUCTORA,
    CONDUCTORAS_CONECTADAS, FILTRAR_POR_PREFERENCIAS_MASCOTAS } from "./index"
import tokenConductora from "../Helpers/TokenConductora";
import axios from "axios";
import {SERVER} from './VariableGlobal'


export const pedirConductora = () => async (dispatch) => {
    try {
         // const respuesta= await axios.get("http://localhost:3001/conductora")
        const respuesta = await axios.get(`${SERVER}/conductora`)
        return dispatch({
            type: PEDIR_CONDUCTORA,
            payload: respuesta.data
        })
    } catch (error) {
        console.log("No se encontraron conductoras")
    }
}


export function getPerfilConductora(id) {
    return async function (dispatch) {
    try{
            //const request = await axios.get(`http://localhost:3001/conductora/${id}`);
            const request = await axios.get(`${SERVER}/conductora/${id}`, tokenConductora())
            console.log(request.data)
            dispatch({ 
                type: GET_PERFILC, 
                payload: request.data,
            })
    }catch(err){
        console.log(err)
    }
}
}

export const obtenerConductora = (idConductora) => {
    return async (dispatch) => {
        try {
                const res = await axios.get(`${SERVER}/idLoginCond/${idConductora}`);
                return dispatch({
                    type: DETALLE_CONDUCTORA,
                    payload: res.data
                }) 
        } catch (error) {
            console.log(error)
        }
    }
}



export const filtrarConductora = (payload) => {
    return ({
        type: FILTRAR_CONDUCTORA_SEGUN_AUTO,
        payload
    });
};



//export function conectaConductora(payload){



export function cambiaEstadoConductora(payload){

    let {id, estado} = payload
    
    return async function (dispatch){
        try{
            if(estado === "conectar" ) {
            const conectar = await axios.put(`${SERVER}/conductora/conectar/${id}`);
            return dispatch({
                type: "CONECTA_CONDUCTORA",
                payload: "conectar"
            })
        } else if (estado === "desconectar") {
            const desconectar = await axios.put(`${SERVER}/conductora/desconectar/${id}`);
            return dispatch({
                type: "DESCONECTA_CONDUCTORA",
                payload: "desconectar"
            })
        }
        }catch(error){
            console.log(error)
   
        }
    }  
}

//////
export const conductorasConectadas = () => async (dispatch) => {
    try {
        
         // const respuesta= await axios.get("http://localhost:3001/conductora")
        let conectadas = await axios.get(`${SERVER}/conductora`)
         let conductorasfiltradas=  conectadas.data.filter(elem=>elem.conectada==true)
        console.log(conductorasfiltradas)
        return dispatch({
            type: CONDUCTORAS_CONECTADAS,
            payload: conductorasfiltradas
        })
        
    } catch (error) {
        console.log("No se encontraron conductoras conectadas")
    }
    
   
}
//////////////

export const filtrarPorMascotas = (payload) => async (dispatch) => {
    let aux= true
    if(payload=="true"){
        aux= true
    } else if(payload=="false"){
         aux= false
    }
    
    try {
    // const respuesta= await axios.get("http://localhost:3001/conductora")
         let conectadas = await axios.get(`${SERVER}/conductora`)
         let conductorasfiltradas=  conectadas.data.filter(elem=>elem.conectada==true)
         let filtroMascotas=  conductorasfiltradas.filter(elem=>elem.aceptaMascotas==aux )
        console.log(filtroMascotas)
        return dispatch({
            type: FILTRAR_POR_PREFERENCIAS_MASCOTAS,
            payload: filtroMascotas
        })
        
    } catch (error) {
        console.log("No se encontraron conductoras con esos criterios")
    }
    
   
}

export const filtrarPorCochecitos = (payload) => async (dispatch) => {
    let aux= true
    if(payload=="true"){
        aux= true
    } else if(payload=="false"){
         aux= false
    }
    try {
        
        
         // const respuesta= await axios.get("http://localhost:3001/conductora")
         let conectadas = await axios.get(`${SERVER}/conductora`)
         let conductorasfiltradas=  conectadas.data.filter(elem=>elem.conectada==true)
         let filtroCochecitos=  conductorasfiltradas.filter(elem=>elem.aceptaCochecito==aux )
        console.log(filtroCochecitos)
        return dispatch({
            type: "FILTRAR_POR_PREFERENCIAS_COCHECITOS",
            payload: filtroCochecitos
        })
        
    } catch (error) {
        console.log("No se encontraron conductoras con esos criterios")
    }
    
   
}






