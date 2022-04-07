import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducer/index.js';
import thunk from 'redux-thunk';
import {loadState, saveState} from './localStorage.js'

const initialState = loadState() 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe( function () {
  saveState(store.getState())
})

export default store;
