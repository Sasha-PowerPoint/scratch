import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import {
    Router
} from 'react-router-dom';
import { Switch,
    Route } from 'react-router';
import UsersPage    from '../components/pages/UsersPage';
import PostsPage    from '../components/pages/PostsPage';
import CommentsPage from '../components/pages/CommentsPage';
import AlbumsPage   from '../components/pages/AlbumsPage';
import PhotosPage   from '../components/pages/PhotosPage';


import { history } from '../history';
import { theme }   from '../assets/theme';

import MainLayout  from './layouts/MainLayout';

import './App.less';

function AppRoute({ component: Page, ...rest }) {
    return (
        <Route
            {...rest}
            render = {props => (  //eslint-disable-line
                <MainLayout {...props}>
                    <Page {...props} />
                </MainLayout>
            )}
        />
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
                        <AppRoute exact path='/users'   component={UsersPage} />
                        <AppRoute path='/posts'    component={PostsPage} />
                        <AppRoute path='/comments' component={CommentsPage} />
                        <AppRoute path='/albums'   component={AlbumsPage} />
                        <AppRoute path='/photos'   component={PhotosPage} />
                    </Switch>
                </Router>
            </ThemeProvider>
        );
    }
}

export default hot(App);
