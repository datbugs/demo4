import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Typography, Button } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import './Events.css'
import { ListEvents } from './ListEvents';

const { Title } = Typography;



function Events() {
    return (
        <Container className='about'>

            <Row className='menu-about'>
                <Col span={3}>
                    <Title className='title-contact' level={5}>Events</Title>
                </Col>
            </Row>
            <p className='bio-title'>What Kiley is up to</p>
            <ListEvents/> 
        </Container>
    );
}

export default Events;
