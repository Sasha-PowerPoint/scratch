import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const TabButtonContainer = styled(Button)`
  margin-left: 10px;
  border-width: 0;
  border-radius: 0;
  border-bottom: 2px solid ${props => props.disabled && 'transparent'};
`;

class TabButton extends React.PureComponent {
    handleClick = () => {
        const { onClick, route } = this.props;

        onClick(route);
    }

    render() {
        const { children, className, activeTab, route, onClick, ...p } = this.props;

        const disabled = activeTab !== route;

        return (
            <TabButtonContainer
                className={className}
                disabled={disabled}
                onClick={this.handleClick}
                {...p}
            >
                {children}
            </TabButtonContainer>
        );
    }
}

export default TabButton;
