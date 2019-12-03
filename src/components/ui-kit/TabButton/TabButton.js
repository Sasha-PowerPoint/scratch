import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

const TabButtonContainer = styled(Button)`
  margin-left: 10px;
  border-width: 0;
  border-radius: 0;
  border-bottom: 2px solid ${props => !props.isActive && 'transparent'};
`;

class TabButton extends React.PureComponent {
    static propTypes = {
        children : PropTypes.node.isRequired
    }

    render() {
        const { children, ...rest } = this.props;

        return (
            <TabButtonContainer
                {...rest}
            >
                {children}
            </TabButtonContainer>
        );
    }
}

export default TabButton;
