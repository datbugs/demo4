import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Typography} from 'antd';
import './style.css'
import { ListEvents } from './ListEvents';

const { Title } = Typography;
export const Events = () => {
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
