import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Typography, Button, Input } from 'antd';
import { Container } from 'react-bootstrap';
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from '../../stores';
import { FriendSelector, FollowSelector, getTodosState } from './Selector';
import { CouterFriend, CouterFollow, AddTodo, DeleteTodo } from './Thunk';


const { Title } = Typography;

export const ListContact = () => {

  const { friend } = useSelector(FriendSelector);
  const { follow } = useSelector(FollowSelector);
  console.log(friend);
  // console.log(follow);
  const [nameInput, setNameInput] = useState("");
  console.log(nameInput);

  const handleSubmit = () => {
    dispatch(AddTodo({ id: uuidv4(), title: nameInput }));
  };
  const list = useSelector(getTodosState);
  console.log(list)


  const dispatch = useDispatch<AppDispatch>()


  return (
    <Container className='listcontact-info'>
      <Title className='title-contact' level={5}>List Contact</Title>
      <Input.Group compact>
        <Input type='text' onChange={(e) => setNameInput(e.target.value)} placeholder='name' style={{ width: 'calc(100% - 200px)' }} />
        <Button onClick={handleSubmit} type="primary">Submit</Button>
      </Input.Group>


      <Row>
        <Button onClick={() => dispatch(CouterFriend(friend + 1))} type="primary">Friend {friend}</Button>
      </Row>
      <Row>
        <Button onClick={() => dispatch(CouterFollow(follow + 1))} type="primary">Follow {follow}</Button>
      </Row>
      <>
        {list.map((todo, index) => (
          <div key={index}>
            <span>{todo.title}</span>
            <Button type="primary">Sửa</Button>
            <Button onClick={() => dispatch(DeleteTodo(todo.id))} type="primary" danger>Xóa</Button>
          </div>
        ))}
      </>

    </Container>
  )
}
