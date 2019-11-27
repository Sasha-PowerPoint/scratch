import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import {
    Router,
    Switch,
    Route
} from 'react-router-dom';
import { history } from '../history';

import First from '../components/First';
import Second from '../components/Second';

import './App.less';

function AppRoute({ ...props }) {
    return (
        <Route
            {...props}
        />
    );
}

class App extends PureComponent { //eslint-disable-line
    render() {
        return (
            <div>
                <Router
                    history={history}
                >
                    <Switch>
                        <AppRoute path='/' component={First} />
                        <AppRoute path='/l' component={Second} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default hot(App);
