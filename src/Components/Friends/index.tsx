import React from 'react';
import {Typography } from 'antd';
import { Container } from 'react-bootstrap';
import './style.css'
import { ListFriends } from './ListFriends';

const { Title } = Typography;
export const Friends = () => {
    return (
        <Container className='friends'>
            <div className='text-friends'>
                <Title className='title-contact' level={5}>Friends</Title>
                <p>327 ( 27 MUTUAL)</p>
            </div>
            <ListFriends />
        </Container>
    );
}