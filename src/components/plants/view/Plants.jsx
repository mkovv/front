import React, { useState, useEffect } from "react";
import { Form, Button, Card, Input, Row, Col, Table } from 'antd';
import { getPlants } from './PlantsService';
import './Plants.scss';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
    },
    {
        title: 'Water',
        dataIndex: 'water',
        key: 'water',
    },
];

const Plants = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getPlants().then(setItems);
    }, [])


    return (
        <Card className="plants-card">
            <Table columns={columns} dataSource={items} />
        </Card>
    )
}

export default Plants;