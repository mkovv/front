import React from "react";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
    Navigate,
} from 'react-router-dom';

import { Layout } from "antd";

import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import Slider from "../components/common/slider/Slider";

import { createBrowserHistory } from 'history';

import Login from '../components/login/Login';
import Plants from '../components/plants/view/Plants';
import EditPlant from '../components/plants/edit/EditPlant';
import Users from '../components/users/Users';

const { Content } = Layout;


function Router() {
    const history = createBrowserHistory();

    const token = localStorage.getItem('token');

    return (
        <BrowserRouter history={history}>
            {token ? (
                <Layout style={{ minHeight: '100vh' }}>
                    <Slider />
                    <Layout className="site-layout">
                        <Header />
                        <Content>
                            <Routes>
                                <Route exact path="/" element={<Navigate to="/plants" />} />
                                <Route exact path="/plants/plant/:id?" name="EditPlant" element={<EditPlant />} />
                                <Route exact path="/plants/*/plant/:id?" name="EditPlant" element={<EditPlant />} />
                                <Route exact path="/plants" name="Plants" element={<Plants />} />
                            </Routes>
                        </Content>
                        <Footer />
                    </Layout>
                </Layout>
            ) : (
                <Routes>
                    <Route exact path="/login" name="Login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default Router;