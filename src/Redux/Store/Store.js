import { createStore, combineReducers } from 'redux';
import { cartReducr } from '../Reducer/Reducer'


const mainReducr = combineReducers({
    cartReducrStore: cartReducr
});


export const Store = createStore(mainReducr);