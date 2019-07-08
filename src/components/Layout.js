import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styled from 'styled-components';
import AppStatus from './AppStatus'
import { ReactComponent as JoieLogo } from '../images/happy.svg';
import UserGraph from './UserGraph'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const FlexBox = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const IconLogo = styled(Icon)`
  && {
    margin-bottom: 10px;
    font-size: 81px;
  }
`;
const Title = styled.div`
  && {
    margin-left: 10px;
    color: #d49d3a;
    font-size: 22px;
  }
`;
export default function SiderLayout() {
    const [collapsed, onCollapse] = useState(false);
    // state = {
    //     collapsed: false,
    // };

    // onCollapse = collapsed => {
    //     console.log(collapsed);
    //     this.setState({ collapsed });
    // };

    const LL = () => <JoieLogo />
    return (
        <Layout style={{ minHeight: '100vh', background: 'white' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} theme="light">
                <FlexBox>
                    <IconLogo component={JoieLogo} />
                    {!collapsed &&
                        <Title>
                            JoieApps
                    </Title>}
                </FlexBox>

                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>User stats</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Extras</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ background: 'white' }}>
                <Header style={{ background: 'white' }}>
                    <AppStatus />
                </Header>
                <Content style={{ margin: '0 16px', height: '360px' }}>

                    {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div> */}
                    <UserGraph />
                </Content>
                <Footer style={{ textAlign: 'center', background: "white" }}>JOIE Apps ©2018</Footer>
            </Layout>
        </Layout >
    );
}


