import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import AnimationList from '../../ui-kit/AnimatedList';
import PostComponent from '../../ui-kit/PostComponent';

const PageWrapper = styled.div`
    padding: 10px;
`;

const StyledPostComponent = styled.div`
    &:not(:last-child){
        margin-bottom: 10px;
    }
`;

@inject('store')
@observer
class PostsPage extends React.PureComponent {
    static propTypes = {
        store : PropTypes.shape({
            fetchPosts : PropTypes.func.isRequired,
            posts      : PropTypes.array.isRequired
        }).isRequired
    }

    componentDidMount = () => {
        this.props.store.fetchPosts();
    }

    render() {
        return (
            <PageWrapper>
                <AnimationList wrapper={StyledPostComponent}>
                    {this.props.store.posts.map(post => <PostComponent key={post.id} post={post} />)}
                </AnimationList>
            </PageWrapper>
        );
    }
}

export default PostsPage;
