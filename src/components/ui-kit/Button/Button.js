import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  padding: 5px 10px;
  color: ${props => props.isActive ? props.theme.main.primary : props.theme.main.default} !important;
  border: 2px solid ${props => props.isActive ? props.theme.main.primary : props.theme.main.default};
  border-radius: 8px;
  transition: 0.2s;

  :hover {
      opacity: 0.6;
      cursor: pointer;
  }
`;

class Button extends React.PureComponent {
    static propTypes = {
        children  : PropTypes.array.isRequired,
        className : PropTypes.any.isRequired,
        isActive  : PropTypes.bool.isRequired
    }

    render() {
        const { children, className, isActive, ...p } = this.props;

        return (
            <ButtonContainer
                className={className} isActive={isActive}
                {...p}
            >
                {children}
            </ButtonContainer>
        );
    }
}

export default Button;
