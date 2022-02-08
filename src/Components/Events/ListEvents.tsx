import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import './Events.css'



export const ListEvents = () => {
    const listEvents = [
        {
            img: "https://jumbo.g-axon.work/images/event1.jpg",
            job: "Musical Concert",
            name_location: "Sundance Film Festival",
            location: "Downsview Park, Toronto, Canada",
            time: "Feb 23, 2020"

        },
        {
            img: "https://jumbo.g-axon.work/images/event2.jpg",
            job: "Magic Show",
            name_location: "Underwater Musical Festival",
            location: "Downsview Park, Toronto, Canada",
            time: "Feb 11, 2020"

        },
        {
            img: "https://jumbo.g-axon.work/images/event3.jpg",
            job: "Musical Concert",
            name_location: "Village Feast Fac",
            location: "Downsview Park, Toronto, Canada",
            time: "Jan 02, 2020"

        },
    ]

    return (
        <div style={{ rowGap: "35px" }} className='content-events'>
            {
                listEvents.map((item, index) => {
                    return (

                        <Row className='item-content'>
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
                            <Col span={7}>
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
