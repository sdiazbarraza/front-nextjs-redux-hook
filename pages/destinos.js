import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDestinos } from "../actions/destinoAction";
import { getKeyByValue } from "../utils";
import { Table, Tag } from 'antd';
import 'antd/dist/antd.css';
const Destinos = () => {

  const dispatch = useDispatch()
  const destinoList = useSelector(state => state.destinoList)
  const { loadingDestino, errorDestino, destinos } = destinoList
  const [dataSource, setDataSource] = useState([]);
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
            courriers.length > 0 ?
              courriers.map(tag => {
                let color = 'geekblue';
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              }) :
              <p>No hay</p>

          }
        </>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getDestinos())
  }, [dispatch])
  useEffect(() => {
    if (!loadingDestino) {
      let _datasource = [];
      destinos.map(destino =>
        _datasource.push({
          key: destino.id,
          comuna: destino.name,
          courriers: getKeyByValue(destino.couriers_availables, destino.name)
        })
      );
      setDataSource(_datasource);
    }
  }, [loadingDestino])

  return (
    <>
      <h3>Destinos disponibles</h3>
      {loadingDestino ? "Loading..." : errorDestino ? errorDestino.message :
        <Table dataSource={dataSource} columns={columns} />
      }
    </>
  )
};

export default Destinos;