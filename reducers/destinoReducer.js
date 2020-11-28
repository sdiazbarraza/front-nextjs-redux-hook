import {GET_DESTINOS,DESTINOS_ERROR } from '../types'

const initialState = {
    destinos:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_DESTINOS:
        return {
            ...state,
            destinos:action.payload,
            loading:false

        }
        case DESTINOS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}