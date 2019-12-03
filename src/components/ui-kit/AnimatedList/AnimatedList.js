import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    opacity: 0;
    transform: translateY(-300px);
    animation: fadeIn 0.4s forwards; 
    animation-delay: ${props => (props.index + 1) * 0.05}s;

    @keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-300px);
  }
  60% {

    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
`;


class AnimatedList extends React.Component {
    static propTypes = {
        wrapper  : PropTypes.node.isRequired,
        children : PropTypes.node.isRequired
    }

    render() {
        const StyledWrapper = this.props.wrapper || React.Fragment;

        return (
            this.props.children.map((component, index) => {
                return (
                    <StyledWrapper key={component.key}>
                        <Wrapper className={component.props.className} index={index}>
                            {component}
                        </Wrapper>
                    </StyledWrapper>
                );
            })
        );
    }
}

export default AnimatedList;
