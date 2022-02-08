import React from 'react'
import { Button} from 'antd';
import {AppstoreOutlined, WechatOutlined, BellOutlined} from '@ant-design/icons';
import './Header.css';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
  return (
    <div className='container'>    
            <div className="d-flex justify-content-end">
              <Button className='bth-login' type="text">Login</Button>
              <Button className='bth-signup' type="text">Sign Up</Button>
            </div>
            <div>
            <Navbar collapseOnSelect expand="lg" >
              <Container>
              <Navbar.Brand href="#home">
                <img src="https://jumbo.g-axon.work/images/logo.png" alt=""/>  
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
                <Nav>
                  <Nav.Link href="#deets">
                    <AppstoreOutlined style={{ fontSize: '30px' }}/>
                  </Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    <WechatOutlined style={{ fontSize: '30px' }}/>
                  </Nav.Link>
                  <Nav.Link eventKey={3} href="#memes">
                    <BellOutlined style={{ fontSize: '30px' }}/> 
                  </Nav.Link>
                  <Nav.Link eventKey={4} href="#memes">
                    <img src="https://jumbo.g-axon.work/images/flag/icons8-usa.png" alt=""/>  
                  </Nav.Link>
                  <Nav.Link eventKey={5} href="#memes">
                    <img style={{width:"32px", borderRadius:"50%" }} src="https://jumbo.g-axon.work/images/avatar/avatar13.jpg" alt=""/>  
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>
    </div>
    

  )
}

export default Header
