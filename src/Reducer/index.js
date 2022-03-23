import { combineReducers } from "redux";
import pedirConductoraReducer  from "./pedirConductora";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";
import adminReducer from "./adminReducer";





const rootReducer= combineReducers({

     pedirConductoraReducer,
     recorridoReducer,
    LoginRegisReducer,
    adminReducer
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

