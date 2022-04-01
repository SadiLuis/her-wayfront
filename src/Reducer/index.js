import { combineReducers } from "redux";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";
import adminReducer from "./adminReducer";
import perfilConductoraReducer from "./PerfilConduc";
import registroConductoraReducer from "./registroConductoraReducer"
import pedirConductoraReducer from "./pedirConductora";
import viajesReducer from "./viajes";
import reviewsReducer from "./reviewsReducer";
import misViajesPasajeraReducer from "./misViajesPasajera";





const rootReducer= combineReducers({
    pedirConductoraReducer,
    recorridoReducer,
    LoginRegisReducer,
    adminReducer,
    perfilConductoraReducer,
    registroConductoraReducer,
    viajesReducer,
    misViajesPasajeraReducer,
})


export default rootReducer;

