import {GET_DESTINOS,DESTINOS_ERROR } from '../types'

const initialState = {
    destinos:[],
    loadingDestino:true,
    errorDestino:null
}

export default function destinoReducer(state = initialState, action){

    switch(action.type){

        case GET_DESTINOS:
        return {
            ...state,
            destinos:action.payload,
            loadingDestino:false

        }
        case DESTINOS_ERROR:
            return{
                loadingDestino: false, 
                errorDestino: action.payload 
            }
        default: return state
    }

}