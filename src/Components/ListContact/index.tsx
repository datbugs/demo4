import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { Row, Typography, Button, Input } from 'antd';
import { Container } from 'react-bootstrap';
import "./style.css";
import { AppDispatch } from '../../stores';
import { FriendSelector, FollowSelector, getListState } from './Selector';
import { CouterFriend, CouterFollow, AddUser, DeleteUser, UpdateUser, fetchUserThunk } from './Thunk';

const { Title } = Typography;

export const ListContact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { friend } = useSelector(FriendSelector);
  const { follow } = useSelector(FollowSelector);
  const listUser = useSelector(getListState);
  const [nameInput, setNameInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchUserThunk(true));
  }, [dispatch]);

  const x = useMemo(() => { }, []);

  const handleSubmit = useCallback(() => {
    clearInputs();
    // dispatch(AddUser({ id: uuidv4(), first_name: nameInput }));
  }, []);

  const clearInputs = () => {
    setNameInput("");
  };

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
      {listUser && listUser.data.filter((data) => {
        if (searchInput == "") {
          return data
        } else if (data.first_name.toLowerCase().includes(searchInput.toLowerCase())) {
          return data
        }
      }).map((data, index) => (
        <div key={index}>
          <span>{data.first_name}</span>
          <div className="bth-item">
            <Button type="primary">Sửa</Button>
            {/* <Button onClick={() => dispatch(DeleteUser(data.id))} type="primary" danger>Xóa</Button> */}
          </div>
        </div>
      ))}
    </Container>
  )
}
