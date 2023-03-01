import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './style.scss'
const { Header, Content, Footer } = Layout;
const App = () => {

  const menuItem =[
    {
      label:'Home',
      id:1
    },
    {
      label:'About Us',
      id:2
    },
    {
      label: 'Services',
      id:3
    },
    {
      label: 'Contact',
      id:4
    }
  ]
  
  return (
    // <Layout className="layout">
      <Header className='main-container'>
        {/* <div className="logo" /> */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menuItem?.map((item, index) => {
            return {
              label: `${item.label}`,
            };
          })}
        />
      </Header>
      /* <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content> */
      // <Footer
      //   style={{
      //     textAlign: 'center',
      //   }}
      // >
      //   Ant Design ©2023 Created by Ant UED
      // </Footer>
    // </Layout>
  );
};
export default App;