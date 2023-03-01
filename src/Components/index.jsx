import React from 'react'
import { Layout } from 'antd'
import HeaderPage from "./HeaderPage/index"
import HomePage from "./HomePage/index"
import FooterPage from "./FooterPage/index"

const mainPage = () => {

  return (
    <Layout className="layout">
      <HeaderPage />
      <HomePage />
      <FooterPage />
    </Layout>
  )
}

export default mainPage