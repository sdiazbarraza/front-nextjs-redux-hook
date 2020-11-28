import {QUERY_COTIZACION_STARTED,QUERY_COTIZACION_FAILURE,QUERY_COTIZACION_SUCCESS } from '../types'

const initialState = {
    cotizaciones:[],
    loading:false,
    error:null
}

export default function cotizacionReducer(state = initialState, action){

    switch (action.type) {
        case QUERY_COTIZACION_STARTED:
          return {
            ...state,
            loading: true
          };
        case QUERY_COTIZACION_SUCCESS:
          return {
            ...state,
            loading: false,
            error: null,
            cotizaciones: [...state.cotizaciones, action.payload]
          };
        case QUERY_COTIZACION_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error
          };
        default:
          return state;
      }

}