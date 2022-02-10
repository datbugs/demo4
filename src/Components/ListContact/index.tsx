import React, { useState } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { Container } from 'react-bootstrap';
import "./style.css";
import { AddListContact } from './Modal'
import { Modal } from 'antd';

const { Title } = Typography;

export const ListContact = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <Container className='listcontact-info'>
            <Title className='title-contact' level={5}>List Contact</Title>
            <Button onClick={handleOpenModal} type="primary">ADD NEW LIST CONTACT</Button>
            <Modal title="Add Todo" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <AddListContact />
            </Modal>
            <Row className='list-info'>
                <Col span={8}>
                    <Row>
                        Email
                    </Row>
                    <Row>
                        <Col>
                            <p>a</p>
                            <Button type="primary">Sửa</Button>
                            <Button type="primary" danger>Xóa</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row>
                        FaceBook
                    </Row>
                    <Row>
                        <Col>
                            <p>b</p>
                            <Button type="primary">Sửa</Button>
                            <Button type="primary" danger>Xóa</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row>
                        Phone
                    </Row>
                    <Row>
                        <Col>
                            <p>c</p>
                            <Button type="primary">Sửa</Button>
                            <Button type="primary" danger>Xóa</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
