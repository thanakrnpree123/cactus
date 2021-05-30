import Layout from "antd/lib/layout/layout";

import React, { useState } from "react";
import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Image,
} from "antd";

import swap from '../../static/image/Swap.png'
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

const SwapLayout = () => {
  return (
    <>
    
    <Row  >
      <Col>
     <Image  preview={false} width={150} src={swap} style={{marginTop:"30%",marginLeft:"280%" }} />
      </Col>
    </Row>
    
      <Row  className="exchange">
        {/* <Row justify="start" > */}
          <Col  style={{paddingLeft:"5%",paddingTop:"10%"}}>
          <span>Exchange</span> <br/>
          <p>Tade token in an instant</p>
          <hr/>
          </Col>
        {/* </Row> */}
        <Col span={24} align="center" style={{padding:"5%",paddingTop:"0"}}>
          <Form >
            <Form.Item
              name="from"
              
              className="form-input"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonAfter={prefixSelector}
                style={{
                  width: "100%",
                  borderRadius:"50px"
                }}
              />
            </Form.Item>
            <Form.Item
              name="from"
              className="form-input"
              style={{marginTop:"20%"}}
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonAfter={prefixSelector}
                style={{
                  width: "100%",
                  borderRadius:"50px"
                }}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      </>
    
  );
};

export default SwapLayout;
