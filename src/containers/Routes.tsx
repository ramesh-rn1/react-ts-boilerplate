import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Home';

class Routes extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' render={props => <Home {...props} />} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;