import { configureStore } from "@reduxjs/toolkit";
import { readAllCitiesReducer } from "./reducers/citiesReducer.js";
import { userReducer } from "./reducers/userReducer.js";

const store = configureStore({
    reducer: {
        readAllCitiesReducer: readAllCitiesReducer, 
        userReducer: userReducer
    }
   
})

export default store