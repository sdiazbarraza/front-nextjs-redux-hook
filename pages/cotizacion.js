import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { inputField, SelectField, SwitchField } from "../utils/inputs";
import { Button, AutoComplete, Input } from "antd";
import { queryCotizacion } from "../actions/cotizacionAction";
import { getDestinos } from "../actions/destinoAction";
import { getKeyByValue } from "../utils";
import 'antd/dist/antd.css';
const Cotizacion = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control, errors, reset } = useForm();
  const cotizacionList = useSelector(state => state.cotizacionList)
  const { loadingCotizacion, errorCotizacion, cotizaciones } = cotizacionList;
  const destinoList = useSelector(state => state.destinoList)
  const { loadingDestino, errorDestino, destinos } = destinoList;
  const [optionsComuna, setOptionsComuna] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [origenComuna, setOrigenComuna] = useState([]);
  const [destinoComuna, setDestinoComuna] = useState([]);
  const type = ["Student", "Developer", "other"];

  const onSubmitData = (params) => {
    params.origin_id = origenComuna;
    params.destiny_id = destinoComuna;
    params.type_of_destiny = "domicilio";
    params.algorithm = 1;
    params.algorithm_days = 1;
    console.log(params);
    dispatch(queryCotizacion(params));
  };
  const onSearch = val => {
    let filtered = dataSource.filter(
      obj =>
        obj.key !== 0 &&
        obj.value
          .toString()
          .toLowerCase()
          .includes(val)
    );
    setOptionsComuna(filtered);
  };
  const onSelectOrigen = (val, option) => {
    setOrigenComuna(option.key);
  };
  const onSelectDestino = (val, option) => {
    setDestinoComuna(option.key);
  };

  useEffect(() => {
    dispatch(getDestinos())
  }, [dispatch])
  useEffect(() => {
    if (!loadingDestino) {
      let _datasource = [];
      destinos.map(destino =>
        _datasource.push({
          key: destino.id,
          value: destino.name,
        })
      );
      setDataSource(_datasource);
    }
  }, [loadingDestino])
  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <div className='input-group'>
        <label className='label'>Largo</label>
        <Controller
          as={inputField("Largo")}
          name='length'
          control={control}
          defaultValue=''
          rules={{ required: true }}
        />
        {errors.length && (
          <span className='error'>This field is required</span>
        )}
      </div>
      <div className='input-group'>
        <label className='label'>Alto</label>
        <Controller
          as={inputField("Alto")}
          name='height'
          control={control}
          defaultValue=''
          rules={{ required: true }}
        />
        {errors.height && (
          <span className='error'>This field is required</span>
        )}
      </div>
      <div className='input-group'>
        <label className='label'>Ancho</label>
        <Controller
          as={inputField("Ancho")}
          name='width'
          control={control}
          defaultValue=''
          rules={{ required: true }}
        />
        {errors.width && (
          <span className='error'>This field is required</span>
        )}
      </div>
      <div className='input-group'>
        <label className='label'>Peso</label>
        <Controller
          as={inputField("Peso")}
          name='weight'
          control={control}
          defaultValue=''
          rules={{ required: true }}
        />
        {errors.weight && (
          <span className='error'>This field is required</span>
        )}
      </div>
      <div className='input-group'>
        <label className='label'>Origen</label>
        <Controller
          as={<AutoComplete
            options={optionsComuna}
            onSelect={(val, option) => onSelectOrigen(val, option)}
            onSearch={onSearch}
            defaultValue=''
          >
            <Input.Search size="medium" placeholder="Busca comuna de origen" />
          </AutoComplete>}
          name='origin_id'
          control={control}
          rules={{
            required: true,
          }}
        />

      </div>
      <div className='input-group'>
        <label className='label'>Destino</label>
        <Controller
          as={
            <AutoComplete
              options={optionsComuna}
              onSelect={(val, option) => onSelectDestino(val, option)}
              onSearch={onSearch}
              defaultValue=''
            >
              <Input.Search size="medium" placeholder="Busca comuna de destino" />
            </AutoComplete>}
          name='destiny_id'
          control={control}
          rules={{
            required: true,
          }}
        />
      </div>
      <Button type='primary' htmlType='submit'>
        Register
       </Button>
    </form>
  )
};

export default Cotizacion;