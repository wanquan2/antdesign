/*
** 路由渲染
*/
import React, { PureComponent } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";

import routers from './config'

class Index extends PureComponent {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Router>
            {
                routers.map((item,i) => {
                    if(item.child){
                        return <Route key={i} path={item.path} render={() =>(
                                    <item.component>
                                    {
                                        item.child.map((items) => {
                                            return <Route key={items.path} path={item.path + items.path} component={items.component}></Route>
                                        })
                                    }
                                    </item.component>
                                )}>
                                </Route>
                    }else{
                        return <Route key={i} path={item.path} exact={item.exact} component={item.component} ></Route>
                    }
                    
                })
            }
            </Router>
        )
    }
}

export default Index