import axios from 'axios';
import {BORRAR_REVIEW, 
        CREAR_REVIEW, 
        EDITAR_REVIEW,  
        OBTENER_REVIEWS, 
        OBTENER_REVIEWS_POR_CONDUCTORA } from '.';
import { body } from '../utilsPago';
import { SERVER } from './VariableGlobal';



export function postReviews(body) {
    return async function (dispatch) {
        try {
            const crearReview = await axios.post(`${SERVER}/reviews/create`, body);
                return dispatch({
                    type: CREAR_REVIEW,
                    payload: crearReview.data,
                });
        } catch (error) {
             console.log(error);
       }
    }
};
  
  

export function getReviews() {
    return async function (dispatch){
        try {
            const obtenerReview = await axios.get(`${SERVER}/reviews/`)
            //console.log('obtenerReview', obtenerReview)
            return dispatch ({
                type: OBTENER_REVIEWS,
                payload: obtenerReview.data
            })       
        } catch (error) {
            console.log('error', error)     
        }
    }
};

export function getReviewsDeConductora(idConductora) {
    return async function (dispatch) {
        try {
            const obtenerReviewsConductora = await axios.get(`${SERVER}/reviews/${idConductora}`)
            return dispatch({
				type: OBTENER_REVIEWS_POR_CONDUCTORA,
				payload: obtenerReviewsConductora.data,
			});
        } catch (error) {
            console.log('error', error)
        }
	}
};

  

export function putReviews(payload) {
    return async function (dispatch) {
        try {
            const editarReview = await axios.put(`${SERVER}/reviews/update`, payload);
            return dispatch({
                type: EDITAR_REVIEW,
                payload: editarReview.data,
            });
        } catch (error) {
            console.log(error);
      }
    }
};

export function deleteReview(id){
    return async function (dispatch){
        try {
            const eliminarReview = await axios.delete(`${SERVER}/reviews/delete`, id);
            return dispatch({
                type: BORRAR_REVIEW,
                payload: eliminarReview.data,
            });
        } catch (error) {
            
        }
    }
}



 

    
