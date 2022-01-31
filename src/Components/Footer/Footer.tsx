import React from 'react';
import {Container} from 'react-bootstrap';
import { Row, Col, Button } from 'antd';

import './Footer.css'

function Footer() {
  return (
  <div className='footer'>
      <Container>
        <Row className='content-footer'>
            <Col className='copyright' span={7}>
                <img src="https://jumbo.g-axon.work/images/footer-logo.png" alt="" />
                <p>Copyright Company Name © 2022</p>
            </Col>
            <Col className='buy' span={5}>
                <p>$24 Only</p>
                <button>BUY NOW</button>
            </Col>
        </Row>
      </Container>
  </div>
  );
}

export default Footer;
