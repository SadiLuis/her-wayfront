import { combineReducers } from "redux";
//import pedirConductoraReducer  from "./pedirConductora";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";
import adminReducer from "./adminReducer";
import perfilConductoraReducer from "./PerfilConduc"







const rootReducer= combineReducers({
    //pedirConductoraReducer,
    recorridoReducer,
    LoginRegisReducer,
    adminReducer,
    perfilConductoraReducer

})


export default rootReducer;

