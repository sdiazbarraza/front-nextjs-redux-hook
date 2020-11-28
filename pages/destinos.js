import React, {useEffect, useState} from 'react';  
import {useSelector, useDispatch} from 'react-redux';  
import {counterAction, increaseCount, decreaseCount} from "../actions/counter";  
import {getDestinos} from "../actions/destinoAction"; 
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
const Destinos = () => {  
  
    const dispatch = useDispatch()
    const destinoList = useSelector(state => state.destinoList)
    const {loading, error, destinos} = destinoList
    const [dataSource,setDataSource] =useState([]);
    const columns = [
        {
          title: 'Comuna',
          dataIndex: 'comuna',
          key: 'comuna',
          render: text => <p>{text}</p>,
        },
        {
          title: 'Courriers',
          dataIndex: 'courriers',
          key: 'courriers',
          render: courriers => (
            <>
              {
             courriers.length>0?     
              courriers.map(tag => {
                let color = 'geekblue';
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              }):
              <p>No hay</p>
              
              }
            </>
          ),
        },
      ];
    useEffect(() => {
        dispatch(getDestinos())
       }, [dispatch])
    useEffect(()=>{
        if(!loading){
            let _datasource = [];
            let _courriers = [];
            destinos.map(destino => 
                    _datasource.push({
                    key:destino.id,
                    comuna:destino.name,
                    courriers:getKeyByValue(destino.couriers_availables,destino.name)})
            );
            setDataSource(_datasource);
        }
    },[loading])  
      function getKeyByValue(object, value) {   return Object.keys(object).filter(key => object[key] === value); }
return (  
    <>
    <h3>Destinos disponibles</h3>
    {loading ? "Loading..." : error ? error.message : 
        <Table dataSource={dataSource} columns={columns} />
        }
    </>
	)  
};  
  
export default Destinos;