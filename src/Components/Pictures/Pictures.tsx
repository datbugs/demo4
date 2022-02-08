import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import "./Pictures.css"

const Container = styled("div")`
  width: 1140px;
  border: 1px solid;
  border-radius: 4px;
  background-color: #fff;
  margin: 50px auto;
  @media screen and (max-width: 1200px) {
        display:none
    
}
`;

const FlexDiv = styled("div")`
  display: flex;
  width: 1135px;
  justify-content: center;
  margin: 0 auto;
`;

const RightColumn = styled("div")`
  display: flex;
  flex-direction: column;
  height: 400px;
  background-color: "#f4f4f7";
  overflow-y: scroll;
`;

const StyledElement = styled(Element)`
  padding-top: 20px;
`;
const Row = styled("div")`
  display: flex;
  flex-direction: row
`;
const Col = styled("div")`
  display: flex;
  width : "30%"
  
`;

const Home = () => (
  <Container className="pictures">
    <div className='text-friends'>
                <h5 className='title-pictures' >Pictures</h5>
                
            </div>
  <FlexDiv>
    
    <RightColumn id="containerElement">
      <StyledElement name="section-1">
        <Row>
          <Col>
          <button className="bth-img">
            <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/speaker.jpeg" alt="" />
          </button>
          <button className="bth-img">
            <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/usb-electronics-device.jpeg" alt="" />
          </button>
          <button className="bth-img">
            <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/trimmer.jpg" alt="" />
          </button>
          </Col>
        </Row>
      </StyledElement>
      <StyledElement name="section-2">
        <Row>
        <Col>
          <img className="pictures-img" src="	https://jumbo.g-axon.work/images/products/travel-bag.jpg" alt="" />
          <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/microphone.jpeg" alt="" />
          <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/wach.jpeg" alt="" />
          </Col>
        </Row>
      </StyledElement>
      <StyledElement name="section-3">
        <Row>
          <Col>
            <img className="pictures-img" src="	https://jumbo.g-axon.work/images/products/led.jpeg" alt="" />
            <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/iPhone.jpeg" alt="" />
            <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/headphone.jpeg" alt="" />
          </Col>
        </Row>
      </StyledElement>
      <StyledElement name="section-4">
        <Row>
          <Col>
            <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/iPhone.jpeg" alt="" />
            <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/speaker.jpeg" alt="" />
            <img className="pictures-img" src="https://jumbo.g-axon.work/images/products/speaker.jpeg" alt="" />
          </Col>
        </Row>
      </StyledElement>
    </RightColumn>
  </FlexDiv>
  </Container>
);

export default Home;
