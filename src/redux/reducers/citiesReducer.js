import { createReducer } from "@reduxjs/toolkit";
import { readAllCities, filterCities } from "../actions/citiesAction.js";


const initialState = {
    cities:[],
    filteredCities:[],
    city: {},
    itineraries: []
}

export const readAllCitiesReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(readAllCities.fulfilled, (store, action)=>{
            return {
                ...store, 
                cities: action.payload, 
                filteredCities: action.payload
            }

        })
        .addCase(filterCities, (store, action)=>{
            const search = action.payload.toLowerCase().trim()
            const newFilter = store.cities.filter(city=>city.city.toLowerCase().trim().startsWith(search))
            return {
                ...store, 
                 filteredCities: newFilter
            }
            
        })

})