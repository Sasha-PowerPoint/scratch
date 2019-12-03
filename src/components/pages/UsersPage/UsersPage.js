import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import AnimatedList from '../../ui-kit/AnimatedList';
import UserComponent from '../../ui-kit/UserComponent';

const PageWrapper = styled.div`
    padding: 10px;
`;

const StyledUserComponentWrapper = styled.div`
 &:not(:last-child) {
    margin-bottom: 10px;
 }
`;


@inject('store')
@observer
class UsersPage extends React.Component {
    static propTypes = {
        store : PropTypes.shape({
            fetchUsers : PropTypes.func.isRequired,
            users      : PropTypes.array.isRequired
        }).isRequired
    }

    state = {
        a : true
    }

    componentDidMount = () => {
        this.props.store.fetchUsers();
    }

    render() {
        const { users } = this.props.store;

        return (
            <>
                <PageWrapper>
                    <AnimatedList wrapper={StyledUserComponentWrapper}>
                        {users.map(user => <UserComponent key={user.id} user={user} />)}
                    </AnimatedList>
                </PageWrapper>
            </>
        );
    }
}

export default UsersPage;
