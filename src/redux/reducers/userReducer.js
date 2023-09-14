import { createReducer } from "@reduxjs/toolkit";
import { authenticate, login, logoutAction } from "../actions/userAction.js";


const initialState = {
    user: {},
    token: null,
    status: 'offline'

}

export const userReducer = createReducer(initialState, (builder)=>{
    builder   
    .addCase(login, (state, action)=>{
        const newState = {...state, ...action.payload}
        return newState
    })
    .addCase(logoutAction, (state, action)=>{
        const newState = {...state, ...action.payload}
        return newState
    })
    // .addCase(signUpAction, (state, action)=>{
    //     console.log(action.payload);
    //     const newState = {...state, ...action.payload}
    //     return newState
    // })
    .addCase(authenticate.fulfilled, (state, action)=>{
        const newState = {...state}
        return newState
    })
})
