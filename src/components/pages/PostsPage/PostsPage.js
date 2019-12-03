import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import PostComponent from '../../ui-kit/PostComponent';

const PageWrapper = styled.div`
    padding: 10px;
`;

const StyledPostComponent = styled(PostComponent)`
    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

@inject('store')
@observer
class PostsPage extends React.PureComponent {
    componentDidMount = () => {
        this.props.store.fetchPosts();
    }

    render() {
        return (
            <PageWrapper>
                {this.props.store.posts.map(post => <StyledPostComponent post={post} />)}
            </PageWrapper>
        );
    }
}

export default PostsPage;
