import {
    CREAR_REVIEW,
    OBTENER_REVIEWS,
    BORRAR_REVIEW,
    OBTENER_REVIEWS_POR_CONDUCTORA
} from '../actions/index';

const initialState = {
    reviews:[],
    reviewsInfo: [],
    reviewsConductora: []
}

export default function reviewsReducer(state = initialState, action){
    switch (action.type) {
        
        case CREAR_REVIEW:
            return {
                ...state,
                reviews: action.payload,
                reviewsInfo: action.reviewsInfo
            }

        case OBTENER_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                
            }

        case BORRAR_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter((r) => r.idReviews !== action.payload.id)
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

   