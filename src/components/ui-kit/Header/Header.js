import React from 'react';
import styled from 'styled-components';

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


class Header extends React.PureComponent {
    state = {
        activeTab : 'posts'
    }

    handleTabClick = (tab) => {
        console.log(tab);

        this.setState({ activeTab: tab });
    }

    render() {
        const { activeTab } = this.state;

        return (
            <HeaderWrapper>
                <TabButton
                    route={ROUTES.users}
                    activeTab={activeTab}
                    onClick={this.handleTabClick}
                >
                    Users
                </TabButton >
                <TabButton
                    route={ROUTES.posts}
                    activeTab={activeTab}
                    onClick={this.handleTabClick}
                >
                    Posts
                </TabButton>
                <TabButton
                    route={ROUTES.comments}
                    activeTab={activeTab}
                    onClick={this.handleTabClick}
                >
                    Comments
                </TabButton>
                <TabButton
                    route={ROUTES.albums}
                    activeTab={activeTab}
                    onClick={this.handleTabClick}
                >
                    Albums
                </TabButton>
                <TabButton
                    route={ROUTES.photos}
                    activeTab={activeTab}
                    onClick={this.handleTabClick}
                >
                    Photos
                </TabButton>
            </HeaderWrapper>
        );
    }
}

export default Header;
