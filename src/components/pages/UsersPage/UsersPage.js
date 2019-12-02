import React from 'react';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import styled from 'styled-components';

import UserComponent from '../../ui-kit/UserComponent';

const PageWrapper = styled.div`
    padding: 10px
`;

const StyledUserComponent = styled(UserComponent)`
    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

@inject('store')
@observer
class UsersPage extends React.Component {
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
