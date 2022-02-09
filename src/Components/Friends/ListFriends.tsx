import React from 'react';
import { Row, Col } from 'antd';
import './style.css'
import { listFriends } from './DataFriend';

export const ListFriends = () => {
    return (
        <Row className='item-friends'>
            {
                listFriends.map((item, index) => {
                    return (
                        <Col className='friend-img' span={7} key={index}>
                            <button className='bth-friends'>
                                <img src={item.img} alt="" />
                                <div className='friend-content'>
                                    <span></span>
                                    <p className='name-friends'>{item.name}</p>
                                </div>
                            </button>
                        </Col>
                    )
                })
            }
        </Row>
    );
};
