import {
    CREAR_REVIEW,
    OBTENER_REVIEW,
    BORRAR_REVIEW,
} from '../actions/reviews.js';

const initialState = {
    crearReview :{},
    obtenerReview:[],
    borrarReview:{}
}

export default function usersReducer(state = initialState, action){
    switch (action.type) {
        case CREAR_REVIEW:
            return {
                ...state,
                crearReview: action.payload
            }

        case OBTENER_REVIEW:
            return {
                ...state,
                obtenerReview: action.payload
            }
        case BORRAR_REVIEW:
            return {
                ...state,
                ...state,
                obtenerReview: state.obtenerReview.filter((e) => e.idReviews !== action.payload.idReviews)
            }
    
        default:
            return state
    }
};

   