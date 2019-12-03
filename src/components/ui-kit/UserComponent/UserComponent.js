import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiEdit3 } from 'react-icons/fi';
import { TiDelete } from 'react-icons/ti';
import { observer } from 'mobx-react';

import manImg from '../../../assets/images/man.png';
import womanImg from '../../../assets/images/woman.png';

const ItemWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    

    .fullName {
        margin-bottom: 10px;
    }

    .content {
        position: relative;
        z-index: 2;

        width: ${props => !props.isOpened ? '100%' : 'calc(100% - 40px)'};
        background: ${props => props.theme.main.dark};
        padding: 10px 15px;
        border-radius: 10px;
        box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.26);
        transition: all 0.2s;
        filter: grayscale(${props => props.disabled ? 70 : 0});
    }
`;

const Tools = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.2s;
    padding: 2px;

    
    position: absolute;
    right: 0px;
    z-index: 1;

    div${ToolsIcon} {
        &:last-child {
            transition-delay: 0.1s;
        }

        transition: transform  0.2s;
        transform: translateX(${props => !props.isOpened ? '-100px' : '0px'});
    }

`;

const Avatar = styled.img`
    height: 120px;
    border-radius: 50%;
    padding: -1px -1px;
    margin-right: 15px;
    box-shadow: 0px 0px 0px 3px ${props => props.theme.main.primary};
`;

const Horizontal = styled.div`
    display: flex;
    align-items: flex-start;
`;
const UserCreds = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const FullName = styled.h1`
    font-size: 26px;
    color: ${props => props.theme.main.default};
    border-bottom: 1px solid ${props => props.theme.main.default};
    border-width: ${props => props.underline ? '1px' : '0px'}
`;

const Link = styled.a`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 300px;
    color: ${props => props.theme.main.primary}
`;

const StatusChip = styled.div`
    background: ${props => props.isActive ? props.theme.main.success : props.theme.main.default}
    padding: 5px 10px;
    border-radius: 20px;
    margin-left: 10px;
`;

const ToolsIcon = styled.div`
    &:not(:last-child) {
        margin-bottom: 5px;
    }

    &:hover {
        transition: unset;
        cursor: pointer;
        padding: 3px;
        border: 2px solid ${props => props.theme.main.primary};
        box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.26);
    }

    padding: 5px;
    background: ${props => props.theme.main.dark}
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.26);
`;

@observer
class UserComponent extends React.Component {
    static propTypes = {
        className : PropTypes.string,
        user      : PropTypes.object.isRequired
    }

    static defaultProps = {
        className : ''
    }

    state = {
        isOpened : false
    }

    handleOpenMenu = () => {
        this.setState({ isOpened: true });
    }

    handleCloseMenu = () => {
        this.setState({ isOpened: false });
    }

    render() {
        const {
            email,
            gender,
            phone,
            status,
            website,
            disabled,
            fullName,
            isActive
        } = this.props.user;
        const { isOpened } = this.state;
        const { className } = this.props;

        const image = gender === 'male' ? manImg : womanImg;

        return (
            <ItemWrapper
                className={className}
                disabled={disabled}
                onMouseOver={this.handleOpenMenu}
                onMouseLeave={this.handleCloseMenu}
                isOpened={isOpened}
            >
                <Horizontal className={'content'}>
                    <Avatar src={image} />
                    <UserCreds>
                        <Horizontal className={'fullName'}>
                            <FullName underline>
                                {fullName}
                            </FullName>
                            <StatusChip isActive={isActive}>
                                {status}
                            </StatusChip>
                        </Horizontal>
                        <Link href={website}>
                            {website}
                        </Link>
                        <Link href={`mailto:${email}`} className={'link'}>
                            {email}
                        </Link>
                        <Link href={`phone:${phone}`}  className={'link'}>
                            {phone}
                        </Link>
                    </UserCreds>
                </Horizontal>
                <Tools isOpened={isOpened}>
                    <ToolsIcon >
                        <FiEdit3 />
                    </ToolsIcon>
                    <ToolsIcon>
                        <TiDelete />
                    </ToolsIcon>
                </Tools>
            </ItemWrapper>
        );
    }
}

export default UserComponent;
