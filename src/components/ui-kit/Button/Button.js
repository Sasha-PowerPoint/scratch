import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  padding: 5px 10px;
  color: ${props => !props.disabled ? props.theme.main.primary : props.theme.main.default};
  border: 2px solid ${props => props.theme.main.primary};
  border-radius: 8px;
  transition: 0.2s;
`;

class Button extends React.PureComponent {
    render() {
        const { children, className, disabled, ...p } = this.props;

        return (
            <ButtonContainer
                className={className} disabled={disabled}
                {...p}
            >
                {children}
            </ButtonContainer>
        );
    }
}

export default Button;
