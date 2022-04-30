import { Layout } from 'antd';
import React from 'react';
import Header from './Header';
import './styles.less';

import Side from './Side';

const { Content } = Layout;

export const Admin = OriginalComponent => {
  const Updated = props => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <Side />
          <Content className="layout--admin">
            <OriginalComponent {...props} />
          </Content>
        </Layout>
      </Layout>
    );
  };

  return Updated;
};

export const Customer = OriginalComponent => {
  const Updated = props => {
    return (
      <Layout>
        <Header />
        <Content
          style={{
            margin: 0,
            minHeight: '80vh'
          }}
        >
          <OriginalComponent {...props} />
        </Content>
      </Layout>
    );
  };

  return Updated;
};
