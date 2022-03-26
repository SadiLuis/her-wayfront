import axios from 'axios';
import { BORRAR_REVIEW, CREAR_REVIEW, OBTENER_REVIEW } from '.';

const SERVER = 'http://localhost:3001'


//post de puntuacion y comentario 
export const postReview = (body) => async(dispatch) => {
    try {
        const crearReview = await axios.post(`${SERVER}/reviews/create`, body)
        return dispatch ({
            type: CREAR_REVIEW,
          
        })     
    } catch (error) {
        console.log('error', error)     
    }
};


//obtengo todos mis comentarios por ID de producto
export const getReview= (idConductora) => async (dispatch) => {
    try {
        const obtenerReview = await axios.get(`${SERVER}/consductora/${idConductora}/reviews`)
        return dispatch ({
            type: OBTENER_REVIEW,
            payload: obtenerReview.data
        })
        
    } catch (error) {
        console.log('error', error) 
    }
};


export const deleteReview = (idConductora, idReview) => async (dispatch) =>{
    try {
        const borrarReview = await axios.delete(`${SERVER}/consductora/${idConductora}/review/${idReview}`)
        return dispatch ({
            type: BORRAR_REVIEW,
            payload: borrarReview
        })     
    } catch (error) {
        console.log('error', error)
    }
}


