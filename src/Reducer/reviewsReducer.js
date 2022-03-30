import {
    CREAR_REVIEW,
    OBTENER_REVIEWS,
    BORRAR_REVIEW,
    OBTENER_REVIEWS_POR_CONDUCTORA
} from '../actions/reviews.js';

const initialState = {
    reviews:[],
    reviewsConductora: []
}

export default function usersReducer(state = initialState, action){
    switch (action.type) {
        case CREAR_REVIEW:
            return {
                ...state,
                reviews: action.payload
            }

        case OBTENER_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
        case BORRAR_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter((e) => e.idReviews !== action.payload.idReviews)
            }
        case OBTENER_REVIEWS_POR_CONDUCTORA:
            return {
                ...state,
                reviewsConductora: action.payload
            }
    
        default:
            return state
    }
};

   