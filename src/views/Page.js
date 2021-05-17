/*
** 菜单渲染
*/
import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import {
    TeamOutlined,
    FileOutlined,
    DesktopOutlined,
    PieChartOutlined
} from '@ant-design/icons';

import PageLeft from '../components/page/Left'
import PageRight from '../components/page/Right'
import '../static/css/page.less'

class Page extends PureComponent {
    state = {
        collapsed: false,
        leftNav:[{
            id:1,
            title:'统计管理',
            icon:PieChartOutlined,
            path:'/page/customer'
        },{
            id:2,
            title:'客户管理',
            icon:TeamOutlined,
            path:'/page/customer'
        },{
            id:27,
            title:'商家管理',
            icon:FileOutlined,
            child:[{
                id:28,
                title:'助手',
                path:'/page/partner/word'
            },{
                id:29,
                title:'联盟',
                path:'/page/partner/list'
            }]
        },{
            id:17,
            title:'订单管理',
            icon:FileOutlined,
            child:[{
                id:18,
                title:'业务订单',
                path:'/page/order/word'
            },{
                id:19,
                title:'非业务订单',
                path:'/page/order/list'
            }]
        },{
            id:37,
            title:'设置',
            icon:DesktopOutlined,
            child:[{
                id:38,
                title:'菜单管理',
                path:'/page/sys/word'
            },{
                id:39,
                title:'角色管理',
                path:'/page/sys/list'
            },{
                id:130,
                title:'人员管理',
                path:'/page/sys/word'
            },{
                id:318,
                title:'菜单管理',
                path:'/page/sys/word'
            },{
                id:319,
                title:'角色管理',
                path:'/page/sys/list'
            },{
                id:1130,
                title:'人员管理',
                path:'/page/sys/word'
            }]
        },{
            id:7,
            title:'系统设置',
            icon:DesktopOutlined,
            child:[{
                id:8,
                title:'菜单管理',
                path:'/page/sys/word'
            },{
                id:9,
                title:'角色管理',
                path:'/page/sys/list'
            },{
                id:10,
                title:'人员管理',
                path:'/page/sys/word'
            }]
        }]
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {leftNav,collapsed} = this.state;
        return (
            <Layout>
                <PageLeft leftNav={leftNav} collapsed={collapsed} />
                <PageRight pagechild={this.props.children} collapsed={collapsed}  onToggle={this.toggle} />
            </Layout>
        );
    }
}

export default Page
 