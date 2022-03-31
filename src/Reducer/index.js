import { combineReducers } from "redux";
import recorridoReducer from "./recorridoReducer";
import LoginRegisReducer from "./LoginRegistro";
import adminReducer from "./adminReducer";
import perfilConductoraReducer from "./PerfilConduc";
import registroConductoraReducer from "./registroConductoraReducer"
<<<<<<< HEAD
import pedirConductoraReducer from "./pedirConductora";
=======
>>>>>>> rating-reviews-conductoras
import viajesReducer from "./viajes";
import reviewsReducer from "./reviewsReducer";





const rootReducer= combineReducers({
    recorridoReducer,
    LoginRegisReducer,
    adminReducer,
    perfilConductoraReducer,
    registroConductoraReducer,
    viajesReducer,
<<<<<<< HEAD
    pedirConductoraReducer
=======
    reviewsReducer
>>>>>>> rating-reviews-conductoras
})


export default rootReducer;

