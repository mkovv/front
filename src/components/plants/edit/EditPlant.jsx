import React, { useContext } from "react";
import { Form, Button, Card, Input, Row, Col, notification } from 'antd'
import './EditPlant.scss';

const EditPlant = () => {
    return (
        <Form>
            <Card className="edit-plants-card">
                <Row gutter={12}>
                    <Col span={24}>
                        <Form.Item label="Name" name="name">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Price" name="price">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Size" name="size">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Card>
        </Form>
    )
}

export default EditPlant;