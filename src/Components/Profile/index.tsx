import React, {useState} from 'react';
import { Row, Col, Button } from 'antd';
import './style.css';
import { Container, Nav, } from 'react-bootstrap';
import { AppDispatch, RootState } from '../../stores';
import { useSelector, useDispatch } from 'react-redux';
import {increment } from './counterSlide';




export const Profile = () => {

    const dispatch = useDispatch<AppDispatch>()
    const [state, setState] = useState<number>(0)


    return (
        <div className='profile' >
            <div className='background'>
                <div className="background-color">
                    <Container>
                        <Row className='contact' gutter={24}>
                            <Col className="gutter-row item-contact" span={10}>
                                <div className="item-img">
                                    <img style={{ width: "80px", borderRadius: "50%" }} src="https://jumbo.g-axon.work/images/avatar/avatar6.jpg" alt="" />
                                </div>
                                <button onClick={() =>{ setState(state+1)}} >Cong</button>
                                <button onClick={() =>{setState(state-1)}}>Tru</button>
                                <button onClick={() => setState(0)}>Reset</button>
                                <p>{state}</p>
                                <div className="item-name">
                                    <h1>Kiley Brown</h1>
                                    <p>Florida, USA</p>
                                </div>
                            </Col>
                            <Col className="gutter-row contact-right" span={14}>
                                <div className='button'>
                                    <Button className='bth-followers' ghost>2K+<br />Followers</Button>
                                    <Button aria-label="Increment value" className='bth-following' ghost>{}<br />
                                        Following
                                    </Button>
                                    <Button  className='bth-friends' ghost><br />Friends</Button>
                                    <Button  className='bth-friends' ghost><br />Friends</Button>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Row className='menu-contact'>
                        <Col span={18}>
                            <Nav className="me-auto">
                                <Nav.Link style={{ color: "#fff" }} href="#home">Timeline</Nav.Link>
                                <Nav.Link style={{ color: "#fff" }} href="#features">About</Nav.Link>
                                <Nav.Link style={{ color: "#fff" }} href="#pricing">Photos</Nav.Link>
                                <Nav.Link style={{ color: "#fff" }} href="#pricing">Friends</Nav.Link>
                                <Nav.Link style={{ color: "#fff" }} href="#pricing">More</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
