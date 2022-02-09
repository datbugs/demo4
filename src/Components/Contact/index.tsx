import { Row, Col, Typography } from 'antd';
import { Container } from 'react-bootstrap';
import { MailTwoTone, FacebookFilled, PhoneTwoTone } from '@ant-design/icons';
import "./style.css"

const { Title } = Typography;

export const Contact = () => {
  return (
    <Container className='contact-info'>
      <Title className='title-contact' level={5}>Contact</Title>
      <Row >
        <Col span={7}>
          <div className='item-contact'>
            <div className="icon-mail">
              <MailTwoTone style={{ fontSize: '20px', padding:'8px', backgroundColor: "rgba(33, 150, 243, 0.1)", borderRadius:'4px' }} />
            </div>
            <div className='mail'>
              <p>Email</p>
              <p>datbugs807@gmail.com</p>
            </div>
          </div>
          <div className='item-contact'>
            <div className="icon-fb">
              <FacebookFilled style={{ fontSize: '20px', color: "#2196f3", padding:'8px', backgroundColor: "rgba(33, 150, 243, 0.1)", borderRadius:'4px' }} />
            </div>
            <div className='fb'>
              <p>FaceBook</p>
              <p>facebook.com/datboxit</p>
            </div>
          </div>
          <div className='item-contact'>
            <div className="icon-phone">
              <PhoneTwoTone style={{ fontSize: '20px', padding:'8px', backgroundColor: "rgba(33, 150, 243, 0.1)", borderRadius:'4px' }} />
            </div>
            <div className='phone'>
              <p>Phone</p>
              <p>0822626069</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
