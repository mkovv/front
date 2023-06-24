import React, { useContext } from "react";
import { Form, Button, Card, Input, Row, Col, notification } from 'antd';
import { getToken } from './LoginService';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        getToken(values).then(data => {
            localStorage.setItem('token', data.accessToken);
            navigate('/plants');
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row style={{ marginTop: 16 }}>
            <Col span={8} offset={8}>
                <Card>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default Login;