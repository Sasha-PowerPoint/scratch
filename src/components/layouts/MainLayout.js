import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import styled, { createGlobalStyle } from 'styled-components';
import Header  from '../ui-kit/Header';
import Spinner from '../ui-kit/Spinner';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    max-height: 100%;
    width: 100%;
    font-family: 'Poppins';
    box-sizing: border-box;
  }

  .user-component-icons {
    height: 20px;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    margin: 0
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  background: ${props => props.theme.main.default};
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background: ${props => props.theme.main.default};
  display: flex;
  flex-direction: column;
  padding: 0 calc((100% - 1000px) / 2);
  margin-top: 60px;
`;

const SpinnerAppearWrapper = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 100px;
    left: 0px;
    z-index: 19;
    transition: 0.3s;
    transform: translateY(${props => !props.isActive ? '-50px' : '0px'}) scale(${props => !props.isActive ? '0' : '1'});
    opacity: ${props => !props.isActive ? '0' : '1'};
    pointer-events: none;
    display: flex;
    justify-content: center;
`;

@inject('store')
@observer
class MainLayout extends React.Component {
    static propTypes = {
        children : PropTypes.node.isRequired,
        store    : PropTypes.shape({
            usersLoading : PropTypes.bool.isRequired,
            postsLoading : PropTypes.bool.isRequired
        }).isRequired
    }

    render() {
        const { usersLoading, postsLoading } = this.props.store;

        const isLoading = usersLoading || postsLoading;

        return (
            <Wrapper>
                <GlobalStyle />
                <Header />
                <SpinnerAppearWrapper isActive={isLoading}>
                    <Spinner />
                </SpinnerAppearWrapper>
                <PageWrapper>
                    { this.props.children}
                </PageWrapper>
            </Wrapper>
        );
    }
}

export default MainLayout;
