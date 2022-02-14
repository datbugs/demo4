import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Typography, Button, Input } from 'antd';
import { Container } from 'react-bootstrap';
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from '../../stores';
import { FriendSelector, FollowSelector, getListState } from './Selector';
import { CouterFriend, CouterFollow, AddUser, DeleteUser, UpdateUser } from './Thunk';

const { Title } = Typography;

export const ListContact = () => {
  const { friend } = useSelector(FriendSelector);
  const { follow } = useSelector(FollowSelector);
  console.log(friend);
  // console.log(follow);
  const [nameInput, setNameInput] = useState("");
  console.log(nameInput);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = () => {
    setNameInput("");
    dispatch(AddUser({ id: uuidv4(), name: nameInput }));
  };
  const listUser = useSelector(getListState);
  console.log(listUser)
  const dispatch = useDispatch<AppDispatch>()



  return (
    <Container className='listcontact-info'>
      <Title className='title-contact' level={5}>List Contact</Title>
      <Input.Group compact>
        <Input type='text' placeholder='search' onChange={(e) => setSearchInput(e.target.value)} style={{ width: 'calc(100% - 200px)' }} />
      </Input.Group>
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
        {listUser.filter((user) => {
          if (searchInput == "") {
            return user
          } else if (user.name.toLowerCase().includes(searchInput.toLowerCase())) {
            return user
          }
        }).map((user, index) => (
          <div key={index}>
            <span>{user.name}</span>
            <div className="bth-item">
              <Button type="primary">Sửa</Button>
              <Button onClick={() => dispatch(DeleteUser(user.id))} type="primary" danger>Xóa</Button>
            </div>
          </div>

        ))}
      </>



    </Container>
  )
}
