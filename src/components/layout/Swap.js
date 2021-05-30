
import Layout from "antd/lib/layout/layout"

import React, { useState } from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

const SwapLayout =()=>{

    return (

        <Layout>
            <Row justify="space-around" align="middle">
                <Col span={24} >
                <Form className="exchange">


      <Form.Item
        name="from"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonAfter={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="from"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonAfter={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      

      

      
    </Form>
                </Col>
            </Row>
            
        </Layout>
    )

}

export default SwapLayout