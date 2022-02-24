import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchDataThunk, removeUserThunk } from './tableThunk';
import { Item } from './interface';

export interface TableState {
  dataUser: Item[],
}

const initialState: TableState = {
  dataUser: [],
}

const tableSlide = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataThunk.fulfilled, (state, action) => ({
      ...state,
      demo: action.payload,
    }));
    builder.addCase(removeUserThunk.fulfilled, (state, action) => {
      state.dataUser = state.dataUser.filter((item) => item.id !== action.payload);
      console.log("thành công remove dữ liệu", );
    });

  }

});

export default tableSlide.reducer
