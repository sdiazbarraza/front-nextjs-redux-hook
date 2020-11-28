import {QUERY_COTIZACION_STARTED,QUERY_COTIZACION_FAILURE,QUERY_COTIZACION_SUCCESS } from '../types'

const initialState = {
    cotizaciones:[],
    loadingCotizacion:false,
    errorCotizacion:null
}

export default function cotizacionReducer(state = initialState, action){

    switch (action.type) {
        case QUERY_COTIZACION_STARTED:
          return {
            ...state,
            loadingCotizacion: true
          };
        case QUERY_COTIZACION_SUCCESS:
          return {
            ...state,
            loadingCotizacion: false,
            errorCotizacion: null,
            cotizaciones: [...state.cotizaciones, action.payload]
          };
        case QUERY_COTIZACION_FAILURE:
          return {
            ...state,
            loadingCotizacion: false,
            errorCotizacion: action.payload.error
          };
        default:
          return state;
      }

}