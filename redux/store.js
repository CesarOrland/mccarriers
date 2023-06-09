import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Login from "./reducer/Login"

const rootReducer = combineReducers({login: Login});

export const store = createStore(rootReducer, applyMiddleware(thunk));