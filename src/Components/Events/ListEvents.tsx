import React from 'react';
import { Row, Col } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import './style.css';
import { listEvents } from './DataEvent'

export const ListEvents = () => {
    return (
        <div style={{ rowGap: "35px" }} className='content-events'>
            {
                listEvents.map((item, index) => {
                    return (

                        <Row key={index} className='item-content'>
                            <Col className='item' span={11}>
                                <img src={item.img} alt="" />
                                <div className='item-events'>
                                    <p className='job'>{item.job}</p>
                                    <button className='bth-location'>{item.name_location}</button>
                                    <div className='location'>
                                        <HomeFilled />
                                        <p className='text-location'>{item.location}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='bth-event' span={7}>
                                <div className='time-bth'>
                                    <div className='time-location'>
                                        <HomeFilled />
                                        <p>{item.time}</p>
                                    </div>
                                    <div className='checkin'>
                                        <button className='bth-checkin'>
                                            <p>CHECK IN DETAIL</p>
                                            <HomeFilled />
                                        </button>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    )
                })
            }
        </div>
    );
};
