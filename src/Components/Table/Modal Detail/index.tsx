import React, { useState } from 'react';
import { Modal, Button, Typography, List } from 'antd';
import { Item } from '../interface';


const { Text } = Typography;

interface Props {
  dataCheckbox: Item[]
}

export const TableModalDetail = ({ dataCheckbox }: Props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showModal}>
        Modal List
      </Button>
      <Modal title="Model Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Text type="danger">Hello!!!</Text>
        {dataCheckbox.map((item, index) => <List.Item key={index}>
          <List.Item.Meta
            title={<Text type="success">STT: {item.stt}<br/>Name: {item.name}</Text>}
            description={
              <Text type="success">Age: {item.age} <br />Email: {item.email}<br />Address: {item.address}</Text>
            }
          />
        </List.Item>)}

      </Modal>
    </>
  );
};
