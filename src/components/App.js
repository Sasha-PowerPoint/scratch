import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import {
    Router,
    Redirect
} from 'react-router-dom';
import { Switch,
    Route } from 'react-router';
import UsersPage    from '../components/pages/UsersPage';
import PostsPage    from '../components/pages/PostsPage';
import CommentsPage from '../components/pages/CommentsPage';
import AlbumsPage   from '../components/pages/AlbumsPage';
import PhotosPage   from '../components/pages/PhotosPage';


import store from '../store';

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
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Router
                        history={history}
                    >
                        <Switch>
                            <AppRoute path='/users'  component={UsersPage} />
                            <AppRoute path='/posts'    component={PostsPage} />
                            <AppRoute path='/comments' component={CommentsPage} />
                            <AppRoute path='/albums'   component={AlbumsPage} />
                            <AppRoute path='/photos'   component={PhotosPage} />
                            <Redirect to='/users' />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default hot(App);
