import { combineReducers } from 'redux';
import {citiesReducer} from './cities/citiesSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const citiesConfig = {key: 'cities', storage}

export default combineReducers({
    cities: persistReducer(citiesConfig, citiesReducer), 
    departments: null,
}) 

