import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header  from '../ui-kit/Header';

import { PAGES } from '../../utils/contants';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Poppins';
    box-sizing: border-box;
  }

  h1 {
    margin: 0
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.main.default};
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.main.default};
  display: flex;
  flex-direction: column;
`;

export default class MainLayout extends React.PureComponent {
    static propTypes = {
        children : PropTypes.node.isRequired
    }

    render() {
        return (
            <Wrapper>
                <GlobalStyle />
                <Header />
                <PageWrapper>
                    { this.props.children}
                </PageWrapper>
            </Wrapper>
        );
    }
}
