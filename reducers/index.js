import { combineReducers } from 'redux';  
import counterReducer from './counter';  
import destinoReducer from './destinoReducer';   
  
export default combineReducers({  
    counterReducer,
    destinoList: destinoReducer
});