import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Typography } from 'antd';
import './style.css'

const { Title } = Typography;



export const Biography = () => {
    return (
        <Container className='about'>

            <Row className='menu-about'>
                <Col span={5}>
                    <Title className='title-contact' level={5}>Biography</Title>
                </Col>
            </Row>
            <p className='bio-title'>A little flash back of Kiley Brown</p>
            <Row className='menu-about'>
                <Col >
                    <Title className='title-contact' level={4}>Donec dignissim gravida sem, ut cursus dolor hendrerit et. Morbi volutpat.</Title>
                </Col>
            </Row>
            <p>Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec non maximus neque, ut finibus ex. Quisque semper ornare magna, sed ullamcorper risus luctus quis. Etiam tristique dui vitae diam rutrum sodales. Mauris feugiat lectus felis, nec ullamcorper risus elementum at. Aliquam erat volutpat. Nullam et est eget metus gravida tincidunt. Phasellus sed odio eu lacus venenatis. <br /> <br />

                Suspendisse vel bibendum ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed a felis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo tortor.</p>
        </Container>
    );
}
