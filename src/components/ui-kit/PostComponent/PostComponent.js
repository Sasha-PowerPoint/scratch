import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { observer } from 'mobx-react';

const ItemWrapper = styled.div`
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.26);
    transition: 0.2s;
    color: ${props => props.theme.main.default}
    background : ${props => props.theme.main.dark}
`;

const Header = styled.h1`
    color: ${props => props.theme.main.primary};
    text-align: left;
`;

@observer
class PostComponent extends React.Component {
    static propTypes = {
        user : PropTypes.object.isRequired
    }

    render() {
        const { body, title } = this.props.post;
        const { className } = this.props;

        return (
            <ItemWrapper className={className} >
                <Header>
                    {title}
                </Header>
                {body}
            </ItemWrapper>
        );
    }
}

export default PostComponent;
