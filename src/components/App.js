import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import {
    Router,
    Switch,
    Route
} from 'react-router-dom';
import { history } from '../history';
import { theme }   from '../assets/theme';


import First from '../components/First';
import Second from '../components/Second';
import MainLayout  from './layouts/MainLayout';

import './App.less';

function AppRoute({ ...props }) {
    return (
        <MainLayout {...props}>
            <Route
                {...props}
            />
        </MainLayout>
    );
}

class App extends PureComponent { //eslint-disable-line
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router
                    history={history}
                >
                    <Switch>
                        <AppRoute path='/' component={First} />
                        <AppRoute path='/l' component={Second} />
                    </Switch>
                </Router>
            </ThemeProvider>
        );
    }
}

export default hot(App);
