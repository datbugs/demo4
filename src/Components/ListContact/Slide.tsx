import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "stores";
import { ITodoItem } from "./interface";
import { CouterFriend, CouterFollow, AddTodo, DeleteTodo } from './Thunk'



export interface ListState {
  follow: number,
  friend: number,
  todos: ITodoItem[],


}

const initialState: ListState = {
  follow: 0,
  friend: 0,
  todos: [],
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
      .addCase(AddTodo.fulfilled, (state, action) => {
        console.log(action.payload)
        return {
          ...state,
          todos : [...state.todos, action.payload]
        }
      })
      .addCase(DeleteTodo.fulfilled, (state, action) => {
        return {
          ...state,
          todos: state.todos.filter((item) => item.id !== action.payload)
        }
      })
  }
})


export default listSlice.reducer


