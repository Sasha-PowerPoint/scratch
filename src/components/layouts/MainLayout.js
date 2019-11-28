import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Header  from '../ui-kit/Header';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Poppins';
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.main.default};
  display: flex;
  flex-direction: column;
`;

export default class MainLayout extends React.PureComponent {
    propTypes = {
        children : PropTypes.array.isRequired
    }

    render() {
        const { children } = this.props;

        return (
            <Wrapper>
                <GlobalStyle />
                <Header />
                {children}
            </Wrapper>
        );
    }
}
