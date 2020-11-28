import { combineReducers } from 'redux';  
import counterReducer from './counter';  
import destinoReducer from './destinoReducer';   
import cotizacionReducer from './cotizacionReducer';  
  
export default combineReducers({  
    counterReducer,
    destinoList: destinoReducer,
    cotizacionList: cotizacionReducer,
});