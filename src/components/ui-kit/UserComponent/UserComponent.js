import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { observer } from 'mobx-react';

import manImg from '../../../assets/images/man.png';
import womanImg from '../../../assets/images/woman.png';

const ItemWrapper = styled.div`
    position: relative;
    background: ${props => props.theme.main.dark};
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.26);
    transition: 0.2s;
    filter: grayscale(${props => props.disabled ? 70 : 0});

    &:hover {
        margin-left: 20px;
    }

    .fullName {
        margin-bottom: 10px;
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

@observer
class UserComponent extends React.Component {
    static propTypes = {
        user : PropTypes.object.isRequired
    }

    render() {
        const { address, dob, email, gender, id, phone, status, website, disabled, fullName, isActive, toggleDisabled } = this.props.user;
        const { className } = this.props;

        const image = gender === 'male' ? manImg : womanImg;

        console.log(disabled);

        return (
            <ItemWrapper
                className={className} disabled={disabled}
                onClick={toggleDisabled}
            >
                <Horizontal>
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
            </ItemWrapper>
        );
    }
}

export default UserComponent;
