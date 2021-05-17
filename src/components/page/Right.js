import React, { PureComponent } from 'react';

import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import Footer from './Footer'

const { Header, Content } = Layout;


class Right extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {}
    }

    handlePropsToggle(){
        this.props.onToggle()
    }

    render() {
        const {pagechild,collapsed} = this.props;
        return (
            <Layout>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => this.handlePropsToggle()
                    })}
                </Header>
                <Content>
                    <div className='main-content'>{pagechild}</div>
                </Content>
                <Footer />
            </Layout>
        )
    }
}

export default Right