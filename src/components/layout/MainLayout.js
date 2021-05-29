import React, { useState } from 'react';
import { Layout, Menu, Button, Image } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  KeyOutlined,
  SwapOutlined,
  CloseOutlined
} from '@ant-design/icons';
import '../../css/layout.css'

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}> */}
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<SwapOutlined className="swap-icon" />}>
            Swap
            </Menu.Item>
          <Menu.Item key="2" icon={<KeyOutlined />}>
            Liquidity
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header-background" style={{ padding: 0 }}>
          <Button className="trigger" icon={collapsed ? <Image src="../../static/image/hambur.png" /> : <CloseOutlined className="bg-primary" />} onClick={toggle} />
          <Button type="primary" shape="round" size='large' className="primary-custom">
          Connect Wallet
        </Button>
        </Header>
        <Content
          className="site-layout-content-background"
          style={{
            minHeight: '100vh',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout