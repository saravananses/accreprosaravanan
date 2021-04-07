import React from "react";
import {Redirect, Route, Switch, useHistory, useLocation, useRouteMatch} from "react-router-dom";
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

function Sidemenu(){
    const location = useLocation();
    const history = useHistory();
    return (<Menu
    defaultSelectedKeys={[location.pathname == `/` ? `/ss/dashboard` : location.pathname]}
    mode="inline"
    theme="dark"
    inlineCollapsed={`MenuFoldOutlined`}
  >
    <Menu.Item key="/ss/dashboard" onClick={()=>{
        history.push(`/ss/dashboard`)
    }} icon={<PieChartOutlined />}>
      Dashboard
    </Menu.Item>
    <Menu.Item key="/ss/accreditation" onClick={()=>{
        history.push(`/ss/accreditation`)
    }} icon={<DesktopOutlined />}>
      Manage accredation
    </Menu.Item>
    <Menu.Item key="/ss/reports" onClick={()=>{
        history.push(`/ss/reports`)
    }} icon={<ContainerOutlined />}>
      Reports
    </Menu.Item>
    <Menu.Item key="/ss/documents" onClick={()=>{
        history.push(`/ss/documents`)
    }} icon={<ContainerOutlined />}>
      Documents
    </Menu.Item>
    <Menu.Item key="/ss/users" onClick={()=>{
        history.push(`/ss/users`)
    }} icon={<ContainerOutlined />}>
      Users
    </Menu.Item>
    </Menu>)
}
export default Sidemenu