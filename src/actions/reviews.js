import axios from 'axios';
import { CREAR_REVIEW } from '.';

const SERVER = 'http://localhost:3001'

//creacion de puntuacion y comentario 
export const postReview = (idConductora, review) => async(dispatch) => {
    try {
        const crearReview = await axios.post(`${SERVER}/conductora/${idConductora}/reviews`, review)
        return dispatch ({
            type: CREAR_REVIEW,
            crearReview
        })     
    } catch (error) {
        console.log('error', error)     
    }
};


//obtengo todos mis comentarios por ID de producto
export function get_Review(idConductora){
    return dispatch => {
        axios.get(`${SERVER}/conductora/${idConductora}/reviews`)
        .then((result) => {
            //console.log('result', result)
            return dispatch({
                type: GET_REVIEWS,
                payload: result.data
            })
        }).catch((err) => {
            console.log('err', err);
        });
    }
}

export function delete_review(conductora, id){
    return dispatch => {
        axios.delete(`http://localhost:3001/product/${conductora}/review/${id}`)
        .then((result) => {
            //console.log('result :>> ', result.data);
            return dispatch({
                type: DELETE_REVIEW,
                payload: result.data
            })
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }
}

export function update_review(prod,id,values){
    return dispatch => {
        axios.put(`http://localhost:3001/product/${prod}/review/${id}`,values)
        .then((result) => {
            console.log('result :>> ', result.data);
            return dispatch({
                type:UPDATE_REVIEW,
                payload:result.data
            })
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }
}
