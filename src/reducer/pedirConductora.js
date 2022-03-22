import { PEDIR_CONDUCTORA, DETALLE_CONDUCTORA } from "../actions";

const initialState={
    conductoras:[],
    todasLasConductoras:[],
    detalle:{}
}

export default function pedirConductoraReducer(state=initialState, action){
    const {type, payload} = action;
    
    switch(action.type){
        case PEDIR_CONDUCTORA:
            return {
                ...state,
                
                conductoras:payload
            }
            case DETALLE_CONDUCTORA:
                return{
                    ...state, 
                    detalle: action.payload
                }


            default:
                return {
                    ...state
                }

    }
}