import React from 'react';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import styled from 'styled-components';
import API from '../../../api';

import UserComponent from '../../ui-kit/UserComponent';

const api = new API();

const PageWrapper = styled.div`
    padding: 10px;
`;

const StyledUserComponent = styled(UserComponent)`
    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

@inject('store')
@observer
class UsersPage extends React.Component {
    componentDidMount = () => {
        this.props.store.fetchUsers();
    }

    render() {
        const { users } = this.props.store;

        return (
            <PageWrapper>
                {users.map(user => <StyledUserComponent key={user.id} user={user} />)}
            </PageWrapper>
        );
    }
}

export default UsersPage;
