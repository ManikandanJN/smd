import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import "./style.scss";
import HomePageLogo from "../../assets/svg/HomePageLogo1.svg";
import AboutUsImage from "../../assets/png/AboutUsImage.png";
import AboutUs from "../AboutUs/index";
import Services from "../Services/index"
const { Header, Content, Footer } = Layout;

const homePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Content
        className="homePageContainer"
        style={{
          padding: "0 50px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="homePage">
          <div className="homePageTitle">
            <h1 className="title">Lorem Ipsum is simply dummy</h1>
            <span>
              Lorem Ipsum is simply dummy.Lorem Ipsum is simply dummy.Lorem
              Ipsum is simply dummy.Lorem Ipsum is simply dummy.Lorem Ipsum is
              simply dummy
            </span>
          </div>
        </div>
        <div style={{ width: "50%" }} className="landing-img">
          <img src={AboutUsImage} width={"70%"} height={"70%"} />
        </div>
      </Content>
      <AboutUs />
      <Services />
    </>
  );
};

export default homePage;
