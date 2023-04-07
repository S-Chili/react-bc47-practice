import { combineReducers } from 'redux';
import {citiesReducer} from './cities/citiesSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import {departmentsReducer} from "./departments/departmentsSlice"



const citiesConfig = {key: 'cities', storage}
const departmentsConfig = {key: 'departments', storage}

export default combineReducers({
    cities: persistReducer(citiesConfig, citiesReducer), 
    departments: persistReducer(departmentsConfig, departmentsReducer),
}) 




