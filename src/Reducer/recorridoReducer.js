import { DATOS_MAPA, ORIGEN, TIEMPO_DE_VIAJE ,VIAJE_CREADO,VIAJE_RECHAZADO} from "../actions/index";


const initialState ={
    datosMapa:[],
    distancia:0,
    tiempoDeViaje:null,
    viaje:[]
};

const recorridoReducer = (state=initialState, action) => {
    switch(action.type){
        case ORIGEN:
            return {
                ...state,
                origen: action.payload,
            }
        case DATOS_MAPA:
        
            return {
                ...state,
                datosMapa: action.payload,
            }
        case TIEMPO_DE_VIAJE:
        return {
            ...state,
            tiempoDeViaje: action.payload,
        }
        case VIAJE_CREADO: return{
            ...state,
             viaje: action.payload,

        }
        case VIAJE_RECHAZADO: return{
            ...state,
            viaje: action.payload,
        }
        default:
            return state;
    }

};

export default recorridoReducer;