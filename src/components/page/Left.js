import React, { PureComponent } from 'react'
import {Link} from "react-router-dom";

import { Layout, Menu } from 'antd';
import logo from '../../static/img/logo.png';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Left extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const {leftNav,collapsed} = this.props;
        return (
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"><img src={logo} alt="" /></div>
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    {
                        leftNav.map((item,i) => {
                            if(item.child){
                                return <SubMenu key={item.id + i} icon={<item.icon />} title={item.title}>
                                        {
                                            item.child.map(item => {
                                                return  <Menu.Item key={item.id}>
                                                            <Link to={item.path}>{item.title}</Link>
                                                        </Menu.Item>
                                            })
                                        }
                                        </SubMenu>
                            }else{
                                return <Menu.Item key={item.id} icon={<item.icon />}>
                                            <Link to={item.path}>{item.title}</Link>
                                        </Menu.Item>
                            }
                        })
                    }
                </Menu>
            </Sider>
        )
    }
}

export default Left