import React, { PureComponent } from 'react'

import { Table } from 'antd';

class Tables extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {columns,list} = this.props;
        return (
            <Table columns={columns} dataSource={list} pagination={false} size='small' />
        )
    }
}

export default Tables