import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import { isEmpty } from 'lodash';

import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const PrivateHeader = ({ user }) => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="about" icon={<SettingOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title={user?.name}>
        <Menu.Item key="setting:1">
          <Link to="/cart-items">Cart</Link>
        </Menu.Item>
        <Menu.Item key="setting:2">Wishlist</Menu.Item>
        <Menu.Item key="setting:3">Orders</Menu.Item>
        {user?.role === 'admin' ? (
          <Menu.Item key="setting:4">
            <Link to="/admin">Admin</Link>
          </Menu.Item>
        ) : null}
      </SubMenu>
    </Menu>
  );
};

const PublicHeader = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<MailOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="about" icon={<SettingOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>

      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>

      <Menu.Item key="alipay">
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );
};

const HeaderBar = ({ user }) => {
  return isEmpty(user) ? <PublicHeader /> : <PrivateHeader user={user} />;
};

export default HeaderBar;
