import { Layout, Menu } from 'antd';
import React from 'react';
const { Header } = Layout;

const NavBar = () => {
  const menu_list = ['로고', '메뉴1', '메뉴2', '메뉴3', '메뉴4', '메뉴5', '메뉴6'];

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          style={{ minWidth: 0, flex: "auto" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menu_list.map((menu, index) => {
            const key = index + 1
            return {
              key,
              label: menu,
            };
          })}
        />
      </Header>
    </Layout>
  );
};

export default NavBar;