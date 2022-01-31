import React, { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';


function Pictures() {

const [photos, setPhotos] = useState([])
const [pageNumber, setPageNumber]= useState(1)

const fetchPhotos = async(pageNumber) =>{
  const Access_Key = "Du35EGQ4zIwqRVP056USDZMifPuepFwBGVOBu9Xgv28"
  const res = await fetch(`https://api.unsplash.com/photos/?client_id=${Access_Key}&page=${pageNumber}&per_page=10`)
  const data = await res.json()
  console.log(data)
  setPhotos(data)
}

useEffect(() => {
  fetchPhotos(pageNumber)
}, [pageNumber]);




  return (

    <Row className='photo'>
        <h4>Photo by  📸</h4>
        {
        photos.map((photo, index) =>(
          
          <Col className='friend-img' span={7}  key={index}>
          <img src={photo.urls.small} alt="" />
          
      </Col>
        ))
        }
      </Row>

  );
}

export default Pictures;
