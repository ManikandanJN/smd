import React from "react";
import { Layout } from "antd";
import "./style.scss";
import Icon1 from "../../assets/svg/Icon1.svg";
import cardIcon from "../../assets/svg/cardIcon.svg"
const { Header, Content, Footer } = Layout;

const aboutUs = () => {
  const serviceCards = [
    {
      id: 1,
      icon: cardIcon,
      title: "Technology",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      icon: cardIcon,
      title: "Technology",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 3,
      icon: cardIcon,
      title: "Technology",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 4,
      icon: cardIcon,
      title: "Technology",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <Content
      className="servicePageContainer"
      style={{
        padding: "20px 10px",
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <div style={{ padding: "20px", fontSize:"35px", fontWeight:"600", color:"white" }}>
        OUR SERVICES  
      </div>
      <div className="service-page-card-container">
        {
          serviceCards?.map((item,index)=>{
            return (
              <div className="services-card">
              <div className="card-icon-box">
                <img src={item?.icon} />
              </div>
              <h4>{item?.title}</h4>
              <span>{item?.description}</span>
            </div>
            )
          })
        }
        
      </div>
    </Content>
  );
};

export default aboutUs;
