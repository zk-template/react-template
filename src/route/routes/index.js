import RouteList from './routes';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

class AppRouter extends Component {



    render() {
        return(
            <Router history={history}> 
                    <Redirect from="/" to="/main"></Redirect>
                    {
                        RouteList.map((route, index) => {
                            return(
                                <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                render = {props => {
                                    document.title = route.title || '';
                                    return <route.component {...props} routes={route.routes}/>
                                }}>

                                </Route>
                            )
                        })
                    }
            </Router>
        )
    }
}
const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);