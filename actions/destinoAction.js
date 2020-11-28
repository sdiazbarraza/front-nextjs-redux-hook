import {GET_DESTINOS, DESTINOS_ERROR} from '../types'
import axios from 'axios'

export const getDestinos = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://api.shipit.cl/v/communes`
        , {headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/vnd.shipit.v4",
            "X-Shipit-Email" : "prueba_front@shipit.cl",
            "X-Shipit-Access-Token": "MWhEAdkHKYdscen_4cxR"
          }
        }
        )
        dispatch( {
            type: GET_DESTINOS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: DESTINOS_ERROR,
            payload: error,
        })
    }

}