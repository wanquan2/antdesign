import React, { PureComponent } from 'react'

import Tables from '../components/Table'

class Word extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              width: 150,
            },
            {
              title: '年龄',
              dataIndex: 'age',
              width: 150,
            },
            {
              title: '地址',
              dataIndex: 'address',
            },
          ];
          
          const data = [];
          for (let i = 0; i < 10; i++) {
            data.push({
              key: i,
              name: `卫青 ${i}`,
              age: 32,
              address: `未央宫 ${i}`,
            });
          }
        return (
            <div>
                我是word
                <Tables columns={columns} list={data} />
            </div>
        )
    }
}

export default Word