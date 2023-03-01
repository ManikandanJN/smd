import React from "react";
import { Breadcrumb, Button, Col, Form, Input, Layout, Row, theme } from "antd";
import "./style.scss";
const { Header, Content, Footer } = Layout;
const {TextArea}=Input;

const homePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    <Content
      className="footerPageContainer"
      style={{
        padding: "20px 10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "20px",
          fontSize: "35px",
          fontWeight: "600",
          color: "#4385f5",
          textAlign:"center"
        }}
      >
        CONTACT US{" "}
        <hr style={{ border: "solid 1.2px black", width: "100px" }} />
      </div>
      <div className="footer-form-container">
        <Form layout="vertical">
          <Row type="flex" justify="space-between">
            <Col lg={12} md={12} sm={12} xs={24}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <TextArea placeholder="Comments" rows={5} />
              </Form.Item>
            </Col>
          </Row>
          <Row type="flex" justify="space-between" style={{textAlign:"center"}}>
            <Col lg={24} md={24} sm={24} xs={24}>
                <Button type="primary">Button</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Content>
    <Footer
    style={{
      textAlign: 'center',
    }}
  >
    Ant Design ©2023 Created by Ant UED
  </Footer>
  </>
  );
};

export default homePage;
