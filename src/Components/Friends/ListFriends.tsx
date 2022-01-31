import React from 'react';
import { Row, Col, Typography } from 'antd';
import './Friends.css'



export const ListFriends = () => {
    const listFriends = [
        {
            img: "https://jumbo.g-axon.work/images/avatar/avatar7.jpg",
            name: "Svetlana Harris",

        },
        {
            img: "https://jumbo.g-axon.work/images/avatar/avatar8.jpg",
            name: "Mark Taylor",

        },
        {
            img: "https://jumbo.g-axon.work/images/avatar/avatar9.jpg",
            name: "Maxmilian",

        },
        {
            img: "https://jumbo.g-axon.work/images/avatar/avatar10.jpg",
            name: "Jonas Milian",

        },
        {
            img: "https://jumbo.g-axon.work/images/avatar/avatar11.jpg",
            name: "Josh Brake",
        }
    ]

    return (
        <Row className='item-friends'>
            {
                listFriends.map((item, index) => {
                    return (
                        <Col className='friend-img' span={7}>
                            <img src={item.img} alt="" />
                            <div className='friend-content'>
                                <span></span>
                                <p className='name-friends'>{item.name}</p>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    );
};
