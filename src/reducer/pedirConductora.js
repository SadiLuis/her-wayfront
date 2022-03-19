import { FILTRAR_CONDUCTORA_SEGUN_AUTO, PEDIR_CONDUCTORA } from "../actions/actionsTypes";

const initialState={
    todasLasConductoras:[],
    conductoras:[]
}

export default function pedirConductoraReducer(state=initialState, action){
    switch(action.type){
        case PEDIR_CONDUCTORA:
            return {
                ...state,
                todasLasConductoras: action.payload,
                conductoras: action.payload
            }
            
        case FILTRAR_CONDUCTORA_SEGUN_AUTO:
            const filtroConductoras = action.payload === 'Conductoras'
            ? state.todasLasConductoras
            : state.todasLasConductoras.filter((conductora) => conductora.tipo_auto === action.payload)
            return {
                ...state,
                todasLasConductoras: filtroConductoras

            }    
        default:
            return state;
    }
}