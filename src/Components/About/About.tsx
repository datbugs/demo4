import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { HomeFilled } from '@ant-design/icons';
import { Row, Col, Typography } from 'antd';
import './About.css'

const { Title } = Typography;


function About() {
    return (
        <Container className='about'>

            <Row className='menu-about'>
                <Col span={3}>
                    <Title className='title-contact' level={5}>About</Title>
                </Col>
                <Col span={6}>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: "#000" }} href="#home">Overview</Nav.Link>
                        <Nav.Link style={{ color: "#000" }} href="#features">Work</Nav.Link>
                        <Nav.Link style={{ color: "#000" }} href="#pricing">Eduction</Nav.Link>
                    </Nav>
                </Col>
            </Row>
            <hr />
            <Row className='about-item'>
                <Col span={8}>
                    <div className='item-icon'>
                        <HomeFilled  style={{ fontSize: '25px'}} />
                        <div className='content-item'>
                            <p className='content-item-first'>Works at</p>
                            <p className='content-item-second'>G-axon Tech Pvt. Ltd.</p>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='item-icon'>
                        <HomeFilled style={{ fontSize: '25px'}}/>
                        <div className='content-item'>
                            <p className='content-item-first'>Birthday</p>
                            <p className='content-item-second'>Oct 25, 1994</p>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='item-icon'>
                        <HomeFilled style={{ fontSize: '25px'}}/>
                        <div className='content-item'>
                            <p className='content-item-first'>Went to</p>
                            <p className='content-item-second'>Oxford University</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='about-item'>
                <Col span={8}>
                    <div className='item-icon'>
                        <HomeFilled style={{ fontSize: '25px'}}/>
                        <div className='content-item'>
                            <p className='content-item-first'>lives in</p>
                            <p className='content-item-second'>Switzerland</p>
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='item-icon'>
                        <HomeFilled style={{ fontSize: '25px'}}/>
                        <div className='content-item'>
                            <p className='content-item-first'>4 Family Members</p>
                            <p className='content-item-second'>bca</p>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    );
}

export default About;
