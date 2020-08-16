import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from "redux";
import persistReducers from '../services/persistStore';
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(persistReducers(rootReducer),composeEnhancers(
    applyMiddleware(thunk)
));

const persistor = persistStore(store)

export { store, persistor };