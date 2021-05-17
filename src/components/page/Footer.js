import React, { PureComponent } from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

class Footers extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Footer>CCEG ©2021 前端团队</Footer>
        )
    }
}

export default Footers