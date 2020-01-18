import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Button } from 'antd';
import { connect } from 'react-redux';
import { ACTION_TYPE } from '../../store/actions/types_and_initval';
import { asyncToDo } from '../../store/actions/actions';
import './main.scss';
import { bindActionCreators } from 'redux';
class Main extends Component {

    /***
     * 同步修改Store
     */
    setStore() {
        this.props.changeToDo('立即改变');
    }
    /**
     * 异步修改Store
     */
    asyncSetStore() {
        this.props.asyncChangeToDo('延迟一会改变');
    }
    render() {
        return (
            <div id="main">
                <p className="title">欢迎使用zk自定义React模板</p>
                <Button type="primary" onClick={this.asyncSetStore.bind(this)}>异步按钮</Button>

                <Button type="primary" onClick={this.setStore.bind(this)}>同步按钮</Button>

            <div>{this.props.todo}</div>
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

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeToDo: payload => {
            dispatch({type: ACTION_TYPE, payload});
        },
        asyncChangeToDo: bindActionCreators(asyncToDo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

