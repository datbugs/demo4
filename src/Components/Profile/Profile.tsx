import React from 'react';
import { Row, Col, Button } from 'antd';
import './Profile.css';
import {Container, Nav, } from 'react-bootstrap'




function Profile() {
    return (
        <div className='profile' >
            <Container className='background' style={{ backgroundColor: "rgba(63, 81, 181, 0.5)", backgroundImage: `url("https://jumbo.g-axon.work/images/profile-bg-img.png")` }}>
                <Row className='contact' gutter={16}>
                    <Col className="gutter-row item-contact" span={6}>
                        <div className="item-img">
                            <img style={{ width: "80px", borderRadius: "50%" }} src="https://jumbo.g-axon.work/images/avatar/avatar6.jpg" alt="" />
                        </div>
                        <div className="item-name">
                            <h1>Kiley Brown</h1>
                            <p>Florida, USA</p>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className='button'>
                            <Button className='bth-followers' ghost>2K+<br />Followers</Button>
                            <Button className='bth-following' ghost>69<br />Following</Button>
                            <Button className='bth-friends' ghost>999<br />Friends</Button>
                        </div>
                    </Col>
                </Row>
                <Row className='menu-contact'>
                    <Col span={9}>
                        <Nav className="me-auto">
                            <Nav.Link style={{color:"#fff"}} href="#home">Timeline</Nav.Link>
                            <Nav.Link style={{color:"#fff"}} href="#features">About</Nav.Link>
                            <Nav.Link style={{color:"#fff"}} href="#pricing">Photos</Nav.Link>
                            <Nav.Link style={{color:"#fff"}} href="#pricing">Friends</Nav.Link>
                            <Nav.Link style={{color:"#fff"}} href="#pricing">More</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;
