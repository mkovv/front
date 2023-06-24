import React, { useContext, useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from 'react-router-dom';

import {
    TeamOutlined,
    AuditOutlined,
    QuestionCircleOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const navItems = [
    {
        key: '/plants',
        label: "Plants",
        icon: <AuditOutlined />
    },
    {
        key: '/users',
        label: "Users",
        icon: <TeamOutlined />
    },
    {
        key: '/about',
        label: "About",
        icon: <QuestionCircleOutlined />,

    }
]


const HeaderComponent = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();

    const handleMenuClick = ({ key }) => {
        if (key) {
            navigate(key);
        }
    };


    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <div style={{ height: 32, margin: 16 }}>

            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={navItems} onClick={handleMenuClick} />
        </Sider>
    );
};

export default HeaderComponent;