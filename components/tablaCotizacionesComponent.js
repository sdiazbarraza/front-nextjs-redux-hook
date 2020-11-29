import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Table, Tag } from 'antd';
const TablaCotizaciones = () => {
    const cotizacionList = useSelector(state => state.cotizacionList)
    const { loadingCotizacion, errorCotizacion, cotizaciones } = cotizacionList;
    const [dataSourceCotizaciones, setDataSourceCotizaciones] = useState([]);
    const [dataSourceCotizacionEconomica, setDataSourceCotizacionEconomica] = useState([]);
    const columns = [
        {
            title: 'Courrier',
            dataIndex: 'original_courier',
            key: 'original_courier',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Peso',
            dataIndex: 'volumetric_weight',
            key: 'volumetric_weight',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Plazo estimado',
            dataIndex: 'days',
            key: 'days',
            render: text => <p>{text} días</p>,
        },
        {
            title: 'Precio',
            dataIndex: 'price',
            key: 'price',
            render: text => <p>${text}</p>,
        }

    ];
    useEffect(() => {
        if (!loadingCotizacion) {
            let _datasourceCotizaciones = [];
            //No entiendo por que en algunos casos devuelve mas de una cotizacion ,asi que tome el primer objeto
            // ya que evalue la respuesta con varias pruebas y la primera siempre fue la cotizacion mas barata
            if (cotizaciones.length) {
                cotizaciones[0].prices.map(cotizacion =>
                    _datasourceCotizaciones.push({
                        key: cotizacion.original_courier,
                        original_courier: cotizacion.original_courier,
                        days: cotizacion.days,
                        price: cotizacion.price,
                        volumetric_weight: cotizacion.volumetric_weight
                    })
                );
                setDataSourceCotizacionEconomica([{
                    key: cotizaciones[0].lower_price.original_courier,
                    original_courier: cotizaciones[0].lower_price.original_courier,
                    days: cotizaciones[0].lower_price.days,
                    price: cotizaciones[0].lower_price.price,
                    volumetric_weight: cotizaciones[0].lower_price.volumetric_weight
                }])
                setDataSourceCotizaciones(_datasourceCotizaciones);
            }

        }
    }, [loadingCotizacion])
    return (<>
        <h3>Cotizaciones</h3>
        <Table dataSource={dataSourceCotizaciones} columns={columns} />
        <h3>Cotización mas barata</h3>
        <Table dataSource={dataSourceCotizacionEconomica} columns={columns} />
    </>);
}
export default TablaCotizaciones;