import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Container } from 'react-bootstrap';
import './Friends.css'

const { Title } = Typography;



function Friends() {
    return (
        <Container className='friends'>
            <div className='text-friends'>
                <Title className='title-contact' level={5}>Friends</Title>
                <p>327 ( 27 MUTUAL)</p>
            </div>
            <div>
                <Row>
                    <Col className='friend-img' span={8}>
                        <img style={{width:'325px'}} src="https://jumbo.g-axon.work/images/avatar/avatar7.jpg" alt="" />
                    </Col>
                    <Col className='friend-img' span={8}>
                        <img style={{width:'325px'}} src="https://jumbo.g-axon.work/images/avatar/avatar7.jpg" alt="" />
                    </Col>
                    <Col className='friend-img' span={8}>
                        <img style={{width:'325px'}} src="https://jumbo.g-axon.work/images/avatar/avatar7.jpg" alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col className='friend-img' span={8}>
                        <img style={{width:'325px'}} src="https://jumbo.g-axon.work/images/avatar/avatar7.jpg" alt="" />
                    </Col>
                    <Col className='friend-img' span={8}>
                        <img style={{width:'325px'}} src="https://jumbo.g-axon.work/images/avatar/avatar7.jpg" alt="" />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Friends;
