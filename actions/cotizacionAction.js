import { QUERY_COTIZACION_STARTED, QUERY_COTIZACION_SUCCESS, QUERY_COTIZACION_FAILURE } from '../types'
import axios from 'axios'

export const queryCotizacion = (dataPost) => async dispatch => {
    dispatch({
        type: QUERY_COTIZACION_STARTED
    })
    try {
        //let dataPost = { length: 10, width: 10, height: 10, weight: 1, origin_id: 308, destiny_id: 308, type_of_destiny: "domicilio", algorithm: 1, algorithm_days: 2 } ;

        const res = await axios.post("https://api.shipit.cl/v/rates"
            , { parcel: dataPost },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/vnd.shipit.v4",
                    "X-Shipit-Email": "prueba_front@shipit.cl",
                    "X-Shipit-Access-Token": "MWhEAdkHKYdscen_4cxR"
                }
            }

        )
        dispatch({
            type: QUERY_COTIZACION_SUCCESS,
            payload: res.data
        })
    }
    catch (error) {
        dispatch({
            type: QUERY_COTIZACION_FAILURE,
            payload: error,
        })
    }

}