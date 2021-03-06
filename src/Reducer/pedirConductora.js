import { PEDIR_CONDUCTORA, DETALLE_CONDUCTORA, CONDUCTORAS_CONECTADAS, FILTRAR_POR_PREFERENCIAS_MASCOTAS } from "../actions";

const initialState={
    conductoras:[],
    todasLasConductoras:[],
    detalle:{},
    conductorasConectadas:[],
   
}

export default function pedirConductoraReducer(state=initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case PEDIR_CONDUCTORA:
            return {
                ...state,
                
                conductoras:payload,
                todasLasConductoras:payload
            }
            case DETALLE_CONDUCTORA:
                return{
                    ...state, 
                    detalle: payload
                }
                 case CONDUCTORAS_CONECTADAS:
                    //  const conectadas=state.todasLasConductoras.filter(elem=>elem.conectada==true)
                     return {
                         ...state,
                         conductorasConectadas:payload
                     };
                     case FILTRAR_POR_PREFERENCIAS_MASCOTAS:
                         return {
                             ...state,
                             conductorasConectadas:payload
                         }
                         case "FILTRAR_POR_PREFERENCIAS_COCHECITOS":
                         return {
                             ...state,
                             conductorasConectadas:payload
                         }


            default:
                return {
                    ...state
                }
            }

            }
