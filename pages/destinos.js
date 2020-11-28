import React, {useEffect} from 'react';  
import {useSelector, useDispatch} from 'react-redux';  
import {counterAction, increaseCount, decreaseCount} from "../actions/counter";  
import {getDestinos} from "../actions/destinoAction"; 
  
const Destinos = () => {  
  
    const dispatch = useDispatch()
    const destinoList = useSelector(state => state.destinoList)
    const {loading, error, destinos} = destinoList 
    useEffect(() => {
        dispatch(getDestinos()) 
      }, [dispatch])
return (  
    <>
    {loading ? "Loading..." : error ? error.message : destinos.map(u => <h3>{u.name}</h3>)}
    </>
	)  
};  
  
export default Destinos;