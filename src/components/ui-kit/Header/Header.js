import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import TabButton from '../TabButton';

import { ROUTES } from '../../../utils/contants';

const HeaderWrapper = styled.div`
  height: 60px;
  padding: 0 20px;
  width: 100%;
  background: ${props => props.theme.main.dark};
  box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.26);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLink = styled(Link)`
    & {
        color: inherit;
        text-decoration: none;
    }
`;


class Header extends React.PureComponent {
    static propTypes = {
        match : PropTypes.object.isRequired
    }

    isActive = (tab) => {
        const { match } = this.props;

        return tab === match.path;
    }

    render() {
        return (
            <HeaderWrapper>
                <StyledLink to={ROUTES.users}>
                    <TabButton
                        isActive={this.isActive(ROUTES.users)}
                    >
                        Users
                    </TabButton>
                </StyledLink>
                <StyledLink to={ROUTES.posts}>
                    <TabButton
                        isActive={this.isActive(ROUTES.posts)}
                    >
                        Posts
                    </TabButton>
                </StyledLink>
                <StyledLink to={ROUTES.comments}>
                    <TabButton
                        isActive={this.isActive(ROUTES.comments)}
                    >
                        Comments
                    </TabButton>
                </StyledLink>
                <StyledLink to={ROUTES.albums}>
                    <TabButton
                        isActive={this.isActive(ROUTES.albums)}
                    >
                        Albums
                    </TabButton>
                </StyledLink>
                <StyledLink to={ROUTES.photos}>
                    <TabButton
                        isActive={this.isActive(ROUTES.photos)}
                    >
                        Photos
                    </TabButton>
                </StyledLink>
            </HeaderWrapper>
        );
    }
}

export default withRouter(Header);
