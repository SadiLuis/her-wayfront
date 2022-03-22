import { DESTINO, ORIGEN, TIEMPO_DE_VIAJE } from "../actions/index";


const initialState ={

};

const recorridoReducer = (state=initialState, action) => {
    switch(action.type){
        case ORIGEN:
            return {
                ...state,
                origen: action.payload,
            }
        case DESTINO:
            return {
                ...state,
                destino: action.payload,
            }
        case TIEMPO_DE_VIAJE:
        return {
            ...state,
            tiempoDeViaje: action.payload,
        }
        default:
            return state;
    }
};

export default recorridoReducer;