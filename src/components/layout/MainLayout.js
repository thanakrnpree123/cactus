import React, { useState } from 'react';
import { Layout, Menu, Button, Image, Row,Col } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  KeyOutlined,
  SwapOutlined,
  CloseOutlined
} from '@ant-design/icons';
import '../../css/layout.css'
import hambur from '../../static/image/hambur.png';
import logo2 from '../../static/image/logo2.jpeg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SwapLayout from './Swap';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
        
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}> */}
        <Menu theme="dark" mode="inline">
        <Button className="trigger" style={{marginLeft:"10%"}} icon={collapsed ? "" :
        <Row type="flex" align="middle">  
        <Col xs={12} >
        <CloseOutlined style={{fontSize:'20px',color:"white" }}   />
        </Col>
        <Col xs={12} >
        <Image  src={logo2} preview={false} width={200}  />
        </Col>
     </Row>
     
          
          
         } onClick={toggle}  />
        
          <Menu.Item key="1" icon={<SwapOutlined className="swap-icon" />} style={{marginTop:"30%"}}>
            <Link to="/swap" >Swap</Link>
            </Menu.Item>
          <Menu.Item key="2" icon={<KeyOutlined />}>
            Liquidity
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-header-background" style={{ padding: 0 }}>
          <Row justify="space-between" align="center">
            <Button className="trigger" icon={collapsed ? 
            <Image.PreviewGroup>
              <Image preview={false} src={hambur} style={{marginBottom:"55%"}} />  
              <Image src={logo2} preview={false} width={150} style={{marginLeft:"10%"}} /> 
            </Image.PreviewGroup> :""} 
            onClick={toggle} />
            
            <Button type="primary" style={{marginTop:"1%",marginRight:"2%",background:"linear-gradient(#000, #2B2B2B)",borderColor:"#00FFC2", borderWidth:"2px"}} shape="round" size='large'>
            Connect Wallet
          </Button>
          </Row>
        </Header>
        <Content
          className="site-layout-content-background"
        >
          <Route path="/swap" component={SwapLayout} />
        </Content>
      </Layout>
    </Layout>
    </Router>
  );
}

export default MainLayout