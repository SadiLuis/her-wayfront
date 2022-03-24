import { combineReducers } from "redux";
import pedirConductoraReducer  from "./pedirConductora";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";
import perfilConductoraReducer from "./PerfilConduc"





const rootReducer= combineReducers({
     pedirConductoraReducer,
     recorridoReducer,
     LoginRegisReducer,
     perfilConductoraReducer
})

// function rootReducer(state = initialState, action) {
//     switch (action.type) {
//         case GET_PERFILC:
//             return {
//                 ...state,
//                 perfilConductora: action.payload
//             }
//         default:
//             break;
//     }
// }




export default rootReducer;

