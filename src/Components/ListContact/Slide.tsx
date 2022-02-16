import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, DataDetail } from "./interface";
import { CouterFriend, CouterFollow, AddUser, DeleteUser, UpdateUser, fetchUserThunk } from './Thunk'



export interface ListState {
  follow: number,
  friend: number,
  data: IData | null,

}

const initialState: ListState = {
  follow: 0,
  friend: 0,
  data: null,
}

const listSlice = createSlice({
  name: 'couterlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
    }));
    builder.addCase(CouterFollow.fulfilled, (state, action) => ({
      ...state,
      follow: action.payload,
    }
    ));
    builder.addCase(CouterFriend.fulfilled, (state, action) => ({
      ...state,
      friend: action.payload,
    }
    ));
    builder.addCase(AddUser.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
    }
    ));
    // builder.addCase(DeleteUser.fulfilled, (state, action) => ({
    //   ...state,
    //       state.data = state.data.filter((item) => item.id !== action.payload)

    // }))
    // builder
    //   .addCase(CouterFollow.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       follow: action.payload,
    //     };
    //   })
    //   .addCase(CouterFriend.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       friend: action.payload,
    //     };
    //   })
    //   .addCase(fetchUserThunk.fulfilled, (state, action) => {
    //     console.log(action.payload.data.first_name, 'add')
    //     return {
    //       ...state,
    //       data: [...state.data, action.payload]
    //     };
    //   })
    //   .addCase(AddUser.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       data: [...state.data, action.payload]
    //     };
    //   })
    //   .addCase(DeleteUser.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       data: state.data.filter((item) => item.id !== action.payload)
    //     };
    //   })
    //   .addCase(UpdateUser.fulfilled, (state, action) => {
    //     const {
    //       payload:{id, first_name},
    //     } = action;
    //     return {
    //       ...state,
    //       data: state.data.map((item) => item.id === id ? { ...item, first_name } : item
    //       )
    //     }
    //   })
  }
})


export default listSlice.reducer


