import React from 'react'
import { Button } from 'antd';
import { AppstoreOutlined, WechatOutlined, BellOutlined, LikeTwoTone } from '@ant-design/icons';
import './style.css';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { RootState } from '../Profile/Stores';
import { useSelector } from 'react-redux';


export const Header = () => {
  const count = useSelector((state: RootState) => state.counter.value)


  return (
    <div className='header'>
      <Container className='content-header'>
        <div className='number-like'>
        <LikeTwoTone />
        <p>{count}</p>
        </div>
        <div className="d-flex justify-content-end">
          <Button className='bth-login' type="text">Login</Button>
          <Button className='bth-signup' type="text">Sign Up</Button>
        </div>
      </Container>
      <div>
        <Navbar collapseOnSelect expand="lg" >
          <Container>
            <Navbar.Brand href="#home">
              <img src="https://jumbo.g-axon.work/images/logo.png" alt="" />
            </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav" className='bth'>
              <Nav className="me-auto bth-search">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search here"
                    className="me-2"
                    aria-label="Search"
                  />
                  <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  </NavDropdown>
                </Form>

              </Nav>
              <Nav className='header-icon'>
                <Nav.Link href="#deets">
                  <AppstoreOutlined className='item-icon' />
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <WechatOutlined className='item-icon' />
                </Nav.Link>
                <Nav.Link eventKey={3} href="#memes">
                  <BellOutlined className='item-icon' />
                </Nav.Link>
                <Nav.Link eventKey={4} href="#memes">
                  <img src="https://jumbo.g-axon.work/images/flag/icons8-usa.png" alt="" />
                </Nav.Link>
                <Nav.Link eventKey={5} href="#memes">
                  <img style={{ width: "32px", borderRadius: "50%", marginInline: '10px' }} src="https://jumbo.g-axon.work/images/avatar/avatar13.jpg" alt="" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>


  )
}
