import { FILTRAR_CONDUCTORA_SEGUN_AUTO, PEDIR_CONDUCTORA } from "../actions/actionsTypes";

const initialState={
    todasLasConductoras:[
        {
            name:'ana',
            tipo_auto:'Movil Gama Media'
        },
        {
            name:'lore',
            tipo_auto:'Movil Alta Gama'
        },
        {
            name:'maria',
            tipo_auto:'Utilitario'
        }
    ],
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
            const filtroConductoras = action.payload === 'Todas las Gamas'
            ? state.todasLasConductoras
            : state.todasLasConductoras.filter((conductora) => conductora.tipo_auto === action.payload)
            return {
                ...state,
                conductoras: filtroConductoras
            }   
             
        default:
            return state;
    }
}