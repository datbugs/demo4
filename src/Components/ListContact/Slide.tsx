import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "stores";
import { getTextOfJSDocComment } from "typescript";
import { IUserItem } from "./interface";
import { CouterFriend, CouterFollow, AddUser, DeleteUser, UpdateUser } from './Thunk'



export interface ListState {
  follow: number,
  friend: number,
  users: IUserItem[],

}

const initialState: ListState = {
  follow: 0,
  friend: 0,
  users: [
    {
      id: "1a",
      name: "Đạt",
    },
    {
      id: "1b",
      name: "Đức",
    },
    {
      id: "1c",
      name: "Dũng",
    },
  ],
}

const listSlice = createSlice({
  name: 'couterlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CouterFollow.fulfilled, (state, action) => {
        return {
          ...state,
          follow: action.payload,
        };
      })
      .addCase(CouterFriend.fulfilled, (state, action) => {
        return {
          ...state,
          friend: action.payload,
        };
      })
      .addCase(AddUser.fulfilled, (state, action) => {
        console.log(action.payload)
        return {
          ...state,
          users: [...state.users, action.payload]
        };
      })
      .addCase(DeleteUser.fulfilled, (state, action) => {
        return {
          ...state,
          users: state.users.filter((item) => item.id !== action.payload)
        };
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        const {
          payload:{id, name},
        } = action;
        return {
          ...state,
          users: state.users.map((item) => item.id === id ? { ...item, name } : item
          )
        }
      })
  }
})


export default listSlice.reducer


