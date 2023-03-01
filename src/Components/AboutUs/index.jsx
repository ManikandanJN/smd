import React from "react";
import { Layout } from "antd";
import "./style.scss";
import Icon1 from "../../assets/svg/Icon1.svg";
import AboutUsImage from "../../assets/png/AboutUsImage.png"
const { Header, Content, Footer } = Layout;

const aboutUs = () => {
  const aboutCards = [
    {
      id: 1,
      icon: Icon1,
      title: "HEADING 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      icon: Icon1,
      title: "HEADING 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 3,
      icon: Icon1,
      title: "HEADING 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <Content
      className="aboutPageContainer"
      style={{
        padding: "0 50px",
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <div style={{ width: "50%" }}>
        {aboutCards?.map((item, index) => {
          return(
            <div className="aboutPage">
            <div className="aboutPageIcon">
              <img src={item.icon} />
            </div>
            <div className="aboutPageTitle">
              <h3>{item.title}</h3>
              <div style={{color:"gray"}}>{item.description}</div>
            </div>
          </div>
          )
        })}
        
      </div>
      <div style={{ width: "50%" }}>
        <img src={AboutUsImage} width={"70%"} height={"70%"} />
      </div>
    </Content>
  );
};

export default aboutUs;
