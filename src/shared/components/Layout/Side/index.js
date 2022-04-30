import { Layout, Menu } from 'antd';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'utils/constants';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const items = [
  {
    title: 'Home',
    url: '/admin',
    key: 'home',
    icon: 'home',
    type: 'simple'
  },
  {
    title: 'Categories',
    url: PATHS.ADMIN.CATEGORIES.LIST,
    key: 'categories',
    type: 'simple'
  },

  {
    title: 'Products',
    url: PATHS.ADMIN.PRODUCTS.LIST,
    key: 'categories',
    type: 'simple'
  }
];

class Side extends Component {
  state = {
    items: items,
    collapsed: false
  };

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { items } = this.state;
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        theme="light"
        className="sidebar--admin"
      >
        <Menu theme="light" mode="inline" selectable={false}>
          {items.map(({ url, title, key, icon, type, children }) => {
            const Widget =
              type === 'simple' ? (
                <Item key={key}>
                  <Link to={url}>
                    <span>{title}</span>
                  </Link>
                </Item>
              ) : (
                <SubMenu
                  key={key}
                  title={
                    <span>
                      <Link to={url} style={{ textDecoration: 'none' }}>
                        <span>{title}</span>
                      </Link>
                    </span>
                  }
                >
                  {children.map(child => (
                    <Item key={child.key}>
                      <Link to={child.url}>
                        <span>{child.title}</span>
                      </Link>
                    </Item>
                  ))}
                </SubMenu>
              );
            return Widget;
          })}
        </Menu>
      </Sider>
    );
  }
}

export default Side;
