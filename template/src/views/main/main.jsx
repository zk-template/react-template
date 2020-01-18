import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Button } from 'antd';
import './main.scss';
class Main extends Component {


    render() {
        return (
            <div id="main">
                <p className="title">欢迎使用zk自定义React模板</p>
                <Button type="primary">按钮</Button>
                {
                    this.props.routes.map((route, index) => {
                        return <Route 
                                exact={route.exact} 
                                key={index}
                                path={route.path}
                                component={route.component}
                                ></Route>
                    })
                }
            </div>
        )
    }
}

export default Main;

