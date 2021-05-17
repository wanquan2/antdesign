import React, { PureComponent } from 'react'

class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        
        return (
            <div>
                <div>欢迎</div>
                {this.props.children}
            </div>
        )
    }
}

export default App