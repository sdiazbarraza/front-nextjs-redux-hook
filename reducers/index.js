import { combineReducers } from 'redux';  
import destinoReducer from './destinoReducer';   
import cotizacionReducer from './cotizacionReducer';  
  
export default combineReducers({  
    destinoList: destinoReducer,
    cotizacionList: cotizacionReducer,
});