import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';

const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;